import React from 'react';
import { FaCarRear, FaThumbsUp, FaAward } from "react-icons/fa6";
import { FaUserAstronaut } from "react-icons/fa";



const Achievement = () => {
    return (
        <div className='font-[cursive] achievement h-[100%] w-[100%] md:px-[80px] px-[20px] pb-[80px]'>
            <div className='text-center md:pt-[50px] md:pb-[50px]'>
                <p className='text-xl text-gray-300'>Our Achievement</p>
                <h1 className='text-3xl font-bold text-white'>What Have We  <span className='text-[#FF9B1D]'>Achieved</span></h1>
            </div>
            <div className='flex gap-[30px]'>
                <div className=' h-[100%] w-[100%] bg-[#ffffff45] p-[30px] flex flex-col justify-center items-center'>
                    <div className='h-[50px] w-[50px] bg-[#FF9B1D] flex justify-center items-center rounded-full border-2 text-white'>
                        <FaCarRear className='text-2xl' />
                    </div>
                    <h1 className='text-3xl font-bold text-white py-[8px]'>1,125</h1>
                    <h4 className='text-2xl text-white'>Total <span className='text-[#FF9B1D]'>Cars</span></h4>
                </div>
                <div className=' h-[100%] w-[100%] bg-[#ffffff45] p-[30px] flex flex-col justify-center items-center'>
                    <div className='h-[50px] w-[50px] bg-[#FF9B1D] flex justify-center items-center rounded-full border-2 text-white'>
                        <FaUserAstronaut className='text-2xl' />
                    </div>
                    <h1 className='text-3xl font-bold text-white py-[8px]'>1,025</h1>
                    <h4 className='text-2xl text-white'>Happy <span className='text-[#FF9B1D]'>Clients</span></h4>
                </div>
                <div className=' h-[100%] w-[100%] bg-[#ffffff45] p-[30px] flex flex-col justify-center items-center'>
                    <div className='h-[50px] w-[50px] bg-[#FF9B1D] flex justify-center items-center rounded-full border-2 text-white'>
                        <FaThumbsUp className='text-2xl' />
                    </div>
                    <h1 className='text-3xl font-bold text-white py-[8px]'>974</h1>
                    <h4 className='text-2xl text-white'>Dealer <span className='text-[#FF9B1D]'>Review</span></h4>
                </div>
                <div className=' h-[100%] w-[100%] bg-[#ffffff45] p-[30px] flex flex-col justify-center items-center'>
                    <div className='h-[50px] w-[50px] bg-[#FF9B1D] flex justify-center items-center rounded-full border-2 text-white'>
                        <FaAward className='text-2xl' />
                    </div>
                    <h1 className='text-3xl font-bold text-white py-[8px]'>795</h1>
                    <h4 className='text-2xl text-white'>Winning <span className='text-[#FF9B1D]'>Award</span></h4>
                </div>
            </div>
        </div>
    );
};

export default Achievement;