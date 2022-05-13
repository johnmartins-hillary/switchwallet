import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="container border-t-2 px-4 md:py-32 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <img src="assets/images/logo.svg" className="mr-5" alt="logo" />
                        <p className="max-w-sm mt-4 text-base font-dmsans text-[#A7A7A7]">A fastest global Blockchain powered Payment gateway for Start-ups and Enterprises. Built and Secured by Xend Finance.</p>
                        <p className="max-w-sm mt-10 text-base font-dmsans font-bold text-[#625F5F]">Copyright  Switch Wallet 2022</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <p className="font-dmsans font-medium text-lg text-[#25282B]">Technology</p>
                            <nav className="flex flex-col mt-4 space-y-2 text-base font-dmsans text-[#A7A7A7]">
                                <Link className="hover:opacity-75" to='/startups'>For Start-ups</Link>
                                <Link className="hover:opacity-75" to='/enterprise'>For Enterpise</Link>
                                <Link className="hover:opacity-75" to='/global-brands'>For Global Brands</Link>
                            </nav>
                        </div>
                        <div>
                            <p className="font-dmsans font-medium text-lg text-[#25282B]">Pricing</p>
                        </div>
                        <div>
                            <p className="font-dmsans font-medium text-lg text-[#25282B]">Developers</p>
                            <nav className="flex flex-col mt-4 space-y-2 text-base font-dmsans text-[#A7A7A7]">
                                <Link className="hover:opacity-75" to='/api'>API</Link>
                                <Link className="hover:opacity-75" to='/documentation'>Documentation</Link>
                            </nav>
                        </div>
                        <div>
                            <p className="font-dmsans font-medium text-lg text-[#25282B]">Support</p>
                            <nav className="flex flex-col mt-4 space-y-2 text-base font-dmsans text-[#A7A7A7]">
                                <Link className="hover:opacity-75" to='/faq'>FAQ</Link>
                                <Link className="hover:opacity-75" to='/blog'>Blog</Link>
                                <Link className="hover:opacity-75" to='/contact-us'>Contact Us</Link>
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