import React from 'react';
import { Link } from 'react-router-dom';

const NewsLetter = () => {
    return (
        <div className='bg-[#1893ff] p-4'>
            <div className='max-w-[1240px] mx-auto md:flex justify-between items-center py-[50px]'>
                <div className=''>
                  <h1 className='text-4xl font-bold text-white'> Want to learn latest I.T skills? </h1 >
                  <span className='text-white font-medium'>Sign up to our newsletter and stay up to date </span>
                </div>
                <div className= ''>
                   <input type="text" placeholder='Email@.com' className=' rounded p-3 mr-2 text-slate-300 ' />
                   <button className='bg-black p-3 rounded mt-1 text-white '>Get Started</button><br /><br />
                   <p className='text-white'>
                    We care bout the protection of your data. Read our <Link to='home'> <span className='text-[#ff2819] shadow'> privacy Policy. </span>  </Link></p>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter