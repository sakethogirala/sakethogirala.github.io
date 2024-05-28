import Bosch from '../assets/bosch.jpeg';
import Stem from '../assets/stem1.jpeg';
function WorkExp() {
    return (
        <section id="workexp" className="container text-center my-5">
            <h2 className="mb-4">Work Experience</h2>
            <hr/>
            {/* <!-- Project 1 --> */}
            <article className="mb-5 work-exp-item">
                <h3> <b>Software Engineer Intern</b> | Robert Bosch</h3>
                <p>May 2023 to Aug. 2023</p>
                <hr/>
                <div className="flex">
                <img src={Bosch} alt="Bosch" className="company-logo"/>
                    <div className="text-details">
                        <div className="additional-info">
                            <li>Formulated a program to revolutionize GM's automated parking Electronic Control Units (ECU) data analysis. Used Python to automate process, generating XML trees, and organizing data into dedicated folders, attaining a remarkable runtime of ~105 milliseconds for processing over 50 files of data.</li>
                            <li>Developed a program to automate the process of generating and updating the ECU's configuration files, reducing the time taken to update the configuration files from 2 hours to 5 minutes.</li>
                            <li>Engineered a inventory management system for EPS (Parking) department, streamlining tracking and resource allocation for over 50 items and 15+ benches. Pioneered a robust database for seamless addition, removal, and conjoining of benches, elevating operational efficiency based on SQL project.</li>
                            <li>Designed a visual model using Stateflow to conceptualize and analyze the OneParking feature for potential integration in Bosch-affiliated vehicles. OneParking disrupts conventional approach by consolidating 8-12 ECUs into one centralized ECU, optimizing signal transmission, and data efficiency throughout vehicle.</li>
                        </div>
                    </div>
                </div>
            </article>
            <article className="mb-5 work-exp-item">
                <h3> <b>Software Engineer Intern</b> | Robert Bosch</h3>
                <p>May 2022 to Aug. 2022</p>
                <hr/>
                <div className="flex">
                    <img src={Bosch} alt="Bosch" className="company-logo"/>
                    <div className="text-details">
                        <div className="additional-info">
                            <li>Collaborated with software architects to design and visualize analytical solutions using Simulink MATLAB, building logic-based diagrams. Constructed a running program to simulate LED lights charges in a car, achieving a remarkable ~5% improvement in energy efficiency compared to previous model.</li>
                            <li>Developed an innovative PremiumTorque adaptation applying real-time steering wheel torque data to calculate optimal steering angles, resulting in a ~15% increase in precision of vehicle turning points, boosting overall driving performance, and improving ride satisfaction for the user.</li>
                            <li>Authored and summarized system and software requirements in DOORs, capturing over 40 customer specifications. Demonstrated proficiency in testing application with real-time technology, carrying out in CANoe to simulate a car and assess software requirements functionality.</li>
                        </div>
                    </div>
                </div>
            </article>
            <article className="mb-5 work-exp-item">
                <h3> <b>Coding Instructor</b> | STEM1</h3>
                <p>June 2021 to Nov. 2021</p>
                <hr/>
                <div className="flex">
                    <img src={Stem} alt="Stem" className="company-logo"/>
                    <div className="text-details">
                        <div className="additional-info">
                            <li>Designed and implemented a comprehensive curriculum for Python, Java, and Scratch, enhancing student understanding of programming fundamentals and logic.</li>
                            <li>Mentored a group of 30+ children (ages 9-15) in Java, Python, and Scratch, fostering programming understanding and logic generating a simple calculator program: add, subtract, multiple, and divide.</li>
                            <li>Orchestrated targeted outreach strategies, driving an ~8% increase in company's website traffic and expanding community presence.</li>
                        </div>
                    </div>
                </div>
            </article>
            
            {/* <!-- More projects --> */}
        </section>
    );
}

export default WorkExp;