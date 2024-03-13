import React from 'react';
import AboutImg from '../../assets/Image/about.png';
import { IoIosCheckmarkCircle } from "react-icons/io";


const Dealer = () => {
    return (
        <div className='font-[cursive] flex justify-between items-center md:px-[80px] px-[20px] dealer md:h-[90vh] w-[100%]'>
            <div className='w-[50%]'>
                <h4 className='text-2xl font-bold text-[#FF9B1D]'>About Us</h4>
                <h1 className='text-4xl font-bold py-[15px]'>World Largest <span className='text-[#FF9B1D]'>Car Dealer</span> Marketplace.</h1>
                <p className='text-gray-500 pb-[20px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                        <IoIosCheckmarkCircle className='text-2xl text-[#FF9B1D]' />
                        <p className='text-gray-500'>At vero eos et accusamus et iusto odio</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <IoIosCheckmarkCircle className='text-2xl text-[#FF9B1D]' />
                        <p className='text-gray-500'>At vero eos et accusamus et iusto odio</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <IoIosCheckmarkCircle className='text-2xl text-[#FF9B1D]' />
                        <p className='text-gray-500'>At vero eos et accusamus et iusto odio</p>
                    </div>
                </div>
                <button className='moreBtn'>Discover More</button>
            </div>
            <div className='w-[50%] flex justify-end'>
                <img className='aboutImg' src={AboutImg} alt="AboutImage" />
            </div>
        </div>
    );
};

export default Dealer;