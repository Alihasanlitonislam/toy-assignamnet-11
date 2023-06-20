import React from 'react';

const Foter = () => {
    return (
        <footer className=" p-10 bg-base-200 ">
            <div className='flex justify-between footer text-base-content w-11/12 mx-auto'>
                <div className='w-[50%]'>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div className='w-[50%]'>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">JOIN OUR Hasan Car Toy LIST</span>
                    <span className="footer-title">Sign up for our newsletter to receive specials and up to date product news and releases.</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full px-4 text-2xl text-white rounded-r-md absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Foter;