import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {FaEye, FaEyeSlash } from 'react-icons/fa';
import { UseAuthContextApi } from '../../../AuthContext/AuthContext';
const Register = () => {
    const [show, setShow] = useState(false)
    const {createEmailPassword, user} = useContext(UseAuthContextApi)
    console.log(user);
    const hendelRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const user = { name, email, password, photo }

        // create user email and password with firebase
        createEmailPassword(email, password)
        .then(result =>{
            const user = result.user
            console.log(user);
        })
        .catch(error => {
            console.log(error.message);
        })
        form.reset()
    }
    // password show button
    const hendelPassword = open =>{
        setShow(open)
    }
    return (
        <div className="hero min-h-screen bg-[url('https://t3.ftcdn.net/jpg/03/70/92/84/360_F_370928450_R6g8c0j5cey86PUXE32W7KMiqIUe1fOI.jpg')]">
            <div className="hero-content md:flex w-11/12 mx-auto">
                <div className="md:w-[50%] text-center lg:text-left">
                    <img src="https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_1966.png" alt="" className='w-full rounded-md' />
                </div>
                <div className="card flex-shrink-0 w-full md:w-[50%]  shadow-2xl bg-base-100">
                    <form onSubmit={hendelRegister} className="card-body">
                        <h1 className='text-2xl text-center text-black font-medium '>Please Register The Form</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type={show?'text':'password'}
                                name='password'
                                placeholder="password"
                                className="input input-bordered" />
                            <div onClick={() => hendelPassword(!show)} className='absolute top-[50px] right-3'>
                                {
                                    show ?<FaEye className='text-2xl'></FaEye>: <FaEyeSlash className='text-2xl'></FaEyeSlash> 
                                }
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo" className="input input-bordered" />
                        </div>
                        <div className="flex flex-col w-full border-opacity-50 mt-4">
                            <div className="w-full form-control card h-[50px] bg-rgb ">
                                <input type="submit" value='Register' />
                            </div>
                            <div className="divider">OR</div>
                            <div className="flex justify-center h-[50px] bg-rgb ">
                                <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/google-icon.png" alt="" className='w-[40px]' />
                            </div>
                        </div>
                        <h1 className='text-center text-xl font-medium pt-3 text-black'>Already Have An Account <Link to='/login' className='text-orange-500'>Please Login</Link></h1>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;