import React from 'react'
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div className='p-3 vh-100'>
            <div className=' d-flex float-end gap-3'>
                <div>
                    <Link to='/admission' className=' text-white text-decoration-none float-end'>Admission</Link>
                </div>
                <div>
                    <Link to='/login' className=' text-white text-decoration-none float-end'>Login</Link>
                </div>
            </div>
            <div className='d-flex vh-100 justify-content-center align-items-center'>
                <h1 className=' text-white-50'>Landing</h1>
            </div>
        </div>
    )
}

export default Landing