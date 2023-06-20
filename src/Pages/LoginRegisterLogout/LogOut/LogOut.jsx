import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { UseAuthContextApi } from '../../../AuthContext/AuthContext';

const LogOut = () => {
    const [show, setShow] = useState(false)
    const { logOutEmailPassword } = useContext(UseAuthContextApi)
    const hendelLogOut = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // log out with email and password
        logOutEmailPassword()
            .then(() => {
                console.log('success the log out ');
            })
            .catch(error => {
                console.log(error.message);
            })
        form.reset()
    }
    const googleLogOut =()=>{
        logOutEmailPassword()
        .then(()=>{
            console.log('success the google log out');
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    // password show button
    const hendelPassword = open => {
        setShow(open)
    }
    return (
        <div className="hero min-h-screen bg-[url('https://t3.ftcdn.net/jpg/03/70/92/84/360_F_370928450_R6g8c0j5cey86PUXE32W7KMiqIUe1fOI.jpg')]">
            <div className="hero-content md:flex w-11/12 mx-auto">
                <div className="md:w-[50%] text-center lg:text-left">
                    <img src="https://cdn.dribbble.com/users/45010/screenshots/14586479/media/74c43973ed0e41ecfd77da872c476ec2.png?compress=1&resize=400x300" alt="" className='w-full rounded-md' />
                </div>
                <div className="card flex-shrink-0 w-full md:w-[50%]  shadow-2xl bg-base-100">
                    <form onSubmit={hendelLogOut} className="card-body">
                        <h1 className='text-2xl text-center text-black font-medium '>Please Log Out The Form</h1>
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
                                type={show ? 'text' : 'password'}
                                name='password'
                                placeholder="password"
                                className="input input-bordered" />
                            <div onClick={() => hendelPassword(!show)} className='absolute top-[50px] right-3'>
                                {
                                    show ? <FaEye className='text-2xl'></FaEye> : <FaEyeSlash className='text-2xl'></FaEyeSlash>
                                }
                            </div>
                        </div>
                        <div className="flex flex-col w-full border-opacity-50 mt-4">
                            <div className="w-full form-control card h-[50px] bg-rgb ">
                                <input type="submit" value='Log Out' />
                            </div>
                            <div className="divider">OR</div>
                            <div className="flex justify-center h-[50px] bg-rgb ">
                                <button onClick={googleLogOut}><img src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/google-icon.png" alt="" className='w-[40px]' /></button>
                            </div>
                        </div>
                        <h1 className='text-center text-xl font-medium pt-3 text-black'>Please Account <Link to='/login' className='text-orange-500'>In Login</Link></h1>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogOut;