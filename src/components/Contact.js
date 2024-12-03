import { Box, useColorMode } from '@chakra-ui/react';
import Linkedin from '../assets/linkedin.png';
import Github from '../assets/github.png';
import Instagram from '../assets/instagram.png';
import Mail from '../assets/email.png';

function Contact() {
    const { colorMode } = useColorMode(); 

    const borderColor = colorMode === "light" ? "gray.400" : "whiteAlpha.600"; 

    return (
        <section id="contact" className="container text-center my-5">
            <h2 className="mb-4">Contact</h2>
            <hr />
            <p>Feel free to connect with me and explore my platforms!</p>
            <div
                className="flex-row contact-icons"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                    flexWrap: 'nowrap',
                    overflowX: 'auto', 
                }}
            >
                <Box
                    as="a"
                    href="mailto:sogirala@umich.edu"
                    target="_blank"
                    border="2px solid"
                    borderColor={borderColor}
                    borderRadius="md"
                    p={4}
                    bg="white" // Background is always white
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="80px"
                    height="80px"
                    _hover={{ transform: 'scale(1.005)', transition: '0.3s' }}
                >
                    <img src={Mail} alt="Email" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </Box>
                <Box
                    as="a"
                    href="https://www.linkedin.com/in/saketh-ogirala-7b6080222/"
                    target="_blank"
                    border="2px solid"
                    borderColor={borderColor}
                    borderRadius="md"
                    p={4}
                    bg="white"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="80px"
                    height="80px"
                    _hover={{ transform: 'scale(1.005)', transition: '0.3s' }}
                >
                    <img src={Linkedin} alt="LinkedIn" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </Box>
                <Box
                    as="a"
                    href="https://github.com/sakethogirala"
                    target="_blank"
                    border="2px solid"
                    borderColor={borderColor}
                    borderRadius="md"
                    p={4}
                    bg="white"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="80px"
                    height="80px"
                    _hover={{ transform: 'scale(1.005)', transition: '0.3s' }}
                >
                    <img src={Github} alt="GitHub" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </Box>
                <Box
                    as="a"
                    href="https://www.instagram.com/saketh_ogirala/"
                    target="_blank"
                    border="2px solid"
                    borderColor={borderColor}
                    borderRadius="md"
                    p={4}
                    bg="white"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="80px"
                    height="80px"
                    _hover={{ transform: 'scale(1.005)', transition: '0.3s' }}
                >
                    <img src={Instagram} alt="Instagram" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </Box>
            </div>
        </section>
    );
}

export default Contact;
