import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Housing from './pages/Housing/Housing';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/location/:housingId" element={<Housing />} />
                </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
);