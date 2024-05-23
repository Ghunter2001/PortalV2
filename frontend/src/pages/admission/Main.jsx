import React from 'react'
import Nav from '../../components/admission/Nav';
import Home from './home';

function Main() {
    return (
        <div className='container-fluid bg-white vh-100'>  
            <div className='row'>
                <Nav />
                <div className='d-flex justify-content-center align-items-center vh-100'>
                    <Home />
                </div>
            </div>
        </div>
    )
}

export default Main