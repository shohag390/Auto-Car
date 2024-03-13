import React, { useEffect, useState } from 'react';
import { MdSupportAgent } from "react-icons/md";


const Supports = () => {
    const [card, setCard] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/support')
            .then((res) => res.json())
            .then((data) => setCard(data))
    }, []);
    return (
        <div className='font-[cursive] support h-[100%] w-[100%] md:px-[80px] px-[20px] pb-[50px]'>
            <div className='text-center md:pt-[30px] md:pb-[50px]'>
                <p className='text-xl text-gray-300'>We are Ultra Creative Agency</p>
                <h1 className='text-3xl font-bold text-white'>Our Top <span className='text-[#FF9B1D]'>Supports</span></h1>
            </div>
            <div className='grid grid-cols-3 gap-[30px]'>
                {card?.map((item) => (
                    <div key={item?.id} className='bg-[#ffffff45] p-[20px] suportCart'>
                        <div className='h-[50px] w-[50px] bg-[#FF9B1D] rounded-full flex justify-center items-center border-2'>
                            <MdSupportAgent className='text-4xl text-[#FFFF]' />
                        </div>
                        <h4 className='text-[#FF9B1D] text-xl font-bold py-[8px]'>{item?.heading}</h4>
                        <p className='text-white'>{item?.paragraph}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Supports;