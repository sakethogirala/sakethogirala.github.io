import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import About from './components/About';
import Classes from './components/Classes';
import WorkExp from './components/WorkExp';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { FaHome, FaUser, FaBook, FaBriefcase, FaProjectDiagram, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import { Box, VStack, IconButton, Tooltip } from '@chakra-ui/react';

function App() {
    return (
        <ChakraProvider>
            <Router>
                <div>
                    <Header id="/" />
                    <ConditionalSidebar />
                    <About id="about" />
                    <Classes id="classes" />
                    <WorkExp id="workexp" />
                    <Projects id="portfolio" />
                    <Resume id="resume" />
                    <Contact id="contact" />
                    <Footer />
                </div>
            </Router>
        </ChakraProvider>
    );
}

const ConditionalSidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const aboutRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setShowSidebar(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    return (
        <>
            <div ref={aboutRef} id="about-trigger" />
            <Sidebar visible={!showSidebar} />
        </>
    );
};

const Sidebar = ({ visible }) => {
    return (
        <Box
            position="fixed"
            left={visible ? '0' : '-60px'}
            top="50%"
            transform="translateY(-50%)"
            w="60px"
            bg="black"
            color="white"
            display="flex"
            flexDirection="column"
            alignItems="center"
            py={2}
            borderRadius="0 10px 10px 0"
            transition="left 0.3s ease-in-out, opacity 0.3s ease-in-out"
            opacity={visible ? 0.75 : 0}
        >
            <VStack spacing={4} mt={8}>
                <Tooltip label="Home" placement="right">
                    <a href="#header"><IconButton icon={<FaHome />} variant="ghost" colorScheme="whiteAlpha" aria-label="Home" /></a>
                </Tooltip>
                <Tooltip label="About" placement="right">
                    <a href="#about"><IconButton icon={<FaUser />} variant="ghost" colorScheme="whiteAlpha" aria-label="About" /></a>
                </Tooltip>
                <Tooltip label="Classes" placement="right">
                    <a href="#classes"><IconButton icon={<FaBook />} variant="ghost" colorScheme="whiteAlpha" aria-label="Classes" /></a>
                </Tooltip>
                <Tooltip label="Work Experience" placement="right">
                    <a href="#workexp"><IconButton icon={<FaBriefcase />} variant="ghost" colorScheme="whiteAlpha" aria-label="Work Experience" /></a>
                </Tooltip>
                <Tooltip label="Projects" placement="right">
                    <a href="#portfolio"><IconButton icon={<FaProjectDiagram />} variant="ghost" colorScheme="whiteAlpha" aria-label="Projects" /></a>
                </Tooltip>
                <Tooltip label="Resume" placement="right">
                    <a href="#resume"><IconButton icon={<FaFileAlt />} variant="ghost" colorScheme="whiteAlpha" aria-label="Resume" /></a>
                </Tooltip>
                <Tooltip label="Contact" placement="right">
                    <a href="#contact"><IconButton icon={<FaEnvelope />} variant="ghost" colorScheme="whiteAlpha" aria-label="Contact" /></a>
                </Tooltip>
            </VStack>
        </Box>
    );
};

export default App;
