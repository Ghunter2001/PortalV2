import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = "Name is required";
        }
        if (!values.email) {
            errors.email = "Email is required";
        }
        if (!values.password) {
            errors.password = "Password is required";
        }
        return errors;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await axios.post('http://localhost:3000/signup', values);
                if (response.data.Message) {
                    navigate('/login');
                }
            } catch (error) {
                console.error("There was an error!", error);
            }
        }
    };

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center bg-success'>
            <div className='p-3 bg-white rounded w-100 mx-2' style={{ maxWidth: '400px' }}>
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="name" className="form-label">
                            <strong>Name:</strong>
                        </label>
                        <input
                            name='name'
                            type="text"
                            placeholder="Enter Name"
                            className='form-control rounded-0'
                            onChange={handleInput}
                        />
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="email" className="form-label">
                            <strong>Email:</strong>
                        </label>
                        <input
                            name='email'
                            type="email"
                            placeholder="Enter Email"
                            className='form-control rounded-0'
                            onChange={handleInput}
                        />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="password" className="form-label">
                            <strong>Password:</strong>
                        </label>
                        <input
                            name='password'
                            type="password"
                            placeholder="Enter Password"
                            className='form-control rounded-0'
                            onChange={handleInput}
                        />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>

                    <button type='submit' className='btn btn-success w-100'>Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
