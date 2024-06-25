import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from "react-router-dom";

function About() {
    return (
        <div>
            <section id="features" className="text-center py-5">
                <Container className=' mt-5'>
                    <h1 className=' mb-4'>About</h1>
                    <Row className="justify-content-center gap-4">
                        <Col md={5} className="fea-box2 p-4 bg-light text-start shadow-sm">
                            <h3>Vision</h3>
                            <ul className="list-unstyled">
                                <li>The premier University in historic Cavite recognized for excellence in development of globally competitive and morally upright individuals.</li>
                            </ul>
                        </Col>
                        <Col md={5} className="fea-box2 p-4 bg-light text-start shadow-sm">
                            <h3>Mission</h3>
                            <ul className="list-unstyled">
                                <li>Cavite State University shall provide excellent, equitable and relevant educational opportunities in the arts, sciences and technology through quality instruction and responsive research and development activities.</li>
                                <li>It shall produce professional, skilled and morally upright individuals for global competitiveness.</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section id="history" className="py-5 bg-light">
                <Container>
                    <Row>
                        <Col md={6} className="history-left">
                            <img src="/assets/BG-3.jpg" alt="History Image" className="img-fluid" />
                        </Col>
                        <Col md={6} className="history-right p-4 bg-white shadow-sm">
                            <h3>History</h3>
                            <div className="history-box">
                                <p>The Cavite State University (CvSU) has its humble beginnings in 1906 as the Indang Intermediate School with the American Thomasites as the first teachers. Several transformations in the name of the school took place; Indang Farm School in 1918, Indang Rural High School in 1927, and Don Severino National Agriculture School in 1958. In 1964, the school was converted into a State College by virtue of Republic Act 3917 and became known as Don Severino Agricultural College (DSAC). On January 22, 1998, by virtue of Republic Act No.8468, DSAC was converted into Cavite State University. In 2001, Cavite College of Fisheries (CACOF) in Naic, Cavite and Cavite College of Arts and Trade (CCAT) in Rosario, Cavite, were integrated into the University by virtue of CHED Memo No. 27 s. 2000. Since then, additional campuses in the province were established through memoranda of agreement with the LGUs. At present, CvSU has 11 campuses in the province. The main campus, approximately 70 hectares in land area and named as Don Severino delas Alas Campus, is in Indang, Cavite.</p>
                                <p>CvSU is mandated “to provide excellent, equitable and relevant educational opportunities in the arts, sciences and technology through quality instruction, and responsive research and development activities. It shall produce professional, skilled and morally upright individuals for global competitiveness.”</p>
                                <p>The University is offering close to 100 curricular programs in the undergraduate and graduate levels. It has more than 25,000 students and 1,200 faculty and staff from all campuses. The University is also authorized to certify and confer appropriate academic degrees in accordance with the Expanded Tertiary Education and Accreditation Program (ETEEAP). It has been accredited by TESDA as Trade and Testing Venue, and designated by the Department of Agriculture as the National Center for Research and Development for Coffee and Urban Agriculture. It also hosts the Southern Tagalog Agriculture Research and Development Consortium (STARDEC), the Affiliated Renewable Energy Center for Region IV-A, and the Regional ICT Center for Region IV-A.</p>
                                <p>CvSU adheres to its commitment to Truth, Excellence and Service as it aims to be the “premier University in historic Cavite recognized for excellence in the development of globally competitive and morally upright individuals”.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Outlet />
        </div>
    );
}

export default About;
