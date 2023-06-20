import React, { useEffect, useState } from 'react';
import { FaEye, FaStar, FaStarHalf, FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link, useParams } from 'react-router-dom';

const SinglePage = () => {
    const [singleCar, setSingleCar] = useState([])
    const { id } = useParams()
    useEffect(() => {
        fetch(`https://toy-cor-server.vercel.app/addtoy/${id}`)
            .then(res => res.json())
            .then(data => setSingleCar(data))
    }, [id])
    const { _id, name, sellerName, emailDB, price, rating, quantity, photo, catagory, discription } = singleCar || {}
    console.log(name);
    return (
        <div className='w-11/12 mx-auto py-4'>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className='w-1/2 '><img src={photo} alt="Movie" className='h-full' /></figure>
                <div className="card-body w-12">
                    <h2 className="card-title capitalize text-3xl text-black">Name: {name}</h2>
                    <h2 className="card-title capitalize text-xl ">seller Name : {sellerName}</h2>
                    <h2 className="card-title capitalize text-xl">Seller Email : {emailDB}</h2>
                    <p className="card-title capitalize text-xl"> Discription : {discription}</p>
                    <h2 className="card-title capitalize">Price : ${price}</h2>
                    <h2 className="card-title capitalize">Quantity : ${quantity}</h2>
                    <h2 className="card-title capitalize"> Catagory : {catagory}</h2>
                    <div className='flex justify-between py-2 mb-7 items-center'>
                        <Rating
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaStarHalfAlt />}
                            placeholderSymbol={<FaStar  />}
                            fullSymbol={<FaStar />}
                            className='text-orange-600 text-sm md:text-2xl'
                        />
                        <div className='flex justify-between gap-3 items-center'>
                            <FaEye></FaEye>
                            {rating}
                        </div>
                    </div>
                    <Link to="/all-Toy" className='view text-center text-white text-xl '>All Tous</Link>

                </div>
            </div>
        </div>
    );
};

export default SinglePage;