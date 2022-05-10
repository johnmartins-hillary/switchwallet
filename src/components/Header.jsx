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
                        <Link to="/" className="py-5"><img src="assets/images/logo.png" alt="Logo" /></Link>
                    </div>
                    {/* Menu Items */}
                    <div className="hidden md:flex items-center space-x-1">
                        <Link to="/technology" className={`py-5 px-3 text-lg font-dmsans font-medium hover:text-blue-600 transition duration-300 ease-in ${pathname === '/technology' ? 'text-blue-600' : ''}`}>Technology</Link>
                        <Link to="/pricing" className={`py-5 px-3 text-lg font-dmsans font-medium hover:text-blue-600 transition duration-300 ease-in ${pathname === '/pricing' ? 'text-blue-600' : ''}`}>Pricing</Link>
                        <Link to="/developers" className={`py-5 px-3 text-lg font-dmsans font-medium hover:text-blue-600 transition duration-300 ease-in ${pathname === '/developers' ? 'text-blue-600' : ''}`}>Developers</Link>
                        <Link to="/support" className={`py-5 px-3 text-lg font-dmsans font-medium hover:text-blue-600 transition duration-300 ease-in ${pathname === '/support' ? 'text-blue-600' : ''}`}>Support</Link>
                        <Link to="/login" className={`py-5 px-3 text-lg font-dmsans font-medium hover:text-blue-600 transition duration-300 ease-in ${pathname === '/login' ? 'text-blue-600' : ''}`}>Login</Link>
                        <Link to="/register"><button type='button' className='p-3 bg-[#2042B8] hover:bg-[#2546bd] w-56 rounded-full text-white cursor-pointer font-dmsans font-medium md:ml-0 ml-4'>Create Account</button></Link>
                    </div>
                    {/* Hamburger Icon */}
                    <div className="md:hidden flex items-center">
                        <button className="mobile-menu-button">
                            <svg height="24" viewBox="0 0 30 24" width="30"><g fill="#000"><rect height="5.5" rx="2.75" width="29.333333"></rect><path d="m2.75 18.3333333h23.8333333c1.5187831 0 2.75 1.231217 2.75 2.75s-1.2312169 2.75-2.75 2.75h-23.8333333c-1.51878305 0-2.75-1.231217-2.75-2.75s1.23121695-2.75 2.75-2.75zm0-9.16666663h23.8333333c1.5187831 0 2.75 1.23121693 2.75 2.75000003 0 1.518783-1.2312169 2.75-2.75 2.75h-23.8333333c-1.51878305 0-2.75-1.231217-2.75-2.75 0-1.5187831 1.23121695-2.75000003 2.75-2.75000003z" opacity="0.7"></path></g></svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className="mobile-menu hidden md:hidden">
                <Link to="/technology" className={`block py-2 px-4 text-lg font-dmsans font-medium hover:text-blue-600 focus:text-blue-600 transition duration-300 ease-in ${pathname === '/technology' ? 'text-blue-600' : ''}`}>Technology</Link>
                <Link to="/pricing" className={`block pt-2 pb-3 px-4 text-lg font-dmsans font-medium hover:text-blue-600 focus:text-blue-600 transition duration-300 ease-in ${pathname === '/pricing' ? 'text-blue-600' : ''}`}>Pricing</Link>
                <Link to="/developers" className={`block pt-2 pb-3 px-4 text-lg font-dmsans font-medium hover:text-blue-600 focus:text-blue-600 transition duration-300 ease-in ${pathname === '/developers' ? 'text-blue-600' : ''}`}>Developers</Link>
                <Link to="/support" className={`block pt-2 pb-3 px-4 text-lg font-dmsans font-medium hover:text-blue-600 focus:text-blue-600 transition duration-300 ease-in ${pathname === '/support' ? 'text-blue-600' : ''}`}>Support</Link>
                <Link to="/login" className={`block pt-2 pb-3 px-4 text-lg font-dmsans font-medium hover:text-blue-600 focus:text-blue-600 transition duration-300 ease-in ${pathname === '/login' ? 'text-blue-600' : ''}`}>Login</Link>
                <Link to="/register"><button type='button' className='p-3 bg-[#2042B8] hover:bg-[#2546bd] w-56 rounded-full text-white cursor-pointer font-dmsans font-medium md:ml-0 ml-4'>Create Account</button></Link>
            </div>
        </header>
    )
}

export default Header;