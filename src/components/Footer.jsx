import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="border-t-2">
            <div className="container px-4 md:py-32 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <img src="assets/images/logo.svg" className="mr-5" alt="logo" />
                        <p className="max-w-sm mt-4 text-base font-dmsans text-gray-600">A fastest global Blockchain powered Payment gateway for Start-ups and Enterprises. Built and Secured by Xend Finance.</p>
                        <p className="max-w-sm mt-10 text-base font-dmsans text-gray-600">Copyright  Switch Wallet 2022</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <p className="font-dmsans font-medium text-lg">Technology</p>
                            <nav className="flex flex-col mt-4 space-y-2 text-base font-dmsans text-gray-500">
                                <Link className="hover:opacity-75" to=''>For Start-ups</Link>
                                <Link className="hover:opacity-75" to=''>For Enterpise</Link>
                                <Link className="hover:opacity-75" to=''>For Global Brands</Link>
                            </nav>
                        </div>
                        <div>
                            <p className="font-dmsans font-medium text-lg">Pricing</p>
                        </div>
                        <div>
                            <p className="font-dmsans font-medium text-lg">Developers</p>
                            <nav className="flex flex-col mt-4 space-y-2 text-base font-dmsans text-gray-500">
                                <Link className="hover:opacity-75" to=''>API</Link>
                                <Link className="hover:opacity-75" to=''>Documentation</Link>
                            </nav>
                        </div>
                        <div>
                            <p className="font-dmsans font-medium text-lg">Support</p>
                            <nav className="flex flex-col mt-4 space-y-2 text-base font-dmsans text-gray-500">
                                <Link className="hover:opacity-75" to=''>FAQ</Link>
                                <Link className="hover:opacity-75" to=''>Blog</Link>
                                <Link className="hover:opacity-75" to=''>Contact Us</Link>
                                <Link className="hover:opacity-75" to=''>Privacy & Terms</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;