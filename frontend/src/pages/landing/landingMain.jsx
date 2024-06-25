import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './landing.css';
import Navigation from '../../components/landing/landingNav';
import Footer from '../../components/landing/landingFooter';
import { Outlet } from 'react-router-dom';

function Landing() {
    return (
        <div>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Landing;
