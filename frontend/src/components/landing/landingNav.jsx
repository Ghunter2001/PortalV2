import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../pages/landing/landing.css';

const Header = () => {
    return (
        <Navbar fixed="top" expand="lg" className=" header">
            <Navbar.Brand href="/" className='header-left'>
                <img src="/assets/CvsuLogo.png" alt="CvSU Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='header-right'>
                <Nav className="ms-auto">
                    <Nav.Item>
                        <Link to='/' className='nav-link text-white'>Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to='/aboutmain' className='nav-link text-white'>About</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to='/cvsuhym' className='nav-link text-white'>CVSU hymn</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to='/admission' className='nav-link text-white'>Admission</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to='/login' className='nav-link text-white'>Login</Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
