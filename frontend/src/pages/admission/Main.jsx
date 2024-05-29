import React from 'react'
import Nav from '../../components/admission/Nav';
import { Outlet } from 'react-router-dom';

function Main() {
    return (
        <div className='container-fluid bg-white'>
            <div className='row'>
                <Nav/>
                <div className='d-flex min-vh-100 justify-content-center pt-5'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Main