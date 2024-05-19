import React from 'react';
import { createRoot } from "react-dom/client";
import { ChakraProvider } from '@chakra-ui/react';
import './style.css'; // Optional: for styling
import App from './App'; // Import App component

// Assuming you have a div with id 'root' in your index.html
const container = document.getElementById('root');
const root = createRoot(container); // Create a root at the container

root.render(
    <React.StrictMode>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
);
