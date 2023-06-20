import React from 'react';
import { Link } from 'react-router-dom';

const CarosulSlider = () => {
    return (
        <div className="carousel w-11/12 mx-auto">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKw7lDC9rpUuT8euq2MRaaCugyD0-jsYtpcg4krgfbpw&s" className="w-full  h-[350px]" />
                <div className=" absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full left-0 top-0">
                    <div className='text-white pl-10 space-y-3'>
                        <h1 className='text-2xl md:text-6xl font-medium'>Pickup Truck</h1>
                        <p className='text-xl font-extralight'>Get ready for some hauling and towing fun with the Pickup Truck toy car. <br /> Its sturdy build and realistic features make it perfect for pretend construction sites.</p>
                        <div className='pt-4 flex gap-3 items-center '>
                            <Link className='btn-more'>Pickup More</Link>
                            <Link className='  px-4 py-2 rounded-md shadow-lg bg-rgb hover:border-0 '>Latest Project</Link>
                        </div>
                    </div>
                </div>
                <div className=" absolute flex justify-end items-end gap-10 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="data:image/jpeg;base64,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" className="w-full  h-[350px]" />
                <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full left-0 top-0">
                    <div className='text-white pl-10 space-y-3'>
                        <h1 className='text-2xl md:text-6xl font-medium'>Luxury Sedan</h1>
                        <p className='text-xl font-extralight'>Experience the epitome of luxury with the Luxury Sedan toy car. <br /> Its exquisite design and attention to detail make it a true symbol of elegance.</p>
                        <div className='pt-4 flex gap-3 items-center '>
                            <Link className='btn-more'>Luxury More</Link>
                            <Link className='  px-4 py-2 rounded-md shadow-lg bg-rgb hover:border-0 '>Latest Project</Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end items-end gap-10 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2XDyuRyDduUCOGC46Jz25PECW3BGVpywzQ&usqp=CAU" className="w-full  h-[350px]" />
                <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full left-0 top-0">
                    <div className='text-white pl-10 space-y-3'>
                        <h1 className='text-2xl md:text-6xl font-medium'>Off-Road Adventure</h1>
                        <p className='text-xl font-extralight'>Conquer any terrain with the Off-Road Adventure toy car. <br /> Its rugged design and all-terrain tires make it the ultimate off-road vehicle.</p>
                        <div className='pt-4 flex gap-3 items-center '>
                            <Link className='btn-more'>Adventure More</Link>
                            <Link className='  px-4 py-2 rounded-md shadow-lg bg-rgb hover:border-0 '>Latest Project</Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end items-end gap-10 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNuzMQdUMR7hrokH6932NOJZBdLVWyKFVwaQ&usqp=CAU" className="w-full  h-[350px]" />
                <div className="absolute flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full left-0 top-0">
                    <div className='text-white pl-10 space-y-3'>
                        <h1 className='text-2xl md:text-6xl font-medium'>Convertible Cruiser</h1>
                        <p className='text-xl font-extralight'>Feel the breeze with the Convertible Cruiser toy car. <br /> Its top-down design and sleek style make it perfect for sunny day drives.</p>
                        <div className='pt-4 flex gap-3 items-center '>
                            <Link className='btn-more'>Convertible More</Link>
                            <Link className='  px-4 py-2 rounded-md shadow-lg bg-rgb hover:border-0 '>Latest Project</Link>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end items-end gap-10 transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default CarosulSlider;