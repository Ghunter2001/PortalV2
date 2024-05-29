import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegCircleXmark, FaRegCircleCheck } from "react-icons/fa6";

import './home.css';

function Home() {
    return (
        <div className="container">
            <div className="bg-white rounded-lg">
                <h3 className="h4 font-weight-bold">Application Form for Admission</h3>
                {/* <h4 className="h5">1st sem 2024-2025</h4> */}
                <p className="mt-4">Please fill out the required fields in the application. Download and print the profile after completion. You need to submit this with your requirements to the Office of Student Affairs and Services.</p>
                <hr className="mt-4" />

                <div className="row">
                    <div className="col-12 bg-light rounded">
                        <div className="hh-grayBox">
                            <div className="row">
                                <div className="col-6 col-md-3 order-tracking text-center">
                                    <span className="is-complete"></span>
                                    <p>Control Number</p>
                                </div>
                                <div className="col-6 col-md-3 order-tracking text-center">
                                    <span className="is-complete"></span>
                                    <p>Submission Schedule<br /><span></span></p>
                                </div>
                                <div className="col-6 col-md-3 order-tracking text-center">
                                    <span className="is-complete"></span>
                                    <p>Exam Schedule<br /><span></span></p>
                                </div>
                                <div className="col-6 col-md-3 order-tracking text-center">
                                    <span className="is-complete"></span>
                                    <p>Admission Result</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center mt-2">
                        <div className="col-8 col-md-4">
                            <h5 className="font-weight-semibold mt-4">Admission Information</h5>
                            <Link to="/admission/information" className="d-block mt-2 d-flex gap-2 text-success">
                                <FaRegCircleCheck className="inline-block mr-2 text" style={{ width: '1.5rem', height: '1.5rem' }} alt="Complete" />
                                Complete
                            </Link>
                            <h5 className="font-weight-semibold mt-4">Personal Information</h5>
                            <Link to="/admission/personal" className="d-block mt-2 d-flex gap-2 text-danger">
                                <FaRegCircleXmark className="inline-block mr-2 text" style={{ width: '1.5rem', height: '1.5rem' }} alt="Incomplete" />
                                Incomplete
                            </Link>
                            <h5 className="font-weight-semibold mt-4">Family Background</h5>
                            <Link to="/admission/family" className="d-block mt-2 d-flex gap-2 text-danger">
                                <FaRegCircleXmark className="inline-block mr-2 text" style={{ width: '1.5rem', height: '1.5rem' }} alt="Incomplete" />
                                Incomplete
                            </Link>
                        </div>

                        <div className="col-8 col-md-4 bg-light align-items-center p-4 mt-4">
                            <h6 className="font-weight-semibold text-center">Please complete the sections to get your control number and your application form.</h6>
                            <p className="mt-4 text-center">For questions and technical problems,<br /><a href="#" className="text-primary">Contact Admission Office</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
