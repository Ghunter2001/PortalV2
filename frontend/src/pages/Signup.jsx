    import React, { useState } from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import Validation from '../validations/SignupValidation';
    import axios from 'axios';

    function Signup() {
        const [values, setValues] = useState({
            name: '',
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

            if (errors.name === "" && errors.email === "" && errors.password === "") {
                axios.post('http://localhost:4000/signup', values)
                    .then(res => {
                        navigate('/');
                    })
                    .catch(err => console.log(err));
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
                        <p className="mt-3 d-flex gap-1">Already have an account?<Link to="/login" ><p>Click here</p></Link></p>
                        <Link to='/' className='mt-3 text-decoration-none d-flex justify-content-center'>Back to Main Page</Link>
                    </form>
                </div>
            </div>
        )
    }

    export default Signup;
