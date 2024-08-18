import React from 'react';
import web from '../components/images/web-development_2210153.png';
import digitalMarkting from '../components/images/promotion_8644499.png';
import app from "../components/images/mobile_9011110.png";


const Plance = () => {
  return (
    <div>
    <h1 class="mt-10 text-center capitalize text-4xl">Our Services</h1>
    <hr class=" w-1/5 mx-auto" />

    <div className='py-[100px]'>
      <div className='max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-3 justify-items-center'>

        <div className=' h-[500px] shadow-xl rounded-lg mt-7 hover:scale-105 duration-300 '>
          <div className='w-[180px] mx-24'>
            <img
              src={web} />
            <div className='text-center mx-auto'>
              <h1 className='text-xl mt-4 font-bold sm:'> Web Development</h1>
              <h2 className='text-4xl mt-4 font-semibold'>149$</h2>
              <p className='mt-4 '>
                Loremp Ipsum is Simply <br /><br /><hr />
                Loremp Ipsum is Simply dummy <hr />
              </p>
              <button className='bg-[#00df9a] p-2 w-[90%] rounded mt-5 text-white '>Get Started</button>
            </div>
          </div>
        </div>

        <div className=' h-[500px] bg-slate-100 shadow-xl rounded mt-7 hover:scale-105 duration-300 '>
          <div className='w-[180px]  mx-24'>
            <img
              src={app} />
            <div className='text-center mx-auto'>
              <h1 className='sm:text-[13px] md:text-xl mt-4 font-bold'> App Development</h1>
              <h2 className='text-4xl mt-4 font-semibold'>149$</h2>
              <p className='mt-4 '>
                Loremp Ipsum is Simply <br /><br /><hr />
                Loremp Ipsum is Simply dummy <hr />
              </p>
              <button className='bg-[#091aff] p-2 w-[90%] rounded mt-5 text-white '>Get Started</button>
            </div>
          </div>
        </div>
        <div className=' h-[500px] shadow-xl rounded mt-7 hover:scale-105 duration-300 '>
          <div className='w-[180px]  mx-24'>
            <img
              src={digitalMarkting} />
            <div className='text-center mx-auto'>
              <h1 className='text-xl mt-4 font-bold'> Digital Markting</h1>
              <h2 className='text-4xl mt-4 font-semibold'>149$</h2>
              <p className='mt-4 '>
                Loremp Ipsum is Simply <br /><br /><hr />
                Loremp Ipsum is Simply dummy <hr />
              </p>
              <button className='bg-[#ff0f0f] p-2 w-[90%] rounded mt-5 text-white '>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Plance