import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '/assets/CvsuLogo.png'; 


const Footer = () => {
    return (
        <footer className="bg-success text-white text-center py-5">
            <Container>
                <Row className="mb-4">
                    <Col md={3} className="mb-3 mb-md-0">
                        <img src={logo} className="logo1 mb-3" alt="CvSU Logo" />
                        <h3 className="h5">Cavite State University Campus</h3>
                    </Col>
                    <Col md={3} className="mb-3 mb-md-0">
                        <h3 className="h5">Address</h3>
                        <p>Phase 2, Soldiers Hills 4, Molino 6, City of Bacoor</p>
                    </Col>
                    <Col md={3} className="mb-3 mb-md-0">
                        <h3 className="h5">Contacts</h3>
                        <p><i className="uil uil-phone"></i> (046) 476 5029</p>
                        <p><i className="uil uil-envelope-alt"></i> cvsubacoor@cvsu.edu.ph</p>
                    </Col>
                    <Col md={3} className="mb-3 mb-md-0">
                        <h3 className="h5">Social Media</h3>
                        <a href="https://www.facebook.com/CvSUBacoorCityCampus" className="text-white fs-4 me-3">
                            <i className="uil uil-facebook"></i>
                        </a>
                    </Col>
                </Row>
                <hr className="bg-light" />
                <p className="mb-0">2024 Cavite State University | Bacoor, Cavite, Philippines</p>
            </Container>
        </footer>
    );
};

export default Footer;
