import express from "express";
import cors from 'cors';
import { adminRouter } from "./Routes/AdminRoute.js";
import { EmployeeRouter } from "./Routes/EmployeeRoute.js";
import { signupRouter } from "./Routes/SignupRoute.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ['GET', 'POST', 'PUT', "DELETE"],
    credentials: true
}));

app.use(cookieParser());
app.use(express.static('Public'));
app.use(express.json());

app.use('/auth', adminRouter);
app.use('/employee', EmployeeRouter);
app.use('/signup', signupRouter);   

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
        Jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) return res.status(403).json({ Status: false, Error: "Invalid Token" });
            req.id = decoded.id;
            req.role = decoded.role;
            next();
        });
    } else {
        return res.status(401).json({ Status: false, Error: "Not authenticated" });
    }
};

app.get('/verify', verifyUser, (req, res) => {
    return res.json({ Status: true, role: req.role, id: req.id });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});