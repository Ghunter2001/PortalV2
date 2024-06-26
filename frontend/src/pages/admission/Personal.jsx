import React from 'react';

function PersonalInfo() {

    function loadprovince(region) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                document.getElementById('province').disabled = false;
                document.getElementById('province').innerHTML = this.responseText;
                document.getElementById('province').value = '';
                document.getElementById('town').disabled = true;
                document.getElementById('town').value = '';
                document.getElementById('zipcode').disabled = true;
                document.getElementById('zipcode').value = '';
            }
        };
        xhr.open('POST', '../includes/addressfilter.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('region=' + region);
    }

    function loadtown(province) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                document.getElementById('town').disabled = false;
                document.getElementById('town').innerHTML = this.responseText;
                document.getElementById('town').value = '';
                document.getElementById('zipcode').value = '';
            }
        };
        xhr.open('POST', '../includes/addressfilter.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('province=' + province);
    }

    function loadzip(town) {
        var prov = document.getElementById('province').value;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                document.getElementById('zipcode').disabled = false;
                document.getElementById('zipcode').value = this.responseText.trim();
            }
        };
        xhr.open('POST', '../includes/addressfilter.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('town=' + town + '&prov=' + prov);
    }


    return (
        <div className="container">
            <form className="needs-validation" noValidate method="post">
                Required fields
                <h3>Personal Information</h3>

                <div className="row">
                    <div className="col-md-4">
                        First Name<br />
                        <input type="text" className="form-control" name="firstname" required />
                        <div className="invalid-feedback">
                            First name is required
                        </div>
                    </div>
                    <div className="col-md-4">
                        Middle Name<br />
                        <input type="text" className="form-control" name="middlename" />
                    </div>
                    <div className="col-md-3">
                        Last Name<br />
                        <input type="text" className="form-control" name="lastname" required />
                        <div className="invalid-feedback">
                            Last name is required
                        </div>
                    </div>
                    <div className="col-md-1">
                        Suffix<br />
                        <select className="form-control" name="suffix" id="suffix">
                            <option></option>
                            <option>JR.</option>
                            <option>SR.</option>
                            <option>II</option>
                            <option>III</option>
                            <option>IV</option>
                            <option>V</option>
                            <option>VI</option>
                        </select>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-2">
                        Region<br />
                        <select name="region" className="custom-select form-control" onChange={(e) => loadprovince(e.target.value)}>
                            <option value="ncr">NCR (Metro Manila)</option>
                            <option value="1">REGION 1 - ILOCOS REGION</option>
                            <option value="2">REGION 2 - CAGAYAN VALLEY</option>
                            <option value="3">REGION 3 - CENTRAL LUZON</option>
                            <option value="4a">REGION 4A - CALABARZON</option>
                            <option value="4b">REGION 4B - MIMAROPA</option>
                            <option value="5">REGION 5 - BICOL REGION</option>
                            <option value="6">REGION 6 - WESTERN VISAYAS</option>
                            <option value="7">REGION 7 - CENTRAL VISAYAS</option>
                            <option value="8">REGION 8 - EASTERN VISAYAS</option>
                            <option value="9">REGION 9 - ZAMBOANGA PENINSULA</option>
                            <option value="10">REGION 10 - NORTHERN MINDANAO</option>
                            <option value="11">REGION 11 - DAVAO REGION</option>
                            <option value="12">REGION 12 - SOCCSKSARGEN</option>
                            <option value="13">REGION 13 - CARAGA</option>
                            <option value="14">REGION 14 - CAR</option>
                            <option value="15">REGION 15 - ARMM</option>
                            <option value="18">REGION 18 - NIR</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        Province<br />
                        <select disabled className="custom-select form-control" name="province" id="province" onChange={(e) => loadtown(e.target.value)}></select>
                    </div>
                    <div className="col-md-2">
                        Town<br />
                        <select disabled className="custom-select form-control" name="town" id="town" onChange={(e) => loadzip(e.target.value)}></select>
                    </div>
                    <div className="col-md-2">
                        Barangay<br />
                        <input type="text" className="form-control form-control" name="barangay" required />
                        <div className="invalid-feedback">
                            Barangay name is required
                        </div>
                    </div>
                    <div className="col-md-2">
                        Street<br />
                        <input type="text" className="form-control" name="street" required />
                        <div className="invalid-feedback">
                            Street name is required
                        </div>
                    </div>
                    <div className="col-md-2">
                        Zip Code<br />
                        <input type="text" disabled readOnly maxLength="0" size="3" className="form-control" name="zipcode" id="zipcode" required />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-4">
                        Cellphone Number (11-digit format)<br />
                        <input type="tel" className="form-control" name="cellphone" required pattern="[0]{1}[9]{1}[0-9]{9}" placeholder="09123456789" maxLength="11" />
                        <div className="invalid-feedback">
                            Must be a valid cellphone number
                        </div>
                    </div>
                    <div className="col-md-4">
                        Landline Number<br />
                        <input type="tel" className="form-control" pattern="\d" name="landline" maxLength="11" minLength="7" />
                        <div className="invalid-feedback">
                            Must be a valid landline number
                        </div>
                    </div>
                    <div className="col-md-2">
                        Civil Status<br />
                        <select name="civil_status" id="civil_status" className="custom-select form-control">
                            <option value=""></option>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Separated">Separated</option>
                            <option value="Widowed">Widowed</option>
                        </select>
                    </div>



                    <div className="col-md-2">
                        Sex<br />
                        <select name="sex" id="sex" className="custom-select form-control">
                            <option value=""></option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-3">
                        Date of Birth<br />
                        <input type="date" className="form-control" id="bdaypicker" name="birthday" max="2012-12-31" min="1942-01-01" required />
                        <div className="invalid-feedback">
                            Must be a valid date of birth
                        </div>
                    </div>
                    <div className="col-md-3">
                        Place of Birth<br />
                        <input type="text" className="form-control" id="birthplace" name="birthplace" required />
                        <div className="invalid-feedback">
                            Place of birth is required
                        </div>
                    </div>
                    <div className="col-md-3">
                        Religion<br />
                        <input type="text" className="form-control" name="religion" />
                    </div>
                    <div className="col-md-3">
                        Are you from an indigenous tribe?<br />
                        <select className="form-control" name="indigenous">
                            <option>No</option>
                            <option>Yes</option>
                        </select>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-lg-3">
                        <button className="btn btn-success" type="submit" name="savePersonal" id="savePersonal">Mark as Complete</button>
                    </div>
                    <div className="col-lg-9">
                        <input type="hidden" className="form-control" id="applicanttype" name="applicanttype" value="0" />
                    </div>
                </div>
            </form>
            <form method="post" name="resetpersonal" id="resetpersonal">
                <input type="hidden" name="resetpersonaltext" />
                <input type="hidden" className="form-control" id="applicanttype" name="applicanttype" value="0" />
            </form>
        </div>
    );
}

export default PersonalInfo;
