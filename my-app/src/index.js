import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header />
        <Home />
        <Footer />
    </React.StrictMode>
);