import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './landing.css';

const Home = () => {
    return (
        <div>
            <section 
                id="home" 
                className="d-flex flex-column justify-content-center align-items-center text-white text-center" 
                >
                <h2>Cavite State University - Bacoor City Campus</h2>
                <p className="w-50">Provide Quality and Affordable Education which, Promotes Intellectual Growth, Academic Excellence and moral Integrity.</p>
            </section>

            <section id="features" className="text-center py-5">
                <Container>
                    <h1>CvSU Bacoor City Campus</h1>
                    <p>In support to the Vision and Mission of the University, CvSU Bacoor City Campus shall</p>
                    <Row className="justify-content-center">
                        <Col md={5} className="fea-box mb-4 p-4 bg-light text-start shadow-sm">
                            <img src="/assets/school.svg" alt="Goals" className="mb-3" style={{ width: "50px" }} />
                            <h3 className="h5">Goals of the CvSU Bacoor City Campus</h3>
                            <ul className="list-unstyled">
                                <li>1. Provide quality and affordable education which promotes intellectual growth, academic excellence and moral integrity.</li>
                                <li>2. Prepare students to meet the demands of the global market and respond to the society’s needs.</li>
                                <li>3. Develop innovative and scholarly researchers who have the ability to create new understanding in quest for quality research through inquiry, analysis and problem solving.</li>
                                <li>4. Produce globally competitive graduates with full competence in their fields of study.</li>
                            </ul>
                        </Col>
                        <Col md={5} className="fea-box mb-4 p-4 bg-light text-start shadow-sm">
                            <img src="/assets/user.svg" alt="Courses" className="mb-3" style={{ width: "50px" }} />
                            <h3 className="h5">Courses Offered</h3>
                            <ul className="list-unstyled">
                                <li>Bachelor of Secondary Education</li>
                                <li>BS Business Management</li>
                                <li>BS Computer Science</li>
                                <li>BS Criminology</li>
                                <li>BS Hospitality Management (formerly BS Hotel and Restaurant Management)</li>
                                <li>BS Information Technology</li>
                                <li>BS Psychology</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Home;
