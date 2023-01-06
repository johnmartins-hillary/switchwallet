import React, { useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const btn = document.querySelector("button.mobile-menu-button");
        const menu = document.querySelector(".mobile-menu");

        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });
    }, []);

    return (
        <header className="sticky top-0 left-0 right-0 bg-white z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-4">
                        <Link to="/" className="py-5"><img src="assets/images/logo.svg" alt="Logo" /></Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        <Link to="/" className={`py-5 px-3 text-xl font-dmsans font-semibold hover:text-gradient transition duration-300 ease-in ${pathname === '/' ? 'text-gradient' : ''}`}>Home</Link>
                        <Link to="/pricing" className={`py-5 px-3 text-xl font-dmsans font-semibold hover:text-gradient transition duration-300 ease-in ${pathname === '/pricing' ? 'text-gradient' : ''}`}>Pricing</Link>
                        <a href="https://faucet.switchwallet.io/" target="_blank" rel="noopener noreferrer" className={`py-5 px-3 text-xl font-dmsans font-semibold hover:text-gradient transition duration-300 ease-in ${pathname === '/faucet' ? 'text-gradient' : ''}`}>Faucet</a>
                        <a href="https://xend-finance.gitbook.io/switchwallet/" target="_blank" rel="noopener noreferrer" className={`py-5 px-3 text-xl font-dmsans font-semibold hover:text-gradient transition duration-300 ease-in ${pathname === '/documentation' ? 'text-gradient' : ''}`}>Documentation</a>
                        <a href="https://sandbox-integrations.switchwallet.io/" target="_blank" rel="noopener noreferrer" className={`py-5 px-3 text-xl font-dmsans font-semibold hover:text-gradient transition duration-300 ease-in ${pathname === '/login' ? 'text-gradient' : ''}`}>Login</a>
                        <a href="https://sandbox-integrations.switchwallet.io/create-account" target="_blank" rel="noopener noreferrer"><button type='button' className='p-3 bg-[#2042B8] hover:bg-[#2546bd] w-56 rounded-full text-white cursor-pointer font-dmsans font-semibold md:ml-0 ml-4 md:my-0 my-5 text-xl'>Create Account</button></a>
                    </div>
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
            <div className="mobile-menu hidden md:hidden">
                <Link to="/" className={`block px-4 text-xl font-dmsans font-semibold hover:text-gradient focus:text-gradient transition duration-300 ease-in ${pathname === '/' ? 'text-gradient' : ''}`}>Home</Link>
                <Link to="/pricing" className={`block py-2 md:py-0 px-4 text-xl font-dmsans font-semibold hover:text-gradient focus:text-gradient transition duration-300 ease-in ${pathname === '/pricing' ? 'text-gradient' : ''}`}>Pricing</Link>
                <a href="https://faucet.switchwallet.io/" target="_blank" rel="noopener noreferrer" className={`block pt-2 pb-3 px-4 text-xl font-dmsans font-semibold hover:text-gradient focus:text-gradient transition duration-300 ease-in ${pathname === '/faucet' ? 'text-gradient' : ''}`}>Faucet</a>
                <a href="https://xend-finance.gitbook.io/switchwallet/" target="_blank" rel="noopener noreferrer" className={`my-5 px-4 text-xl font-dmsans font-semibold hover:text-gradient transition duration-300 ease-in ${pathname === '/documentation' ? 'text-gradient' : ''}`}>Documentation</a>
                <a href="https://sandbox-integrations.switchwallet.io/" target="_blank" rel="noopener noreferrer" className={`block pt-2 pb-3 px-4 text-xl font-dmsans font-semibold hover:text-gradient focus:text-gradient transition duration-300 ease-in ${pathname === '/login' ? 'text-gradient' : ''}`}>Login</a>
                <a href="https://sandbox-integrations.switchwallet.io/create-account" target="_blank" rel="noopener noreferrer"><button type='button' className='p-3 bg-[#2042B8] hover:bg-[#2546bd] w-56 rounded-full text-white cursor-pointer font-dmsans font-semibold md:ml-0 ml-4 md:my-0 my-5 text-xl'>Create Account</button></a>
            </div>
        </header>
    )
}

export default Header;