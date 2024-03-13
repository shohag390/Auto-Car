import React from 'react';
import Logo from '../../../assets/Logo/autocar.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='md:px-[80px] bg-white shadow px-[20px] h-[10vh] md:flex md:justify-between md:items-center font-[cursive] top-0 left-0 sticky z-50'>
            <div>
                <Link to={"home"}><img className='h-[35px]' src={Logo} alt="Logo" /></Link>
            </div>
            <ul className='md:flex md:gap-[30px] md:items-center'>
                <li>
                    <Link className='font-bold text-black hover:text-[#FF9B1D] duration-500' to={"home"}>Home</Link>
                </li>
                <li>
                    <Link className='font-bold text-black hover:text-[#FF9B1D] duration-500' to={"cars"}>Cars</Link>
                </li>
                <li>
                    <Link className='font-bold text-black hover:text-[#FF9B1D] duration-500' to={"about"}>About</Link>
                </li>
                <li>
                    <Link className='font-bold text-black hover:text-[#FF9B1D] duration-500' to={"services"}>Services</Link>
                </li>
                <li>
                    <Link className='font-bold text-black hover:text-[#FF9B1D] duration-500' to={"blogs"}>Blogs</Link>
                </li>
                <li>
                    <Link className='font-bold text-black hover:text-[#FF9B1D] duration-500' to={"contact"}>Contact</Link>
                </li>
                <li>
                    <Link className='font-bold text-black hover:text-[#FF9B1D] duration-500' to={"signup"}>Signup</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;