import React from 'react';
import { FaCheck } from "react-icons/fa";
const CorToySection = () => {
    return (

        <div data-aos="flip-right">
            <div className="w-11/12 mx-auto  bg-[url('https://c8.alamy.com/comp/2AJMTFM/top-view-of-parked-toy-cars-on-a-black-background-like-a-car-parking-lot-2AJMTFM.jpg')] bg-no-repeat bg-cover bg-fixed">
                <div className=' py-10 bg-gradient-to-r from-[#181818c0] to-[rgba(10,20,0,0)] h-full'>
                    <h1 className='text-center text-4xl font-semibold text-white py-2 '>Authentic police <br />car design with vibrant colors</h1>
                    <div className="hero">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src="https://i.ytimg.com/vi/UC7A1KKfEJU/maxresdefault.jpg" className="w-[50%] rounded-lg shadow-2xl" />
                            <div className='p-4 text-white'>
                                <h1 className="text-5xl font-bold">Police Pursuit Cruiser</h1>
                                <p className="py-6 text-xl">Experience the thrill of high-speed chases with our Police Pursuit Cruiser toy car. Equipped with flashing lights and siren sounds, this realistic replica brings action-packed adventures to life.</p>
                                <div>
                                    <div className='flex items-center gap-3 text-2xl font-medium'>
                                        <FaCheck />
                                        <h1>Sturdy construction and durable materials</h1>
                                    </div>
                                    <div className='flex items-center gap-3 text-2xl font-medium'>
                                        <FaCheck />
                                        <h1>Flashing lights and realistic siren sounds</h1>
                                    </div>
                                    <div className='flex items-center gap-3 text-2xl font-medium'>
                                        <FaCheck />
                                        <h1>Smooth wheels for fast and agile movement</h1>
                                    </div>
                                    <div className='flex items-center gap-3 text-2xl font-medium'>
                                        <FaCheck />
                                        <h1>Suitable for ages 3 and up</h1>
                                    </div>
                                </div>
                                {/* <button className="btn btn-primary">Get Started</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CorToySection;