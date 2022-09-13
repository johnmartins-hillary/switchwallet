import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import GetStarted from "../components/GetStarted";

const Home = () => {
    useEffect(() => {
        AOS.init({
            delay: 300,
            once: true
        });
    }, []);
    return (
        <Layout>

            <section className="md:py-20 bg-white" data-aos="fade-down" data-aos-duration="1500">
                <div className="container items-center px-8 mx-auto xl:px-5">
                    <div className="flex flex-wrap items-center sm:-mx-3">
                        <div className="w-full md:w-1/2 md:px-3">
                            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                                <h1 className="text-3xl md:text-5xl md:text-left text-gradient font-bold tracking-tight md:mt-0 mt-10 mb-14 capitalize">Easy And Secure Wallet Infrastructure for your business</h1>
                                <p className="mx-auto text-base text-black sm:max-w-md lg:text-xl md:max-w-3xl">SwitchWallet is an enterprise-grade wallet provision service. Leveraging our technology, you can securely process transactions in a fraction of the time while saving cost.</p>
                                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                                    <a href="https://integrations.switchwallet.io/auth/register" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full px-6 py-3 mb-3 text-white bg-[#2042B8] sm:mb-0 hover:bg-[#2546bd] sm:w-auto font-dmsans text-lg font-bold rounded-full md:w-56">Create Account</a>
                                    <Link to="/contact" className="flex items-center justify-center px-6 py-3 text-gray-500 bg-gray-100 hover:bg-gray-200 hover:text-gray-600 border-2 border-gradient text-gradient font-dmsans text-lg font-bold rounded-full md:w-56">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex items-center justify-center">
                            <img src="assets/images/home1.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-4 my-12 md:my-0">
                <div className='text-center md:my-32' data-aos="zoom-in" data-aos-duration="2000">
                    <h2 className="box-border m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">Fast and Simple Payments For Your Business</h2>
                    <p className="box-border mt-4 text-base md:text-2xl leading-normal text-gray-900 border-solid">Built for your business to connect more customers</p>
                </div>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row mt-12 md:mt-0">
                    <div className="flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12" data-aos="fade-right" data-aos-duration="1500">
                        <div className="relative flex flex-col min-w-0 break-words w-full">
                            <div className="flex-auto p-5 lg:p-10">
                                <img src="assets/images/home2.png" alt="" className="w-fit" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full lg:w-2/4 p-8" data-aos="fade-left" data-aos-duration="1500">
                        <p className="text-2xl md:text-5xl my-4 leading-relaxed md:leading-snug font-rubik font-bold text-[#444444]">Multichain Crypto Wallet API</p>
                        <p className="font-dmsans font-normal text-base md:text-lg my-2 md:my-4 text-black">Digital assets are the new world currency. SwitchWallet provides an API infrastructure service that allows you to transact digital assets, across multiple chains and guarantee high-level security for your transactions.</p>
                    </div>
                </div>
            </section>

            <section className="md:py-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row my-12 md:my-20">
                    <div className="flex flex-col w-full lg:w-3/5 p-8 md:order-1 order-2" data-aos="fade-right" data-aos-duration="1500">
                        <h1 className="text-2xl md:text-5xl my-4 leading-relaxed md:leading-snug font-rubik font-bold text-[#444444]">Secure, Low-Cost Wallet Service</h1>
                        <p className="font-dmsans font-normal text-base md:text-lg my-2 md:my-4 text-black">We help businesses save time and money building solutions on the blockchain. With our easy and simple setup process, we'll have you enjoying our service in no time. SwitchWallet offers the best competitive rates, fast crypto transactions, and a variety of customizable features to help your business succeed.</p>
                    </div>
                    <div className="flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12 md:order-2 order-1" data-aos="fade-left" data-aos-duration="1500">
                        <div className="relative flex flex-col min-w-0 break-words w-full">
                            <div className="flex-auto p-5 lg:p-10 flex justify-end">
                                <img src="assets/images/home3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row mb-12 md:mb-20">
                    <div className="flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12" data-aos="fade-right" data-aos-duration="1500">
                        <div className="container">
                            <div className="relative flex flex-col min-w-0 break-words w-full">
                                <div className="flex-auto p-5 lg:p-10">
                                    <img src="assets/images/home4.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full lg:w-2/4 p-8" data-aos="fade-left" data-aos-duration="1500">
                        <p className="text-2xl md:text-5xl my-4 leading-relaxed md:leading-snug font-rubik font-bold text-[#444444] capitalize">Supports Multiple Currencies</p>
                        <p className="font-dmsans font-normal text-base md:text-lg my-2 md:my-4 text-black">SwitchWallet supports transactions in multiple cryptocurrencies such as BUSD, USDT, USDC,  DAI and others.</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4" data-aos="zoom-in" data-aos-duration="1500">
                            <div className="text-center mx-auto mb-12 lg:mb-14">
                                <h2 className="box-border m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl">Begin Your Journey On SwitchWallet</h2>
                                <p className="box-border mt-4 text-base md:text-2xl leading-normal text-gray-900 border-solid">Built for your business to connect with more customers</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4" data-aos="zoom-in-right" data-aos-duration="1500">
                            <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-lg mb-8">
                                <div className="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8">
                                    <img src='assets/images/home5.svg' alt='' className="w-full h-full" />
                                </div>
                                <h2 className="text-2xl md:text-3xl mb-5 font-rubik font-bold text-[#444444] capitalize">SwitchWallet For Startups</h2>
                                <p className="text-black">A new wave of wallet infrastructure solutions for Startups. SwitchWallet is a wallet funding platform that provides the seamless transaction of multiple cryptocurrencies for Startups</p>
                                <Link to="/global-brands">
                                    <button type='button' className='p-3 md:w-56 w-40 mt-10 cursor-pointer font-dmsans font-bold text-lg text-center text-gradient bg-transparent border-2 border-gradient rounded-full focus:outline-none flex items-center justify-center md:gap-5 gap-2'>
                                        Get Started
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.3914 10.5001L17.9909 9.90061L18.5904 10.5001L17.9909 11.0996L17.3914 10.5001ZM4.67402 11.3479C4.20577 11.3479 3.82619 10.9684 3.82619 10.5001C3.82619 10.0319 4.20577 9.65229 4.67402 9.65229V11.3479ZM12.904 4.81364L17.9909 9.90061L16.7919 11.0996L11.705 6.01265L12.904 4.81364ZM17.9909 11.0996L12.904 16.1866L11.705 14.9876L16.7919 9.90061L17.9909 11.0996ZM17.3914 11.3479H4.67402V9.65229H17.3914V11.3479Z" fill="url(#paint0_linear_195_746)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_195_746" x1="18.489" y1="5.418" x2="11.3332" y2="16.6823" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FF6600" />
                                                    <stop offset="1" stopColor="#2042B8" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4" data-aos="zoom-in" data-aos-duration="1500">
                            <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-lg mb-8">
                                <div className="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8">
                                    <img src='assets/images/home6.svg' alt='' className="w-full h-full" />
                                </div>
                                <h2 className="text-2xl md:text-3xl mb-5 font-rubik font-bold text-[#444444] capitalize">SwitchWallet For Enterprise</h2>
                                <p className="text-black md:pb-6">Value for businesses with easy and convenient access to the most affordable wallet provider service that has a solid infrastructure and excellent support.</p>
                                <Link to="/global-brands">
                                    <button type='button' className='p-3 md:w-56 w-40 mt-10 cursor-pointer font-dmsans font-bold text-lg text-center text-gradient bg-transparent border-2 border-gradient rounded-full focus:outline-none flex items-center justify-center md:gap-5 gap-2'>
                                        Get Started
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.3914 10.5001L17.9909 9.90061L18.5904 10.5001L17.9909 11.0996L17.3914 10.5001ZM4.67402 11.3479C4.20577 11.3479 3.82619 10.9684 3.82619 10.5001C3.82619 10.0319 4.20577 9.65229 4.67402 9.65229V11.3479ZM12.904 4.81364L17.9909 9.90061L16.7919 11.0996L11.705 6.01265L12.904 4.81364ZM17.9909 11.0996L12.904 16.1866L11.705 14.9876L16.7919 9.90061L17.9909 11.0996ZM17.3914 11.3479H4.67402V9.65229H17.3914V11.3479Z" fill="url(#paint0_linear_195_746)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_195_746" x1="18.489" y1="5.418" x2="11.3332" y2="16.6823" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FF6600" />
                                                    <stop offset="1" stopColor="#2042B8" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4" data-aos="zoom-in-left" data-aos-duration="1500">
                            <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-lg mb-8">
                                <div className="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8">
                                    <img src='assets/images/home7.svg' alt='' className="w-full h-full" />
                                </div>
                                <h2 className="text-2xl md:text-3xl mb-5 font-rubik font-bold text-[#444444]">SwitchWallet For Global Brands</h2>
                                <p className="text-black md:pb-6">A new generation wallet  service provider. We provide a cost-efficient and scalable solution for Global brands that want to build blockchain solutions and services.</p>
                                <Link to="/global-brands">
                                    <button type='button' className='p-3 md:w-56 w-40 mt-10 cursor-pointer font-dmsans font-bold text-lg text-center text-gradient bg-transparent border-2 border-gradient rounded-full focus:outline-none flex items-center justify-center md:gap-5 gap-2'>
                                        Get Started
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.3914 10.5001L17.9909 9.90061L18.5904 10.5001L17.9909 11.0996L17.3914 10.5001ZM4.67402 11.3479C4.20577 11.3479 3.82619 10.9684 3.82619 10.5001C3.82619 10.0319 4.20577 9.65229 4.67402 9.65229V11.3479ZM12.904 4.81364L17.9909 9.90061L16.7919 11.0996L11.705 6.01265L12.904 4.81364ZM17.9909 11.0996L12.904 16.1866L11.705 14.9876L16.7919 9.90061L17.9909 11.0996ZM17.3914 11.3479H4.67402V9.65229H17.3914V11.3479Z" fill="url(#paint0_linear_195_746)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_195_746" x1="18.489" y1="5.418" x2="11.3332" y2="16.6823" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FF6600" />
                                                    <stop offset="1" stopColor="#2042B8" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <GetStarted />

        </Layout>
    )
}

export default Home;