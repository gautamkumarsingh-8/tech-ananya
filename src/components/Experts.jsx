import React from 'react';
import gautam from '../components/images/3918929.jpg';
const Experts = () => {
    return (
        <div className='max-w-[1240px] p-3 my-10 mx-auto md:grid grid-cols-2'>
            <div className=' col-span-1 md:w-[80%]'>
                <img className="inline"
                    src={gautam} />
            </div>
            <div className=' col-span-1 flex flex-col justify-center'>
                <h1 className='text-[#00df9a] font-bold my-2'>LEARN FROM EXPORTS</h1>
                <p className='my-2 text-justify'>From business planning and negotiating sales
                    contracts, to export financing options and shipping documents,
                    these progressive steps ensure you have the knowledge and skillsets
                    to be a successful exporter.
                </p>
                <button className= 'my-2 w-50 bg-black p-3 rounded  text-white '>Get Started</button>
            </div>
        </div>
    )
}

export default Experts