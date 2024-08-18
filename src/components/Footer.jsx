import React from 'react';
import icons from "../components/images/icons.png"

const Footer = () => {
  return (
    <div className='bg-[#1893ff] p-4'>
      <div className='max-w-[1240px] b mx-auto  sm:grid-cols-1  grid  md:grid-cols-2 lg:grid-cols-5 gap-8'>
        <div className=' h-[300px] md:col-span-2 sm:col-span-1'>
          <h1 className='text-3xl font-bold py-8'>Ananya Infotech.</h1>
          <p className='text-white '>
            From business planning and negotiating sales
            contracts, to export financing options and shipping documents,
            these progressive steps ensure you have the knowledge and skillsets
            to be a successful exporter.
          </p>
          <div className='flex justify-center'>
            <img className='w-[200px]'
            src={icons}/>
          </div>

        </div>
        <div className='col-span-1 text-center mt-8'>
          <h1 className='text-xl font-bold '>Solutions</h1>
          <div className="text-white mt-4 ">
            <p className='mt-4'>Discord Server</p>
            <p className='mt-4'>Twitter</p>
            <p className='mt-4'>Facebook</p>
            <p className='mt-4'>Contact Us</p>
          </div>
        </div>
        <div className=' col-span-1 text-center mt-8'>
        <h1 className='text-xl font-bold '>Support</h1>
          <div className="text-white mt-4 ">
            <p className='mt-4'>Privacy Policy</p>
            <p className='mt-4'>MacOS</p>
            <p className='mt-4'>Windows</p>
            <p className='mt-4'>Android</p>
          </div>
        </div>
        <div className='col-span-1 text-center mt-8'>
        <h1 className='text-xl font-bold '>Company</h1>
          <div className="text-white mt-4 ">
            <p className='mt-4'>About</p>
            <p className='mt-4'>Careers</p>
            <p className='mt-4'>Brand Center</p>
            <p className='mt-4'>Blog</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;