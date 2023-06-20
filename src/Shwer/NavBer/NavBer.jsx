import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UseAuthContextApi } from '../../AuthContext/AuthContext';

const NavBer = () => {
    const { user, googleUser } = useContext(UseAuthContextApi)
    const { photoURL, displayName } = googleUser
    const header = <>
        <Link>Home</Link>
        <Link to='/all-Toy'>All Tous</Link>
        <Link to='/blog'>Blogs</Link>
        {
            user ? <>
                <Link to='/mytoy'>My Toy</Link>
                <Link to='/add-Toy'>Add A Toy</Link>
                <Link to='/logout'>Log Out</Link>
            </> : <Link to='/login'>Login</Link>
        }

    </>

    return (
        <div className='bg-gray-200 fixed w-full mx-auto z-20'>
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {header}
                        </ul>
                    </div>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfccYPFcK3bYfY9VPw2xNtL-MYqBkzEYPnCQ&usqp=CAU' alt="" className=" normal-case w-[70px] h-[50px] md:w-[150px] " />

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-5 text-xl font-medium">
                        {header}
                    </ul>
                    <img src="" alt="" />
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <img src={photoURL} alt="" title={displayName} className='w-[40px] rounded-[50%]'/>
                            : <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-gq6-Rd8yDkRxfoz29yX_iIN03jdIbAyGg&usqp=CAU' alt="" title='Please Loign' className='w-[40px] rounded-[50%]' />
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBer;