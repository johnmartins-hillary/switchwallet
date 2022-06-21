import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className='border-t-2'>
            <div className="container px-4 md:py-32 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <img src="assets/images/logo.svg" className="mr-5" alt="logo" />
                        <p className="max-w-md mt-4 text-lg font-dmsans text-[#2f3033]">The lowest cost wallet infrastructure for startups and businesses. Built and secured by the award-winning technical team at Xend Finance.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <p className="font-manrope font-bold text-xl text-black">Technology</p>
                            <nav className="flex flex-col mt-4 space-y-2 text-base font-dmsans text-[#2f3033]">
                                <Link className="hover:opacity-75" to='/startups'>For Startups</Link>
                                <Link className="hover:opacity-75" to='/enterprise'>For Enterpise</Link>
                                <Link className="hover:opacity-75" to='/global-brands'>For Global Brands</Link>
                            </nav>
                        </div>
                        <div>
                            <p className="font-manrope font-bold text-xl text-black">Developers</p>
                            <nav className="flex flex-col mt-4 space-y-2 text-base font-dmsans text-[#2f3033]">
                                <Link className="hover:opacity-75" to='/pricing'>Pricing</Link>
                                <a href="https://doc.switchwallet.io/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">Documentation</a>
                            </nav>
                        </div>
                        <div>
                            <p className="font-manrope font-bold text-xl text-black">Support</p>
                            <nav className="flex flex-col mt-4 space-y-2 text-base font-dmsans text-[#2f3033]">
                                <Link className="hover:opacity-75" to='/contact'>Contact Us</Link>
                                <Link className="hover:opacity-75" to='/privacy-terms'>Privacy & Terms</Link>
                            </nav>
                        </div>
                    </div>
                    <p className="max-w-sm mt-10 text-base font-dmsans font-medium text-[#625F5F]">© Switch Wallet 2022</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;