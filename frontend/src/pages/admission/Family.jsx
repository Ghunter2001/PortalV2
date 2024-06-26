import React from 'react';

function Family() {

    function enterfamothers() {
        famothers = document.getElementById('famothers');
        if (famothers.checked) {
            document.getElementById('specificfamothers').readOnly = false;
        }
        else {
            document.getElementById('specificfamothers').value = "";
            document.getElementById('specificfamothers').readOnly = true;
        }
    }
    function enterfam() {
        familyabroad = document.getElementById('familyabroad').value;
        if (familyabroad == 'Yes') {
            document.getElementById('famdetails').style.display = "block";
        }
        else {
            document.getElementById('famdetails').style.display = "none";
        }
    }

    return (
        <div className="container">
            <form className="needs-validation" noValidate action="" method="post">
                Required fields
                <h5>Family Background</h5>
                <div className="row">
                    <div className="col-md-4">
                        Father's Name<br />
                        <input type="text" className="form-control" name="fathername" />
                    </div>
                    <div className="col-md-4">
                        Contact Number<br />
                        <input
                            type="tel"
                            className="form-control"
                            name="fathercontact"
                            pattern="[0]{1}[9]{1}[0-9]{9}"
                            placeholder="09123456789"
                            maxLength="11"
                        />
                    </div>
                    <div className="col-md-4">
                        Occupation<br />
                        <input type="text" className="form-control" name="fatheroccupation" />
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        Mother's Name<br />
                        <input type="text" className="form-control" name="mothername" />
                    </div>
                    <div className="col-md-4">
                        Contact Number<br />
                        <input
                            type="tel"
                            className="form-control"
                            name="mothercontact"
                            pattern="[0]{1}[9]{1}[0-9]{9}"
                            placeholder="09123456789"
                            maxLength="11"
                        />
                    </div>
                    <div className="col-md-4">
                        Occupation<br />
                        <input type="text" className="form-control" name="motheroccupation" />
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        Estimated Monthly Family Income <br />
                        <select name="income" className="form-control custom-select" required>
                            <option></option>
                            <option>below 10,000</option>
                            <option>11,000-20,000</option>
                            <option>21,000-30,000</option>
                            <option>31,000-40,000</option>
                            <option>41,000-50,000</option>
                            <option>above 50,000</option>
                        </select>
                        <div className="invalid-feedback">Estimated Monthly Family Income is required</div>
                    </div>
                    <div className="col-md-4">
                        Number of siblings<br />
                        <select name="siblings" className="form-control custom-select">
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                            <option>15</option>
                            <option>16</option>
                            <option>17</option>
                            <option>18</option>
                            <option>19</option>
                            <option>20</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        Birth Order<br />
                        <select name="birthorder" className="form-control custom-select">
                            <option>Eldest</option>
                            <option>Second</option>
                            <option>Middle</option>
                            <option>Youngest</option>
                            <option>Only Child</option>
                        </select>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        Guardian's Name<br />
                        <input type="text" className="form-control" name="guardianname" required />
                        <span className="help-block" style={{ fontSize: '12px' }}>
                            Either the father or mother or any individual that acts as the guardian.
                        </span>
                        <div className="invalid-feedback">Guardian's name is required</div>
                    </div>
                    <div className="col-md-4">
                        Contact Number<br />
                        <input
                            type="tel"
                            className="form-control"
                            name="guardiancontact"
                            pattern="[0]{1}[9]{1}[0-9]{9}"
                            placeholder="09123456789"
                            maxLength="11"
                            required
                        />
                        <div className="invalid-feedback">Guardian's contact number is required</div>
                    </div>
                    <div className="col-md-4">
                        Occupation<br />
                        <input type="text" className="form-control" name="guardianoccupation" required />
                        <div className="invalid-feedback">Guardian occupation field is required</div>
                    </div>
                </div>
                <h5>Additional Family Information</h5>
                <div className="row">
                    <div className="col-md-4">
                        Are you a solo parent?<br />
                        <select className="form-control" name="soloparent">
                            <option>No</option>
                            <option>Yes</option>
                        </select>
                    </div>
                    <div className="col-md-4">
                        Do you have family members working abroad?<br />
                        <select className="form-control" name="familyabroad" id="familyabroad" onChange={enterfam}>
                            <option>No</option>
                            <option>Yes</option>
                        </select>
                    </div>
                </div>
                <hr />
                <div className="row" id="famdetails" style={{ display: 'none' }}>
                    <div className="col-md-4">
                        If yes, family members working abroad:<br />
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="fam1"
                                name="familymembers[]"
                                value="Father"
                            />
                            <label className="custom-control-label" htmlFor="fam1">
                                Father
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="fam2"
                                name="familymembers[]"
                                value="Mother"
                            />
                            <label className="custom-control-label" htmlFor="fam2">
                                Mother
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="fam3"
                                name="familymembers[]"
                                value="Husband/Wife"
                            />
                            <label className="custom-control-label" htmlFor="fam3">
                                Husband/Wife
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="fam4"
                                name="familymembers[]"
                                value="Children"
                            />
                            <label className="custom-control-label" htmlFor="fam4">
                                Children
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="fam5"
                                name="familymembers[]"
                                value="Sibling/s"
                            />
                            <label className="custom-control-label" htmlFor="fam5">
                                Sibling/s
                            </label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                className="custom-control-input"
                                id="famothers"
                                name="famothers"
                                onClick={enterfamothers}
                            />
                            <label className="custom-control-label" htmlFor="famothers">
                                Others: Please Specify
                            </label>
                        </div>
                        <input type="text" className="form-control" id="specificfamothers" name="specificfamothers" readOnly />
                    </div>
                    <div className="col-md-3">
                        Years working abroad:<br />
                        <input type="number" min={1} max={100} className="form-control" name="abroadyears" />
                        <div className="invalid-feedback">Range is 1-100</div>
                    </div>
                    <div className="col-md-3">
                        Country:<br />
                        <input type="text" className="form-control" name="abroadcountry" />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-lg-3">
                        <button className="btn btn-success" type="submit" name="saveFamily" id="saveFamily">
                            Mark as Complete
                        </button>
                    </div>
                    <div className="col-lg-9"></div>
                </div>
            </form>
            <form method="post" name="resetfam" id="resetfam">
                <input type="hidden" name="resetfamtxt" />
            </form>
        </div>
    );
}

export default Family;
