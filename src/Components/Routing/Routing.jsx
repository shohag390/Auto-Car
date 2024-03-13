import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Navbar from '../Sheard/Navbar/Navbar';
import Footer from '../Sheard/Footer/Footer';
import NotPage from '../NotPage/NotPage';
import Cars from '../Cars/Cars';
import About from '../About/About';
import Services from '../Services/Services';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Signup from '../Signup/Signup';

const Routing = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/cars' element={<Cars />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/signup' element={<Signup />} />
                <Route path="*" element={<NotPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Routing;