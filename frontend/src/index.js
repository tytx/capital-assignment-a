import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import { ChakraProvider ,defaultSystem } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ChakraProvider  value={defaultSystem}>
            <App />
        </ChakraProvider>
    </React.StrictMode>
);