import React from 'react';
import { ReactTyped } from "react-typed";

const Banner = () => {
    return (
        <div class='bg-[#1893ff] w-full py-[100px] '>
            <div className='max-w-[1200px] mx-auto text-center my-[100px] font-bold '>
                <div className=' text-xl md:text-3xl mt-5'>
                    Learn With us
                </div>
                <h2 className='text-white  text-4xl md:text-7xl mt-5'>Grow with us.</h2>
                <div className='text-3xl md:text-4xl mt-5 text-white'>
                    Learn <ReactTyped strings={["Web Development", "Digital Marketing", "Ethical Hacking"]}
                       className='pl-2'
                       typeSpeed={100}
                       backSpeed={120}
                        loop={true} />
                </div>
                <div>
                    <button className='bg-black p-3 rounded mt-8 text-white '>Get Started</button>
                </div>
            </div>

        </div>
    )
}

export default Banner