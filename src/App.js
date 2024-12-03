import React, { useState, useEffect, useRef } from 'react';
import { ChakraProvider, Box, VStack, IconButton, Tooltip, Button, extendTheme } from '@chakra-ui/react';
import { FaHome, FaUser, FaBook, FaBriefcase, FaProjectDiagram, FaFileAlt, FaEnvelope, FaArrowRight, FaArrowLeft, FaMoon, FaSun } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import About from './components/About';
import Classes from './components/Classes';
import WorkExp from './components/WorkExp';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useColorMode } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            body: {
                _dark: {
                    bg: "gray.900", // Dark mode background
                    color: "white", // Dark mode text color
                },
            },
        },
    },
});

function App() {
    return (
        <ChakraProvider theme={theme}>
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
        const updateSize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            setShowSidebar(!mobile);
        };

        window.addEventListener('resize', updateSize);
        updateSize();

        return () => window.removeEventListener('resize', updateSize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const header = headerRef.current;
            if (header) {
                const { bottom } = header.getBoundingClientRect();
                setShowSidebar(isMobile ? false : window.scrollY > bottom);
                setShowButton(window.scrollY > bottom);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

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
                    opacity={0.65}
                >
                    {showSidebar ? <FaArrowLeft /> : <FaArrowRight />}
                </Button>
            )}
        </>
    );
};

const Sidebar = ({ visible }) => {
    const { colorMode, toggleColorMode } = useColorMode(); // Access the current color mode

    const bgColor = colorMode === "light" ? "black" : "gray.200"; // Sidebar background
    const textColor = colorMode === "light" ? "white" : "black"; // Text color for icons and labels
    const iconColor = colorMode === "light" ? "whiteAlpha.800" : "blackAlpha.800"; // Adjust icon brightness
    const hoverColor = colorMode === "light" ? "whiteAlpha.900" : "blackAlpha.900"; // Hover color for icons

    return (
        <Box
            zIndex={100000}
            position="fixed"
            left={visible ? '0' : '-60px'}
            top="50%"
            transform="translateY(-50%)"
            w="60px"
            bg={bgColor} // Dynamically set background color
            color={textColor} // Dynamically set text color
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
                    <a href="#header" aria-label="Home">
                        <IconButton
                            icon={<FaHome />}
                            variant="ghost"
                            colorScheme="none"
                            aria-label="Home"
                            _hover={{ color: hoverColor }} // Lighter hover effect
                            color={iconColor} // Icon color
                        />
                    </a>
                </Tooltip>
                <Tooltip label="About" placement="right">
                    <a href="#about" aria-label="About">
                        <IconButton
                            icon={<FaUser />}
                            variant="ghost"
                            colorScheme="none"
                            aria-label="About"
                            _hover={{ color: hoverColor }}
                            color={iconColor}
                        />
                    </a>
                </Tooltip>
                <Tooltip label="Classes" placement="right">
                    <a href="#classes" aria-label="Classes">
                        <IconButton
                            icon={<FaBook />}
                            variant="ghost"
                            colorScheme="none"
                            aria-label="Classes"
                            _hover={{ color: hoverColor }}
                            color={iconColor}
                        />
                    </a>
                </Tooltip>
                <Tooltip label="Work Experience" placement="right">
                    <a href="#workexp" aria-label="Work Exp">
                        <IconButton
                            icon={<FaBriefcase />}
                            variant="ghost"
                            colorScheme="none"
                            aria-label="Work Experience"
                            _hover={{ color: hoverColor }}
                            color={iconColor}
                        />
                    </a>
                </Tooltip>
                <Tooltip label="Projects" placement="right">
                    <a href="#portfolio" aria-label="Projects">
                        <IconButton
                            icon={<FaProjectDiagram />}
                            variant="ghost"
                            colorScheme="none"
                            aria-label="Projects"
                            _hover={{ color: hoverColor }}
                            color={iconColor}
                        />
                    </a>
                </Tooltip>
                <Tooltip label="Resume" placement="right">
                    <a href="#resume" aria-label="Resume">
                        <IconButton
                            icon={<FaFileAlt />}
                            variant="ghost"
                            colorScheme="none"
                            aria-label="Resume"
                            _hover={{ color: hoverColor }}
                            color={iconColor}
                        />
                    </a>
                </Tooltip>
                <Tooltip label="Contact" placement="right">
                    <a href="#contact" aria-label="Contact">
                        <IconButton
                            icon={<FaEnvelope />}
                            variant="ghost"
                            colorScheme="none"
                            aria-label="Contact"
                            _hover={{ color: hoverColor }}
                            color={iconColor}
                        />
                    </a>
                </Tooltip>
                {/* Add Dark Mode Toggle */}
                <Tooltip label="Toggle Dark Mode" placement="right">
                    <IconButton
                        icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
                        onClick={toggleColorMode}
                        variant="ghost"
                        colorScheme="none"
                        aria-label="Toggle Dark Mode"
                        _hover={{ color: hoverColor }}
                        color={iconColor}
                    />
                </Tooltip>
            </VStack>
        </Box>
    );
};




export default App;
