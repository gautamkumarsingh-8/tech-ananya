import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
const Header = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <div className='bg-[#1893ff] '>
            <div className=' max-w-[1240px] py-[10px] items-center flex justify-between  max-auto'>
                <div className='text-3xl font-medium text-white px-4 lg:text-3xl sm:text-2xl '> <Link to="home">  Ananya Infotech </Link>
                </div>
                {
                    toggle ?
                        < IoMdClose onClick={() => setToggle(!toggle)} className='text-white font-bold text-3xl md:hidden block'  />
                        :
                        < IoMdMenu  onClick={() => setToggle(!toggle)} className='text-white font-bold text-3xl md:hidden block' />
                }


                <ul className=' hidden md:flex text-white gap-10 font-medium'>
                    <li>
                        <Link to="home">Home</Link>
                    </li>
                    <li>
                        <Link to="company">Company</Link>
                    </li>
                    <li>
                        <Link to="resource">Resource</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                </ul>
                {/* Resonsive menu */}
                <ul className={` duration-300  md:hidden text-white bg-[rgb(0,0,0)] fixed left[-100%] top-[72px] 
                 w-full h-screen text-center font-medium  ${ toggle ? "left-[0]" : "left-[-100%]"
                    }`}>
                    <li className='p-6'>
                        <Link to="home">Home</Link>
                    </li>
                    <li className='p-6'>
                        <Link to="company">Company</Link>
                    </li>
                    <li className='p-6'>
                        <Link to="resource">Resource</Link>
                    </li>
                    <li className='p-6'>
                        <Link to="about">About</Link>
                    </li>
                    <li className='p-6'>
                        <Link to="contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header