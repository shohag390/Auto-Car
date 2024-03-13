import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';

const Galary = () => {
    const [car, setCar] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/carcard')
            .then((res) => res.json())
            .then((data) => setCar(data))
    }, [])
    const slice = car.slice(0, 12);
    return (
        <div className='font-[cursive] galary h-[100%] w-[100%] md:px-[80px] px-[20px] pb-[50px]'>
            <div className='text-center md:pt-[50px] md:pb-[50px]'>
                <p className='text-xl text-gray-300'>All Car Galary</p>
                <h1 className='text-3xl font-bold text-white'>See Our  <span className='text-[#FF9B1D]'>Latest Galary</span></h1>
            </div>
            <div>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#FF9B1D",
                    }}
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper pb-[50px]"
                >
                    {slice?.map((item) => (
                        <SwiperSlide className='border-4 cursor-pointer galaryImage' key={item?.id}>
                            <img className='h-[250px] carImage' src={item?.carImage} alt="GalaryImage" />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    );
};

export default Galary;