import React from 'react';
import AboutImage from '../../assets/Image/aboutCar.png';
import { IoShieldCheckmarkSharp } from "react-icons/io5";


const About = () => {
    return (
        <div className='about md:h-[90vh] w-[100%] font-[cursive] md:px-[80px] px-[20px]'>
            <div className='text-center md:pt-[25px] md:pb-[30px]'>
                <p className='text-xl text-gray-500'>Who We Are</p>
                <h1 className='text-3xl font-bold'>A Few Words <span className='text-[#FF9B1D]'>About Us</span></h1>
            </div>
            <div className='flex items-center justify-between w-[100%]'>
                <div className='w-[60%]'>
                    <img className='h-[300px] aboutImage' src={AboutImage} alt="AboutImage" />
                </div>
                <div className='w-[40%] flex flex-col gap-6'>
                    <div className='aboutCard p-[20px] bg-white'>
                        <div className='flex items-center gap-3 pb-[10px]'>
                            <IoShieldCheckmarkSharp className='text-4xl text-[#FF9B1D]' />
                            <h1 className='text-xl font-bold'>Expert Certified Mechanics</h1>
                        </div>
                        <p className='text-gray-500'>Credibly maximize resource maximizing channels after interoperable frictionless. Rather than synergistic models.</p>
                    </div>
                    <div className='aboutCard p-[20px] bg-white ml-[60px]'>
                        <div className='flex items-center gap-3 pb-[10px]'>
                            <IoShieldCheckmarkSharp className='text-4xl text-[#FF9B1D]' />
                            <h1 className='text-xl font-bold'>Expert Certified Mechanics</h1>
                        </div>
                        <p className='text-gray-500'>Credibly maximize resource maximizing channels after interoperable frictionless. Rather than synergistic models.</p>
                    </div>
                    <div className='aboutCard p-[20px] bg-white'>
                        <div className='flex items-center gap-3 pb-[10px]'>
                            <IoShieldCheckmarkSharp className='text-4xl text-[#FF9B1D]' />
                            <h1 className='text-xl font-bold'>Expert Certified Mechanics</h1>
                        </div>
                        <p className='text-gray-500'>Credibly maximize resource maximizing channels after interoperable frictionless. Rather than synergistic models.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;