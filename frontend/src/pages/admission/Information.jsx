import React from 'react'



function Information() {
    return (
        <div className='container'>

            <form action="" className='row w-100'>
                <div>
                    <h2>Admission Information</h2>
                </div>
                <div className='col-3 w-50'>
                    <div className='mb-3'>
                        <label htmlFor="entry">
                            <strong>
                                Entry:
                            </strong>
                        </label>
                        <div>
                            <select name="type" id="type" className="w-100 btn btn-transparent border-black">
                                <option value="">Select</option>
                                <option value="New">New</option>
                                <option value="Transferee">Transferee</option>
                                <option value="Courser">Courser</option>
                            </select>
                        </div>

                    </div>

                    <div className='mb-3'>
                        <label htmlFor="strand">
                            <strong>
                                SHS Strand:
                            </strong>
                        </label>

                        <div>
                            <select name="strand" id="strand" className="w-100 btn btn-transparent border-black">
                                <option value="">Select</option>
                                <option value="GAS">GAS</option>
                                <option value="HUMSS">HUMSS</option>
                                <option value="STEM">STEM</option>
                                <option value="TVL">TVL</option>
                            </select>
                        </div>
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="lrn">
                            <strong>
                                Learner's Reference Number:
                            </strong>
                        </label>
                        <input
                            name='lrn'
                            type="text"
                            placeholder=""
                            className='form-control rounded border-black bg-transparent'
                        />
                    </div>
                </div>


                <div className='col-3 w-50'>
                    <div className='mb-3'>
                        <label htmlFor="course">
                            <strong>
                                Preferred Courrse:
                            </strong>
                        </label>

                        <div>
                            <select name="course" id="course" className="w-100 btn btn-transparent border-black">
                                <option value="">Select</option>
                                <option value="BSIT">BSIT</option>
                                <option value="BSCS">BSCS</option>
                                <option value="BSHM">BSHM</option>
                                <option value="BCS">BCS</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3">
                        <button className="btn btn-success" type="submit">
                            Mark as Complete
                        </button>
                    </div>

            </form>
        </div>
    );
}

export default Information