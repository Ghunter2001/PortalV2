import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from '../validations/LoginValidation';
import axios from 'axios';

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };


    axios.defaults.withCredentials = true;
    const handleSubmit = (event) => {
        event.preventDefault();
        setError(Validation(values));

        if (error.email === "" && error.password === "") {
            axios.post('http://localhost:3000/auth/adminlogin', values)
                .then(result => {
                    if (result.data.loginStatus) {
                        localStorage.setItem("valid", true)
                        navigate('/department')
                    } else {
                        setError(result.data.Error)
                    }
                })
                .catch(err => console.log(err))
        }
    };

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center bg-success'>
            <div className='p-3 bg-white rounded w-25'>

                <h2>Login</h2>
                <form action="" onSubmit={handleSubmit}>

                    <div className='mb-3'>
                        <label htmlFor="email">
                            <strong>
                                Username:
                            </strong>
                        </label>
                        <input
                            id="email"
                            name='email'
                            type="email"
                            placeholder="Enter Username"
                            className='form-control rounded-0'
                            onChange={handleInput}
                        />
                        {error.email && <span className='text-danger'>{error.email}</span>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="password">
                            <strong>
                                Password:
                            </strong>
                        </label>
                        <input
                            id='password'
                            name='password'
                            type="password"
                            placeholder="Enter Password"
                            className='form-control rounded-0'
                            onChange={handleInput}
                        />
                        {error.password && <span className='text-danger'>{error.password}</span>}
                    </div>
                    <button className='btn btn-success w-100'>Login</button>
                    <p>Not Have Account Yet?</p>
                    <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Click Here</Link>
                    <Link to='/' className='mt-3 text-decoration-none d-flex justify-content-sm-center'>Back to Main Page</Link>
                </form>
            </div>
        </div>
    )
}

export default Login;
