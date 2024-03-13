import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Autoplay } from 'swiper/modules';
import { FaArrowRight } from "react-icons/fa6";



const Banner = () => {

    return (
        <div className='font-[cursive]'>
            <Swiper
                style={{
                    "--swiper-pagination-color": "#FF9B1D",
                }}
                slidesPerView={1}

                loop={true}

                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}

                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='bannerOne md:h-[90vh] flex flex-col justify-center md:px-[80px] px-[20px]'>
                        <h1 className='text-6xl font-bold text-white '>Take a Comfortable</h1>
                        <h4 className='text-4xl md:py-[16px] font-bold text-[#FF9B1D]'>Sports Car</h4>
                        <p className='md:w-[40%] text-white  '>Car news, reviews, opinion and features from Autocar - the world's oldest car publication bringing you everything automotive</p>
                        <button className='bannerBtn'><span>Book Now</span> <FaArrowRight /></button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bannerTwo md:h-[90vh] flex flex-col justify-center md:px-[80px] px-[20px]'>
                        <h1 className='text-6xl font-bold text-white '>Get The Awesome</h1>
                        <h4 className='text-4xl md:py-[16px] font-bold text-[#FF9B1D]'>Super Car</h4>
                        <p className='md:w-[40%] text-white  '>Car news, reviews, opinion and features from Autocar - the world's oldest car publication bringing you everything automotive</p>
                        <button className='bannerBtn'><span>Book Now</span> <FaArrowRight /></button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bannerThree md:h-[90vh] flex flex-col justify-center md:px-[80px] px-[20px]'>
                        <h1 className='text-6xl font-bold text-white '>Find Your Dreamy</h1>
                        <h4 className='text-4xl md:py-[16px] font-bold text-[#FF9B1D]'>Family Car</h4>
                        <p className='md:w-[40%] text-white  '>Car news, reviews, opinion and features from Autocar - the world's oldest car publication bringing you everything automotive</p>
                        <button className='bannerBtn'><span>Book Now</span> <FaArrowRight /></button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;