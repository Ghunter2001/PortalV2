import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

function Home() {

    return (
        <div className="flex justify-center items-center pt-4">
            <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl w-full">
                <h3 className="text-lg font-semibold">Application Form for Admission</h3>
                {/* <h4 className="text-md">1st sem 2024-2025</h4> */}
                <p className="mt-4">Please fill out the required fields in the application. Download and print the profile after completion. You need to submit this with your requirements to the Office of Student Affairs and Services.</p>
                <hr className="my-4" />

                <div className="row">
                    <div className="col-span-2 md:col-span-1 bg-gray-100 rounded-lg p-4">
                        <div className="hh-grayBox">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div className="order-tracking ">
                                    <span className="is-complete"></span>
                                    <p>Control Number</p>
                                </div>
                                <div className="order-tracking ">
                                    <span className="is-complete"></span>
                                    <p>Submission Schedule<br /><span></span></p>
                                </div>
                                <div className="order-tracking ">
                                    <span className="is-complete"></span>
                                    <p>Exam Schedule<br /><span></span></p>
                                </div>
                                <div className="order-tracking ">
                                    <span className="is-complete"></span>
                                    <p>Admission Result</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className="col-8 col-md-4">
                            <h5 className="font-semibold mt-4">Admission Information</h5>
                            <Link to="/admission/information" className="block mt-2">
                                <img src="../img/complete.png" className="inline-block w-4 h-4 mr-2" alt="Complete" />Complete
                            </Link>
                            <h5 className="font-semibold mt-4">Personal Information</h5>
                            <Link to="/admission/personal" className="block mt-2">
                                <img src="../img/incomplete.png" className="inline-block w-4 h-4 mr-2" alt="Incomplete" />Incomplete
                            </Link>
                            <h5 className="font-semibold mt-4">Family Background</h5>
                            <Link to="/admission/family" className="block mt-2">
                                <img src="../img/incomplete.png" className="inline-block w-4 h-4 mr-2" alt="Incomplete" />Incomplete
                            </Link>
                            
                        </div>

                        <div className="col-8 col-md-4 bg-body-secondary d-flex flex-column align-items-center p-4">
                            <h6 className="font-semibold">Please complete the sections to get your control number and your application form.</h6>
                            <p className="mt-4">For questions and technical problems,<br /><a href="#" className="text-blue-500">Contact Admission Office</a></p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Home;
