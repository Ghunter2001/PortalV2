import express from 'express';
import con from "../utils/db.js";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ Error: "All fields are required" });
    }

    const sqlCheckUser = "SELECT * FROM admin WHERE email = ?";
    con.query(sqlCheckUser, [email], async (err, result) => {
        if (err) return res.status(500).json({ Error: "Database query error" });

        if (result.length > 0) {
            return res.status(400).json({ Error: "User already exists" });
        } else {
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const sqlInsertUser = "INSERT INTO admin (username, email, pass) VALUES (?, ?, ?)";
            con.query(sqlInsertUser, [name, email, hashedPassword], (err, result) => {
                if (err) return res.status(500).json({ Error: "Error inserting user" });

                return res.status(201).json({ Message: "User registered successfully" });
            });
        }
    });
});

export { router as signupRouter };
