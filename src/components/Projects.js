import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import asteroidVideo from '../assets/Asteroid.mp4';
import searchEngineVideo from '../assets/search.mp4';

function Projects() {
    return (
        <section id="portfolio" className="container text-center my-5">
        <h2 className="mb-4">Projects/Portfolio</h2>
        <hr/>
        {/* Proj 1 */}
        <Tabs isFitted variant='soft-rounded' colorScheme='blue' zIndex={1}>
            <TabList mb='1em'>
                <Tab>Personal Website</Tab>
                <Tab>Asteroid Game</Tab>
                <Tab>Search Engine</Tab>
                <Tab>Shortcutted Hand Gestures</Tab>
            </TabList>
            <TabPanels>
                    <TabPanel>
                        <article className="mb-5">
                            <h3>Personal Website</h3>
                            <hr/>
                            <div className="flex flex-row items-center space-x-4">
                                
                                <div className="text-details">
                                    <div className="additional-info">
                                        <li>Created a robust, responsive personal website using React and Chakra UI, which showcases a portfolio of projects, resume, and contact information. The website features dynamic content, including interactive tabs and embedded media such as videos, demonstrating a high level of user engagement.</li>
                                        <li>Integrated modern web development technologies including HTML5, CSS3, and JavaScript, ensuring high performance and cross-browser compatibility. Employed React Hooks for state management and optimized React components for faster rendering and improved user experience.</li>
                                        <li>Utilized CSS Flexbox and Grid systems to create a fluid and adaptable layout that responds smoothly to different screen sizes. This approach ensures that the website offers an optimal viewing experience across all devices, from desktops to smartphones.</li>
                                        <li><a href = "#contact"><u>Let me know what you think!</u></a></li>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </TabPanel>
                <TabPanel>
                    <article className="mb-5">
                        <h3>Asteroid Game</h3>
                        <hr/>
                        <div className="flex flex-row items-center space-x-4">
                            <VideoComponent videoSrc={asteroidVideo}/>
                            <div className="text-details">
                                <div className="additional-info">
                                    <li>Pioneered the creation of an engaging "Asteroids" game, written in JavaScript and jQuery, featuring a compatible UI with cross-browser compatibility, successfully functioning on the latest version of Google Chrome.</li>
                                    <li>Devised game logic for random asteroid generation with varying speeds (1x, 3x, and 5x) and spawn rates (1000 ms for easy to 600 ms for hard level), enhancing difficulty and user engagement across multiple levels.</li>
                                    <li>Programmed a real-time scoreboard that updated every 500 ms, incorporating a scoring system rewarding players' survival skills and strategic maneuvering, with scores increasing by 40 points for every half-second survived.</li>
                                    <li>Incorporating algorithms that accurately determine the intersections between player-controlled spacecraft and randomly generated asteroids, the game provides a dynamically challenging environment that tests and improves player reaction times and strategic planning.</li>
                                </div>
                            </div>
                        </div>
                    </article>
                </TabPanel>
                <TabPanel>
                    <article className="mb-5">
                        <h3>Search Engine</h3>
                        <hr/>
                        <div className="flex flex-row items-center space-x-4">
                            <VideoComponent videoSrc={searchEngineVideo}/>
                            <div className="text-details">
                                <div className="additional-info">
                                    <li>Constructed a robust search engine application utilizing modern web technologies, integrating JavaScript frameworks for dynamic client-side interactions, HTML5 for semantic structuring, and CSS3 for responsive and visually appealing design.</li>
                                    <li>Designed and optimized sophisticated algorithms for indexing and querying extensive datasets, ensuring rapid and accurate search results. Leveraged SQL for managing indexed data, facilitating efficient storage, retrieval, and manipulation of large volumes of data.</li>
                                    <li>Created a RESTful API using Flask to handle search queries, document indexing, and result retrieval. Demonstrated proficiency in API development and documentation, ensuring secure, scalable, and maintainable backend services to support the search functionality.</li>
                                    <li>Utilized advanced data structures and query optimization techniques to enhance the performance and scalability of the search engine. Conducted comprehensive testing to validate the accuracy, reliability, and efficiency of search results, ensuring a seamless user experience even with large datasets.</li>
                                </div>
                            </div>
                        </div>
                    </article>
                </TabPanel>
                <TabPanel>
                    <article className="mb-5">
                        <h3>Shortcutted Hand Gestures</h3>
                        <hr/>
                        <div className="flex flex-row items-center space-x-4">
                            {/* <VideoComponent videoSrc={searchEngineVideo}/> */}
                            <div className="text-details">
                                <div className="additional-info">
                                    <li>Project Objective: Develop a computer vision system that recognizes and interprets shortcutted hand gestures, allowing users to interact with devices or software through intuitive gestures. The system aims to enhance user interfaces by providing a more natural and efficient way to navigate and perform common tasks.</li>
                                    <li>Utilize state-of-the-art deep learning models, such as convolutional neural networks (CNNs) or recurrent neural networks (RNNs), combined with image processing techniques. The system will be developed using libraries such as TensorFlow, PyTorch, or OpenCV for real-time gesture recognition.</li>
                                    <li>Compile a comprehensive dataset of hand gestures, custom-captured images and videos in diverse environments. Train the model to recognize a set of predefined gestures that correspond to specific commands or shortcuts.</li>
                                    <li>Implement the gesture recognition system to work in real-time with high accuracy and low latency on various devices, such as computers, smartphones, or AR/VR systems. Extensive testing will be conducted to ensure the system is robust against different backgrounds, lighting conditions, and user variations.</li>
                                </div>
                            </div>
                        </div>
                    </article>
                </TabPanel>
            </TabPanels>
        </Tabs>
        {/* <!-- More projects --> */}
        </section>
    );
}

function VideoComponent({ videoSrc }) {
    return (
        <div>
            <video width="800" height="450" controls>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}



export default Projects;
