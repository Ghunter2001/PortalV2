import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './landing.css';
import Navigation from '../../components/landing/landingNav';
import Home from '../../pages/landing/landingHome';
import Footer from '../../components/landing/landingFooter';

function Landing() {
    return (
        <div>
            <Navigation />
            <Home />
            <Footer />
        </div>
    );
}

export default Landing;
