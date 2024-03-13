import React from 'react';
import NewsImg from '../../assets/Image/news.png';

const NewsLatter = () => {
    return (
        <div className='font-[cursive] h-[100%] w-[100%] flex justify-center items-center md:px-[80px] px-[20px] bg-white'>
            <div className='w-[60%]'>
                <img className='aboutImage' src={NewsImg} alt="" />
            </div>
            <div className='w-[40%]'>
                <h1 className='text-3xl font-bold pb-[5px]'>
                    HAVE A SPECIAL
                </h1>
                <h1 className='text-3xl font-bold text-[#FF9B1D] pb-[30px]'>
                    DISCOUNT
                </h1>
                <div className='w-[100%] flex justify-between items-center border-2 h-[48px] rounded-3xl border-[#FF9B1D] shadow-md'>
                    <input className='w-[70%] h-[100%] pl-[20px] outline-none rounded-3xl' type="email" placeholder='Enter Your Email' />
                    <button className='newsBtn px-[20px] w-[30%] rounded-e-3xl text-white font-bold'>Subscribe</button>
                </div>
            </div >
        </div >
    );
};

export default NewsLatter;