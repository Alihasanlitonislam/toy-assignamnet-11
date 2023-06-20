import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UseAuthContextApi } from '../../../AuthContext/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const [show, setShow] = useState(false)
    const { loginEmailPassword, googleLogin,googleDisplay } = useContext(UseAuthContextApi)
    const provider = new GoogleAuthProvider()
    const hendelLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginEmailPassword(email, password)
        .then(result =>{
            const user = result.user
            // console.log(user);
        })
        .catch(error =>{
            // console.log(error);
        })
        form.reset()
    }
    // google login 
    const hendelGoogleLogin = () =>{
        googleLogin(provider)
        .then(result=>{
            const googleUser = result.user
            googleDisplay(googleUser);
        })
        .catch(error=>{
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
                    <img src="https://www.brevistay.com/images/Group9473.png" alt="" className='w-full' />
                </div>
                <div className="card flex-shrink-0 w-full md:w-[50%]  shadow-2xl bg-base-100">
                    <form onSubmit={hendelLogin} className="card-body">
                        <h1 className='text-2xl text-center text-black font-medium '>Please Login The Form</h1>
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
                                <input type="submit" value='Login' />
                            </div>
                            <div className="divider">OR</div>
                            <div className="flex justify-center h-[50px] bg-rgb ">
                                <button onClick={ hendelGoogleLogin}><img src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/google-icon.png" alt="" className='w-[40px]' /></button>
                            </div>
                        </div>
                        <h1 className='text-center text-xl font-medium pt-3 text-black'>Please Create The <Link to='/register' className='text-orange-500'>Register Account</Link></h1>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;