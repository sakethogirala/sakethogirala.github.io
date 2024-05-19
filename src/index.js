import React from 'react';
import { createRoot } from "react-dom/client";
import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter as Router } from 'react-router-dom'; // Use HashRouter for GitHub Pages
import './style.css'; // Optional: for styling
import App from './App'; // Import App component

// Assuming you have a div with id 'root' in your index.html
const container = document.getElementById('root');
const root = createRoot(container); // Create a root at the container

root.render(
    <React.StrictMode>
        <ChakraProvider>
            <Router>
                <App />
            </Router>
        </ChakraProvider>
    </React.StrictMode>,
);
