import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from '../validations/LoginValidation';
import axios from 'axios';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));

        if (errors.email === "" && errors.password === "") {
            axios.post('http://localhost:4000/login', values)
                .then(res => {
                    if (res.data.Login) {
                        navigate('/home');
                    }
                    else {
                        alert("No Record");
                    }
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center bg-success'>
            <div className='p-3 bg-white rounded w-25'>
                <h2>Login</h2>
                <form action="" onSubmit={handleSubmit}>

                    <div className='mb-3'>
                        <label htmlFor="username">
                            <strong>
                                Username:
                            </strong>
                        </label>
                        <input
                            name='email'
                            type="email"
                            placeholder="Enter Username"
                            className='form-control rounded-0'
                            onChange={handleInput}
                        />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="password">
                            <strong>
                                Password:
                            </strong>
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
                    <button type='submit' className='btn btn-success w-100'>Login</button>
                    <p>Not Have Account Yet?</p>
                    <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Click Here</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;
