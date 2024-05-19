import React from 'react';
import AboutPic from '../assets/about.jpg';

function About() {
    return (
        <section id="about" className="container my-5 about-container">
            <h2 className="mb-4 text-center">About Me</h2>
            <hr />
            <div className="content-wrapper">  {/* This div wraps image and text for side-by-side layout */}
                <div className="about-image">
                    <img src={AboutPic} alt="About Me" />
                </div>
                <div className="about-text">
                    <p>My name is Saketh Ogirala, and I am an ambitious Computer Science student at the University of Michigan, poised to graduate in May 2025. My academic journey has been rich with diverse coursework, providing me with a robust understanding of essential computer science disciplines such as Introduction to AI, Web Systems, Computer Organization, Data Structures, and Algorithms.</p>
                    <p>My passion for technology and innovation has driven me to undertake several ambitious projects that showcase my technical prowess and creativity. I have experience working with a variety of programming languages, including Python, C++, React.js and have developed a strong foundation in software development and data analysis. Among these, I have meticulously designed and developed a precise Instagram clone, mirroring its functionality and user experience, to deepen my understanding of modern web applications and social media dynamics.</p>
                    <p>Currently, I am engrossed in a cutting-edge machine learning project. This project focuses on analyzing specific hand signals to trigger computer shortcuts, aiming to streamline user interactions and enhance accessibility. This initiative not only underscores my commitment to leveraging AI for practical innovations but also highlights my dedication to pushing the boundaries of user-centric technology.</p>
                    <p>The combination of my rigorous education and practical project experience has equipped me with a strong theoretical foundation and valuable hands-on skills. This preparation enhances my ability to tackle complex challenges and make significant contributions to the technology sector.</p>
                </div>
            </div>
        </section>
    );
}

export default About;
