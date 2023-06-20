import React, { useContext, useEffect, useState } from 'react';
import { UseAuthContextApi } from '../../AuthContext/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddToy = () => {
    const {user} = useContext(UseAuthContextApi)
    
    const hendelAddToy = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const sellerName = form.sellername.value;
        const emailDB = form.email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const catagory = form.catagory.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        const discription = form.discription.value;
        const user = { name, sellerName, emailDB, price, rating, quantity, photo, catagory, discription };
        fetch('https://toy-cor-server.vercel.app/addtoy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(toy => console.log(toy))
        form.reset()
        toast("Success the added to Prodack")
    }
    return (
        <div>
            <div className="hero w-11/12 mx-auto bg-[url('https://images.theconversation.com/files/351717/original/file-20200807-20-150g1hp.jpg?ixlib=rb-1.1.0&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip')] bg-no-repeat bg-cover bg-fixed">
                <div className="hero-content w-[70%] mx-auto">
                    <div className="card w-full shadow-2xl bg-base-100">
                        <h1 className='text-center pt-6 text-xl font-medium text-black'>Cor Toy: Ignite Curiosity, <br /> Spark Imagination - A Gateway to Fun, <br /> Learning, and Boundless Adventures for Young Explorers!</h1>
                        <form onSubmit={hendelAddToy} className=" px-10 py-4">
                            <div className=' grid grid-cols-2 gap-4'>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="your name" className="input input-bordered w-full" />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Seller Name</span>
                                    </label>
                                    <input type="text" name='sellername' placeholder="seller name" className="input input-bordered w-full" />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="seller email" defaultValue={user.email} className="input input-bordered w-full" />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name='price' placeholder="price" className="input input-bordered w-full" />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="text" name='rating' placeholder="rating" className="input input-bordered w-full" />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Sub Categori</span>
                                    </label>
                                    <select name="catagory" className="input input-bordered w-full" >
                                        <option>Regular Car</option>
                                        <option value="Mini Police Car">Mini Police Car</option>
                                        <option value="subcategory3">Sports Car</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Quantity</span>
                                    </label>
                                    <input type="text" name='quantity' placeholder="available quantity" className="input input-bordered w-full" />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="photo url" className="input input-bordered w-full" />
                                </div>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Discription</span>
                                </label>
                                <textarea name="discription" cols="30" rows="5" placeholder='Please Your Discription' className="input pt-2 input-bordered w-full border h-full"></textarea>
                            </div>
                            <input type="submit" value="Add A Toy" className="input input-bordered bg-rgb w-full" />
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default AddToy;