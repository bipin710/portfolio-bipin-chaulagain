import React from 'react';
import "./About.css";
import Card from "../Card/Card.jsx"
import mern from "../../assets/mern.png"
import dsa from "../../assets/dsa.png"
import java from "../../assets/java.png"


function About() {
  return (
    <div id="about">
        <div className="leftabout">
            <div className="circle-line">
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
            </div>
            <div className="aboutdetails">
                <div className="personalinfo">
                    <h1>Personal Info</h1>
                    <ul>
                        <li>
                            <span>NAME</span> : BIPIN_CHAULAGAIN
                        </li>
                        <li>
                            <span>AGE</span> : 20 YEARS
                        </li>
                        <li>
                            <span>GENDER</span> : MALE
                        </li>
                        <li>
                            <span>LANGUAGE KNOW</span> : NEPALI, ENGLISH, HINDI
                        </li>
                    </ul>
                </div>
                <div className="educations">
                    <h1>Education</h1>
                    <ul>
                        <li>
                            <span>Grade</span> : +2 complete
                        </li>
                        <li>
                            <span>Main Subject</span> : COMPUTER SCIENCE & ENGINEERING
                        </li>
                        <li>
                            <span>GPA</span> : 3.02 (B+)
                        </li>
                    </ul>
                </div>
                <div className="skil">
                    <h1>Skills</h1>
                    <ul>
                        <li>
                            Full Stack Web & Apps Developers
                        </li>
                        <li>
                            HTML, CSS, Java, React, Tailwind CSS
                        </li>
                        <li>
                            Python
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="rightabout">
            <Card image={mern}/>
            <Card image={dsa}/>
            <Card image={java}/>
        </div>
    </div>
  );
}

export default About;
