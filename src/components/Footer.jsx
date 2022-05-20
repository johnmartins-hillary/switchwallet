import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="container border-t-2 px-4 md:py-32 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <img src="assets/images/logo.svg" className="mr-5" alt="logo" />
                        <p className="max-w-sm mt-4 text-lg font-dmsans text-[#A7A7A7]">A fastest global Blockchain powered Payment gateway for Start-ups and Enterprises. Built and Secured by Xend Finance.</p>
                        <p className="max-w-sm mt-10 text-base font-dmsans font-bold text-[#625F5F]">© Switch Wallet 2022</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <p className="font-manrope font-bold text-xl text-[#25282B]">Company</p>
                            <nav className="flex flex-col mt-4 space-y-2 text-base font-dmsans text-[#A7A7A7]">
                                <Link className="hover:opacity-75" to='/about'>About</Link>
                                <Link className="hover:opacity-75" to='/pricing'>Pricing</Link>
                            </nav>
                        </div>
                        <div>
                            <p className="font-manrope font-bold text-xl text-[#25282B]">Technology</p>
                            <nav className="flex flex-col mt-4 space-y-2 text-base font-dmsans text-[#A7A7A7]">
                                <Link className="hover:opacity-75" to='/startups'>For Startups</Link>
                                <Link className="hover:opacity-75" to='/enterprise'>For Enterpise</Link>
                                <Link className="hover:opacity-75" to='/global-brands'>For Global Brands</Link>
                            </nav>
                        </div>
                        <div>
                            <p className="font-manrope font-bold text-xl text-[#25282B]">Developers</p>
                            <nav className="flex flex-col mt-4 space-y-2 text-base font-dmsans text-[#A7A7A7]">
                                <a href="https://documenter.getpostman.com/view/20639835/UyxeqUHN" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">Documentation</a>
                            </nav>
                        </div>
                        <div>
                            <p className="font-manrope font-bold text-xl text-[#25282B]">Support</p>
                            <nav className="flex flex-col mt-4 space-y-2 text-base font-dmsans text-[#A7A7A7]">
                                <Link className="hover:opacity-75" to='/faq'>FAQ</Link>
                                <Link className="hover:opacity-75" to='/contact'>Contact Us</Link>
                                <Link className="hover:opacity-75" to='/privacy-terms'>Privacy & Terms</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;