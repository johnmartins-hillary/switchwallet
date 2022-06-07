import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Enterprise = () => {
    return (
        <Layout>

            <section className='bg-[#F8F9FF]'>
                <div className="container flex flex-col-reverse items-center px-6 mx-auto space-y-0 md:space-y-0 md:flex-row py-20">
                    <div className="md:w-2/3 flex flex-col">
                        <h1 className="max-w-xl font-rubik font-bold text-gradient text-2xl md:text-5xl md:text-left md:mt-0 mt-16 mb-10 leading-loose">Manage all your accounts in one place</h1>
                        <p className="max-w-md md:text-left leading-relaxed text-lg text-gray-600 font-dmsans mb-14">Utilize our custom dashboard to manage all of your wallets and blockchain transactions, taking care of everything at your fingertips.</p>
                        <div className="flex justify-center md:justify-start md:gap-5 gap-2">
                            <a href="https://stg-integrations.switchwallet.io/auth/register" target="_blank" rel="noopener noreferrer">
                                <button type='button' className='p-4 md:w-56 w-40 bg-[#2042B8] hover:bg-[#2546bd] rounded-full text-white cursor-pointer font-dmsans font-bold md:text-lg'>Create Account</button>
                            </a>
                            <Link to="/">
                                <button type='text' className='p-3 md:p-4 md:w-56 w-40 cursor-pointer rounded-full font-dmsans font-bold md:text-lg text-center text-base my-0'>See how it works</button>
                            </Link>
                        </div>
                    </div>
                    <div className="md:w-3/4 flex items-end justify-end">
                        <img className='object-contain w-fit' src="assets/images/Enterpise1.svg" alt="Enterpise" />
                    </div>
                </div>
            </section>

            <section className='my-20'>
                <div className="max-w-7xl px-6 py-10 mx-auto">
                    <h1 className="font-rubik font-bold text-black text-2xl md:text-5xl text-center">Our best features designed for your Product</h1>
                    <p className="font-dmsans text-center mt-12 text-lg text-gray-500 max-w-xl mx-auto">We are the only wallet provider to offer you high-security, cold storage, offline data protection, and encryption of your crypto funds with full transparency and support.</p>
                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-20 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                        <div className="p-8 border bg-white z-40 rounded-2xl text-center">
                            <span className="inline-block text-blue-500 dark:text-blue-400 mx-auto">
                                <svg width="50" height="45" viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="15" width="50" height="30" fill="#FF6600" />
                                    <rect width="39" height="10" fill="#2042B8" />
                                </svg>
                            </span>
                            <h1 className="font-rubik font-medium text-3xl mb-10 mt-6 text-gray-700">Solid Infrastructure</h1>
                            <p className="dark:text-gray-300 leading-relaxed text-lg text-gray-600 font-dmsans">Besides having the best digital wallet infrastructure in Africa, we deepen innovation so that we can create a very reliable system for you</p>
                        </div>
                        <div className="p-8 border bg-white z-40 rounded-2xl text-center">
                            <span className="inline-block text-blue-500 dark:text-blue-400 mx-auto">
                                <svg width="50" height="45" viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="15" width="50" height="30" fill="#2042B8" />
                                    <rect width="39" height="10" fill="#FF6600" />
                                </svg>
                            </span>
                            <h1 className="font-rubik font-medium text-3xl mb-10 mt-6 text-gray-700">Review transactions</h1>
                            <p className="dark:text-gray-300 leading-relaxed text-lg text-gray-600 font-dmsans">Manage your solution transactions in our platform designed to meet all your needs.</p>
                        </div>
                        <div className="p-8 border bg-white z-40 rounded-2xl text-center">
                            <span className="inline-block text-blue-500 dark:text-blue-400 mx-auto">
                                <svg width="50" height="45" viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="15" width="50" height="30" fill="#2042B8" />
                                    <rect width="39" height="10" fill="#FF6600" />
                                </svg>
                            </span>
                            <h1 className="font-rubik font-medium text-3xl mb-10 mt-6 text-gray-700">Get transaction insights</h1>
                            <p className="dark:text-gray-300 leading-relaxed text-lg text-gray-600 font-dmsans">View detailed analysis of your transactions and orders with insights on transaction flows, managing your keys, and transacting in different crypto currencies.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
                    <div className="flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12">
                        <div className="relative flex flex-col min-w-0 break-words w-full">
                            <div className="flex-auto p-5 lg:p-10">
                                <img src="assets/images/Enterpise2.svg" alt="Enterpise" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full lg:w-3/5 p-8">
                        <h5 className='font-dmsans font-medium text-xl text-slate-700 text-gradient'>Why Choose us</h5>
                        <p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug font-rubik font-bold">Track your transaction on the go with the best way possible</p>
                        <p className="text-sm md:text-lg my-2 md:my-4 font-dmsans font-normal text-slate-500">No matter where you are, you can track the status wallet service through our on-the-go system.</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:mt-20">
                    <div className="flex flex-col w-full lg:w-3/5 p-8 md:order-1 order-2">
                        <h5 className='font-dmsans font-medium text-xl text-slate-700 text-gradient'>Why Choose us</h5>
                        <h1 className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug font-rubik font-bold">Save money while building your solution</h1>
                        <p className="text-sm md:text-lg my-2 md:my-4 font-dmsans font-normal text-slate-500">You are finally able to save money while building that solution you've been wanting to build. No more estimating how much it will cost you for a wallet service.</p>
                    </div>
                    <div className="flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12 md:order-2 order-1">
                        <div className="relative flex flex-col min-w-0 break-words w-full">
                            <div className="flex-auto flex justify-end">
                                <img src="assets/images/Enterpise3.svg" alt="Enterpise" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default Enterprise;