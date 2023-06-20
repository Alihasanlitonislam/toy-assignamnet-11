import React from 'react';
import { FaEye, FaStar, FaStarHalf } from 'react-icons/fa';
import Rating from 'react-rating';

const Cor = ({ cor }) => {
    const {photo_url, name, price, rating, } = cor;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={photo_url} alt="Shoes" className='w-full h-[250px]'/></figure>
            <div className="card-body relative">
                <h2 className="card-title text-2xl">Name : {name}</h2>
                <p className='text-xl font-medium  text-start'>Prices : ${price}</p>
                <div className='flex justify-between py-2 mb-7 items-center'>
                    <Rating
                        placeholderRating={rating}
                        readonly
                        emptySymbol={<FaStarHalf />}
                        placeholderSymbol={<FaStar />}
                        fullSymbol={<FaStar />}
                        className='text-orange-600 text-sm md:text-2xl'
                    />
                    <div className='flex justify-between gap-3 items-center'>
                        <FaEye></FaEye>
                        {rating}
                    </div>
                </div>
                <div className=" absolute bottom-0 left-0 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center rounded-b-xl">
                    <button className="py-1 text-3xl text-white font-medium">View Details </button>
                </div>
            </div>
        </div>
    );
};

export default Cor;