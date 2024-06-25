import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function CvsuHymn() {
    return (
        <div>
            <section id="hym" className="d-flex flex-column justify-content-center align-items-center text-center py-5">
                <Container>
                    <Row className="justify-content-center mt-5 ">
                        <Row md={8} className="hym-box p-4 bg-light text-start shadow-sm">
                            <Col md={6} className="history-left">
                                <h3>CvSU HYMN</h3>
                                <iframe 
                                    width="100%" 
                                    height="315" 
                                    src="https://www.youtube.com/embed/A2fOWAo9jME?si=DeVc_7bfjV4NveGn" 
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerPolicy="strict-origin-when-cross-origin" 
                                    allowFullScreen
                                    className="mb-4"
                                ></iframe>
                            </Col>
                            <Col md={6} className="history-right p-4 bg-white shadow-sm">
                                <ul className="list-unstyled">
                                    <li>Hail Alma Mater Dear</li>
                                    <li>CvSU all the way through</li>
                                    <li>Seat of hope that we dream of</li>
                                    <li>Under the sky so blue</li>
                                    <li>Verdant fields God’s gift to you</li>
                                    <li>Open our lives a new</li>
                                    <li>Oh, our hearts, our hands, our minds, too</li>
                                    <li>In your bosom thrive and grow.</li>
                                    <li>Seeds of hope are now in bloom</li>
                                    <li>Vigilant sons to you have sworn</li>
                                    <li>To CvSU our faith goes on</li>
                                    <li>Cradle of hope and bright vision.</li>
                                    <li>These sturdy arms that care</li>
                                    <li>Are the nation builders</li>
                                    <li>Blessed with strength and power</li>
                                    <li>To our Almighty we offer.</li>
                                    <li>We Pray for CvSU</li>
                                    <li>God’s Blessing be with you</li>
                                    <li>You’re the master, we’re the builders</li>
                                    <li>CvSU leads forever.</li>
                                </ul>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default CvsuHymn;
