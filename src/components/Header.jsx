import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

function Header() {
    const { pathname } = useLocation();

    useEffect(() => {
        const btn = document.querySelector("button.mobile-menu-button");
        const menu = document.querySelector(".mobile-menu");

        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });
    }, []);

    return (
        <header className="left-0 right-0 bg-white z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        {/* Logo */}
                        <Link to="/" className="py-5"><img src="assets/images/logo.svg" alt="Logo" /></Link>
                    </div>
                    {/* Menu Items */}
                    <div className="hidden md:flex items-center space-x-1">
                        <Link to="/" className={`py-5 px-3 text-lg font-dmsans font-medium hover:text-gradient transition duration-300 ease-in ${pathname === '/' ? 'text-gradient' : ''}`}>Home</Link>
                        <Link to="/about" className={`py-5 px-3 text-lg font-dmsans font-medium hover:text-gradient transition duration-300 ease-in ${pathname === '/about' ? 'text-gradient' : ''}`}>About</Link>
                        <Link to="/developers" className={`py-5 px-3 text-lg font-dmsans font-medium hover:text-gradient transition duration-300 ease-in ${pathname === '/developers' ? 'text-gradient' : ''}`}>Developers</Link>
                        <a href="https://stg-integrations.switchwallet.io/auth/login" target="_blank" rel="noopener noreferrer" className={`py-5 px-3 text-lg font-dmsans font-medium hover:text-gradient transition duration-300 ease-in ${pathname === '/login' ? 'text-gradient' : ''}`}>Login</a>
                        <a href="https://stg-integrations.switchwallet.io/auth/register" target="_blank" rel="noopener noreferrer"><button type='button' className='p-4 bg-[#2042B8] hover:bg-[#2546bd] w-56 rounded-full text-white cursor-pointer font-dmsans font-bold md:ml-0 ml-4 md:my-0 my-5'>Create Account</button></a>
                    </div>
                    {/* Hamburger Icon */}
                    <div className="md:hidden flex items-center">
                        <button className="mobile-menu-button">
                            <svg width="30" height="24" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 17H25V14.1664H0V17ZM0 9.91644H25V7.08355H0V9.91644ZM0 0V2.83355H25V0H0Z" fill="url(#paint0_linear_695_1242)" />
                                <defs>
                                    <linearGradient id="paint0_linear_695_1242" x1="2.94599" y1="2.5174e-07" x2="17.2169" y2="29.9668" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.0428217" stopColor="#2042B8" />
                                        <stop offset="0.883313" stopColor="#FF6600" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className="mobile-menu hidden md:hidden">
                <Link to="/" className={`block pt-2 pb-3 px-4 text-lg font-dmsans font-medium hover:text-gradient focus:text-gradient transition duration-300 ease-in ${pathname === '/' ? 'text-gradient' : ''}`}>Home</Link>
                <Link to="/about" className={`block py-2 px-4 text-lg font-dmsans font-medium hover:text-gradient focus:text-gradient transition duration-300 ease-in ${pathname === '/about' ? 'text-gradient' : ''}`}>About</Link>
                <Link to="/developers" className={`block pt-2 pb-3 px-4 text-lg font-dmsans font-medium hover:text-gradient focus:text-gradient transition duration-300 ease-in ${pathname === '/developers' ? 'text-gradient' : ''}`}>Developers</Link>
                <a href="https://stg-integrations.switchwallet.io/auth/login" target="_blank" rel="noopener noreferrer" className={`block pt-2 pb-3 px-4 text-lg font-dmsans font-medium hover:text-gradient focus:text-gradient transition duration-300 ease-in ${pathname === '/login' ? 'text-gradient' : ''}`}>Login</a>
                <a href="https://stg-integrations.switchwallet.io/auth/register" target="_blank" rel="noopener noreferrer"><button type='button' className='p-4 bg-[#2042B8] hover:bg-[#2546bd] w-56 rounded-full text-white cursor-pointer font-dmsans font-bold md:ml-0 ml-4 md:my-0 my-5'>Create Account</button></a>
            </div>
        </header>
    )
}

export default Header;