import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from "react-router-dom";

function about() {
    return (
        <div>
            <section id="features">
                <Container>
                    <h1> </h1>
                    <p></p>
                    <div className="fea-base">
                        <div className="fea-box2">
                            <h3>Vision</h3>
                            <ul style={{listStyle: 'none'}}>
                                <li>The premier University in historic Cavite  recognized for excellence in  development of globally competitive and morally upright individuals.</li>
                            </ul>
                        </div>
                        <div className="fea-box2">
                            <h3>Mission</h3>
                            
                            <ul style={{listStyle: 'none'}}>
                                <li>Cavite State University shall provide excellent, equitable and relevant educational opportunities in the arts, sciences and technology through quality instruction and responsive research and development activities.</li>
                                <li>  It shall produce professional, skilled and morally upright individuals for global competitiveness.
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            <section id="history">
            <div className="history-left">
                {/* <img src="/assets/BG-3.jpg" > */}
            </div>
                <div className="history-right">
                    <h3>History</h3>
                    <div className="history-box">
                        <p>The Cavite State University (CvSU) has its humble beginnings in 1906 as the Indang Intermediate School with the American Thomasites as the first teachers. Several transformations in the name of the school took place; Indang Farm School in 1918, Indang Rural High School in 1927, and Don Severino National Agriculture School in 1958. In 1964, the school was converted into a State College by virtue of Republic Act 3917 and became known as Don Severino Agricultural College (DSAC).
                            On January 22, 1998, by virtue of Republic Act No.8468, DSAC was converted into Cavite State University. In 2001, Cavite College of Fisheries (CACOF) in Naic, Cavite and Cavite College of Arts and Trade (CCAT) in Rosario, Cavite, were integrated to the University by virtue of CHED Memo No. 27 s. 2000. Since then, additional campuses in the province were established through memoranda of agreement with the LGUs. At present, CvSU has 11 campuses in the province. The main campus, approximately 70 hectares in land area and named as Don Severino delas Alas Campus, is in Indang, Cavite.

                            CvSU is mandated “to provide excellent, equitable and relevant educational opportunities in the arts, sciences and technology through quality instruction, and responsive research and development activities. It shall produce professional, skilled and morally upright individuals for global competitiveness.”
                            
                            The University is offering close to 100 curricular programs in the undergraduate and graduate levels. It has more than 25,000 students and 1,200 faculty and staff from all campuses. The University is also authorized to certify and confer appropriate academic degrees in accordance with the Expanded Tertiary Education and Accreditation Program (ETEEAP). It has been accredited by TESDA as Trade and Testing Venue, and designated by the Department of Agriculture as the National Center for Research and Development for Coffee and Urban Agriculture. It also hosts the Southern Tagalog Agriculture Research and Development Consortium (STARDEC), the Affiliated Renewable Energy Center for Region IV-A, and the Regional ICT Center for Region IV-A.
                            
                            CvSU adheres to its commitment to Truth, Excellence and Service as it aims to be the “premier University in historic Cavite recognized for excellence in the development of globally competitive and morally upright individuals”.
                        </p>
                        
                    </div>
                </div>
        </section>

        <Outlet />

        </div>
    )
}

export default about