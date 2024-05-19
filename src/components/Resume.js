import React from 'react';
import '@react-pdf-viewer/core/lib/styles/index.css';
import ResumeFile from '../assets/Ogirala_Saketh_Resume.pdf';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from '@chakra-ui/react'

function Resume() {
    return (
        <section id="resume" className="container text-center my-5">
            <h2 className="mb-4">Resume</h2>
            <hr/>
            <Accordion  allowMultiple mb={4}>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='center'>
                                Programming Languages
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        C++, Python, Java, JavaScript, HTML, CSS, SQL, MATLAB, R, C#, Assembly, Julia,
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='center'>
                                Tools and Technologies
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Git, GitHub, AWS, Google Cloud, SQL
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as='span' flex='1' textAlign='center'>
                                Frameworks and Libraries
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        React, Node.js, Flask, PyTorch, NumPy, Bootstrap, Tailwind CSS, Chakra UI, Material-UI
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <iframe id="resumeFrame"
                    src={ResumeFile}
                    style={{ border: 'none' }}>
            </iframe>
        </section>
    );
}

export default Resume;
