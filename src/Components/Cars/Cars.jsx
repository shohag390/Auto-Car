import React, { useEffect, useState } from 'react';
import { IoMdSettings } from "react-icons/io";
import { IoIosColorPalette } from "react-icons/io";
import { FaGasPump } from "react-icons/fa6";
import { IoCarSport } from "react-icons/io5";


const Cars = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/carcard')
            .then((res) => res.json())
            .then((data) => setCars(data))
    }, [])

    const [load, setLoad] = useState(8);
    const slice = cars.slice(0, load)
    const loadCar = (cars) => {
        setLoad(load + load);
    }
    return (
        <div className='font-[cursive]  md:px-[80px] px-[20px]'>
            <div className='text-center md:pt-[25px] md:pb-[30px]'>
                <p className='text-xl text-gray-500'>Recent Cars</p>
                <h1 className='text-3xl font-bold'>Awesome Car <span className='text-[#FF9B1D]'>Collections</span></h1>
            </div>
            <div className='grid grid-cols-4 gap-6'>
                {slice?.map((car) => (
                    <div key={car?.id} className='carCard'>
                        <img className='h-[250px] w-[100%] carImg' src={car?.carImage} alt="CarsImage" />
                        <div className='px-[12px] pb-[20px]'>
                            <div className='flex items-center justify-between py-[10px]'>
                                <h4 className='text-xl font-bold text-[#FF9B1D]'>{car?.name}</h4>
                                <h4 className='text-xl font-bold'>${car?.price}</h4>
                            </div>
                            <p className='pb-[10px]'>{car?.description}</p>
                            <div className='flex justify-between'>
                                <div>
                                    <div className='flex items-center gap-1'>
                                        <IoMdSettings className='text-[#FF9B1D] text-xl' />
                                        <h4>{car?.grade}</h4>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <IoIosColorPalette className='text-[#FF9B1D] text-xl' />
                                        <h4>{car?.color}</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex items-center gap-1'>
                                        <FaGasPump className='text-[#FF9B1D] text-xl' />
                                        <h4>{car?.fuill}</h4>
                                    </div>
                                    <div className='flex items-center gap-1'>
                                        <IoCarSport className='text-[#FF9B1D] text-xl' />
                                        <h4>{car?.model}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex justify-center'>
                <button className='moreBtn' onClick={() => loadCar()}>
                    More Collection
                </button>
            </div>
        </div>
    );
};

export default Cars;