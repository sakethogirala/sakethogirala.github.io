import React, { useState, useEffect, useRef } from 'react';
import { ChakraProvider, Box, VStack, IconButton, Tooltip, Button } from '@chakra-ui/react';
import { FaHome, FaUser, FaBook, FaBriefcase, FaProjectDiagram, FaFileAlt, FaEnvelope, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import About from './components/About';
import Classes from './components/Classes';
import WorkExp from './components/WorkExp';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <ChakraProvider>
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
        </ChakraProvider>
    );
}

const ConditionalSidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showButton, setShowButton] = useState(false);  
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const sidebarRef = useRef(null);
    const headerRef = useRef(null);  

    const toggleSidebar = () => setShowSidebar(!showSidebar);

    useEffect(() => {
        // Function to update the state based on window width
        const updateSize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            setShowSidebar(!mobile); // Show sidebar by default only on non-mobile devices
        };

        window.addEventListener('resize', updateSize);
        updateSize(); // Initial check

        return () => window.removeEventListener('resize', updateSize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const header = headerRef.current;
            if (header) {
                const { bottom } = header.getBoundingClientRect();
                setShowSidebar(isMobile ? false : window.scrollY > bottom); // Conditionally control sidebar based on scroll and device type
                setShowButton(window.scrollY > bottom);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]); // Depend on isMobile to re-attach the scroll event properly when it changes


    return (
        <>
            <div ref={headerRef} id="headerRef" />
            <div ref={sidebarRef} id="sidebar-trigger" />
            <Sidebar visible={showSidebar} />
            {isMobile && showButton && (
                <Button
                    position="fixed"
                    bottom="20px"
                    left="20px"
                    zIndex="1001"
                    onClick={toggleSidebar}
                    size="lg"
                    icon={showSidebar ? <FaArrowLeft /> : <FaArrowRight />}
                    opacity={0.65}
                    
                >
                    {showSidebar ? <FaArrowLeft /> : <FaArrowRight />}
                </Button>
            )}
        </>
    );
};



const Sidebar = ({ visible }) => {
    return (
        <Box
            zIndex={100000}
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
                    <a href="#header" aria-label="Home"><IconButton icon={<FaHome />} variant="ghost" colorScheme="whiteAlpha" aria-label="Home" /></a>
                </Tooltip>
                <Tooltip label="About" placement="right">
                    <a href="#about" aria-label="About"><IconButton icon={<FaUser />} variant="ghost" colorScheme="whiteAlpha" aria-label="About" /></a>
                </Tooltip>
                <Tooltip label="Classes" placement="right">
                    <a href="#classes" aria-label="Classes"><IconButton icon={<FaBook />} variant="ghost" colorScheme="whiteAlpha" aria-label="Classes" /></a>
                </Tooltip>
                <Tooltip label="Work Experience" placement="right">
                    <a href="#workexp" aria-label="Work Exp"><IconButton icon={<FaBriefcase />} variant="ghost" colorScheme="whiteAlpha" aria-label="Work Experience" /></a>
                </Tooltip>
                <Tooltip label="Projects" placement="right">
                    <a href="#portfolio" aria-label="Projects"><IconButton icon={<FaProjectDiagram />} variant="ghost" colorScheme="whiteAlpha" aria-label="Projects" /></a>
                </Tooltip>
                <Tooltip label="Resume" placement="right">
                    <a href="#resume" aria-label="Resume"><IconButton icon={<FaFileAlt />} variant="ghost" colorScheme="whiteAlpha" aria-label="Resume" /></a>
                </Tooltip>
                <Tooltip label="Contact" placement="right">
                    <a href="#contact" aria-label="Contact"><IconButton icon={<FaEnvelope />} variant="ghost" colorScheme="whiteAlpha" aria-label="Contact" /></a>
                </Tooltip>
            </VStack>
        </Box>
    );
};

export default App;