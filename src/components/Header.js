import React from 'react';
import profilePic from '../assets/profile.jpg';

function Header() {
    return (
        <header className="bg-gradient text-white d-flex justify-content-center align-items-center vh-100 text-center" >
            <div id = "header">
            <img src={profilePic} alt="Saketh Ogirala" className="rounded-circle mb-4" width="300"/>
                <div className = "name-box">
                    <h1 className="display-3 font-weight-bold">Saketh Ogirala</h1>
                    <p id ="occupation" className="h2 font-weight-semibold">Junior at The University of Michigan</p>
                    <div className="mt-4">
                    <a href="#about" className="btn btn-primary m-2">Learn More</a>
                    <a href="#classes" className="btn btn-primary m-2">Classes Taken</a>
                    <a href="#workexp" className="btn btn-primary m-2">Work Experience</a>
                    <a href="#portfolio" className="btn btn-primary m-2">Portfolio</a>
                    <a href="#resume" className="btn btn-primary m-2">Resume</a>
                    <a href="#contact" className="btn btn-primary m-2">Contact</a>
                </div>
                </div>
            </div>
        </header>
    );
}

export default Header;