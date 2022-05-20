import React from "react";
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

function Home() {
    return (
        <Layout>

            <section>
                <div className="container flex flex-col-reverse items-center px-6 mx-auto md:mt-20 mt-10 space-y-0 md:space-y-0 md:flex-row">
                    <div className="flex flex-col md:w-1/2">
                        <h1 className="max-w-xl text-3xl md:text-5xl md:text-left text-gradient font-rubik font-bold md:mt-0 mt-10 mb-14 capitalize">
                            Fastest blockchain wallet infrastructure for business
                        </h1>
                        <p className="max-w-md font-manrope font-medium text-base md:text-left mb-14 text-[#52575C]">
                            Switch Wallet is an enterprise-grade wallet infrastructure for blockchain services. Leveraging our patented UP-TAP™ technology, you can securely process transactions in a fraction of the time of any other platform.</p>
                        <div className="flex justify-center md:justify-start md:gap-5 gap-2">
                            <a href="https://stg-integrations.switchwallet.io/auth/register" target="_blank" rel="noopener noreferrer">
                                <button type='button' className='p-4 w-40 md:w-56 bg-[#2042B8] hover:bg-[#2546bd] rounded-full text-white cursor-pointer font-dmsans font-bold md:text-lg'>Create Account</button>
                            </a>
                            <Link to="/contact">
                                <button type='text' className='p-3 md:p-4 w-40 md:w-56 cursor-pointer rounded-full text-gradient font-dmsans font-bold md:text-lg text-center text-lg my-0 border-2 border-gradient'>Contact Sales</button>
                            </Link>
                        </div>
                        {/* <div className='mt-32'>
                            <h3 className='text-lg font-dmsans font-medium text-[#A7A7A7]'>Trusted by Top Brands</h3>
                            <div className="flex justify-center md:justify-start md:gap-5 gap-2">
                                <img src="assets/images/brands.svg" alt="Brands" />
                            </div>
                        </div> */}
                    </div>
                    <div className="md:w-1/2 flex items-center justify-center">
                        <img src="assets/images/map.svg" alt="Map" />
                    </div>
                </div>
            </section>

            <section className="py-4 my-12 md:my-0">
                <div className='text-center md:my-32'>
                    <h1 className='text-4xl md:text-5xl my-4 font-rubik font-bold text-[#444444]'>Fast n’ Simple payment for you </h1>
                    <p className="font-dmsans font-normal text-base md:text-lg my-2 md:my-4 text-[#52575C]">Built for your Business to connect more customer</p>
                </div>
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row mt-12 md:mt-0">
                    <div className="flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12">
                        <div className="container">
                            <div className="relative flex flex-col min-w-0 break-words w-full">
                                <div className="flex-auto p-5 lg:p-10">
                                    <img src="assets/images/setup.svg" alt="Setup" className="w-fit" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full lg:w-2/4 p-8">
                        <p className="text-2xl md:text-5xl my-4 leading-relaxed md:leading-snug font-rubik font-bold text-[#444444]">Multichain Crypto Payment API</p>
                        <p className="font-dmsans font-normal text-base md:text-lg my-2 md:my-4 text-[#52575C]">Start accepting cryptocurrencies using Switch Wallet for on your business and eCommerce site</p>
                    </div>
                </div>
            </section>

            <section className="md:py-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row mb-12 md:mb-20">
                    <div className="flex flex-col w-full lg:w-2/5 p-8 md:order-1 order-2">
                        <h1 className="text-2xl md:text-5xl my-4 leading-relaxed md:leading-snug font-rubik font-bold text-[#444444]">Fiat-to-Crypto Payment</h1>
                        <p className="font-dmsans font-normal text-base md:text-lg my-2 md:my-4 text-[#52575C]">Accept Fiat and Get Paid in Crypto and vice versa from multiple Crypto currencies.</p>
                    </div>
                    <div className="flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12 md:order-2 order-1">
                        <div className="relative flex flex-col min-w-0 break-words w-full">
                            <div className="flex-auto p-5 lg:p-10 flex justify-end">
                                <img src="assets/images/transfer_money.svg" alt="Transfer Money" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-4">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row mb-12 md:mb-20">
                    <div className="flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12">
                        <div className="container">
                            <div className="relative flex flex-col min-w-0 break-words w-full">
                                <div className="flex-auto p-5 lg:p-10">
                                    <img src="assets/images/crypto_portfolio.svg" alt="Crypto Portfolio" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full lg:w-2/4 p-8">
                        <p className="text-2xl md:text-5xl my-4 leading-relaxed md:leading-snug font-rubik font-bold text-[#444444]">Supports multiple currencies</p>
                        <p className="font-dmsans font-normal text-base md:text-lg my-2 md:my-4 text-[#52575C]">Switch Wallet support transactions in multiple such as BUSD, BTC, ETH, SHIBA, and up to 100+ Crypto</p>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="text-center mx-auto mb-12 lg:mb-14 max-w-[510px]">
                                <h2 className="font-bold text-2xl sm:text-4xl md:text-[40px] text-dark mb-5 font-rubik text-[#444444]">Getting Started is  easy</h2>
                                <p className="font-dmsans text-base md:text-lg font-normal text-[#A7A7A7]">Built for your Business to connect more customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-lg mb-8">
                                <div className="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8 ">
                                    <img src='assets/images/rocket.svg' alt='Rocket' className="w-full h-full" />
                                </div>
                                <h2 className="text-2xl md:text-3xl mb-5 font-rubik font-bold text-[#444444]">Switch Wallet For Start-up</h2>
                                <p className="text-[#52575C]">A new wave of payment solutions for Start-ups. Switch Wallet is a wallet funding platform that provides the seamless funding of multiple crypto currencies to businesses.</p>
                                <Link to="#">
                                    <button type='button' className='p-3 md:w-56 w-40 mt-10 cursor-pointer font-dmsans font-bold md:text-lg text-center text-gradient bg-transparent border-2 border-gradient rounded-full focus:outline-none flex items-center justify-center md:gap-5 gap-2'>
                                        Get Started
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.3914 10.5001L17.9909 9.90061L18.5904 10.5001L17.9909 11.0996L17.3914 10.5001ZM4.67402 11.3479C4.20577 11.3479 3.82619 10.9684 3.82619 10.5001C3.82619 10.0319 4.20577 9.65229 4.67402 9.65229V11.3479ZM12.904 4.81364L17.9909 9.90061L16.7919 11.0996L11.705 6.01265L12.904 4.81364ZM17.9909 11.0996L12.904 16.1866L11.705 14.9876L16.7919 9.90061L17.9909 11.0996ZM17.3914 11.3479H4.67402V9.65229H17.3914V11.3479Z" fill="url(#paint0_linear_195_746)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_195_746" x1="18.489" y1="5.418" x2="11.3332" y2="16.6823" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FF6600" />
                                                    <stop offset="1" stop-color="#2042B8" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-lg mb-8">
                                <div className="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8 ">
                                    <img src='assets/images/wallet.svg' alt='Wallet' className="w-full h-full" />
                                </div>
                                <h2 className="text-2xl md:text-3xl mb-5 font-rubik font-bold text-[#444444]">Switch Wallet For Enterprise</h2>
                                <p className="text-[#52575C]">Value for businesses with easy and convenient access to the best and most popular cryptocurrencies, by funding their lifestyle at any time of the day and from anywhere in the world.</p>
                                <Link to="#">
                                    <button type='button' className='p-3 md:w-56 w-40 mt-10 cursor-pointer font-dmsans font-bold md:text-lg text-center text-gradient bg-transparent border-2 border-gradient rounded-full focus:outline-none flex items-center justify-center md:gap-5 gap-2'>
                                        Get Started
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.3914 10.5001L17.9909 9.90061L18.5904 10.5001L17.9909 11.0996L17.3914 10.5001ZM4.67402 11.3479C4.20577 11.3479 3.82619 10.9684 3.82619 10.5001C3.82619 10.0319 4.20577 9.65229 4.67402 9.65229V11.3479ZM12.904 4.81364L17.9909 9.90061L16.7919 11.0996L11.705 6.01265L12.904 4.81364ZM17.9909 11.0996L12.904 16.1866L11.705 14.9876L16.7919 9.90061L17.9909 11.0996ZM17.3914 11.3479H4.67402V9.65229H17.3914V11.3479Z" fill="url(#paint0_linear_195_746)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_195_746" x1="18.489" y1="5.418" x2="11.3332" y2="16.6823" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FF6600" />
                                                    <stop offset="1" stop-color="#2042B8" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-lg mb-8 ">
                                <div className="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8 ">
                                    <img src='assets/images/community.svg' alt='Community' className="w-full h-full" />
                                </div>
                                <h2 className="text-2xl md:text-3xl mb-5 font-rubik font-bold text-[#444444]">Switch Wallet For Global Brand</h2>
                                <p className="text-[#52575C]">A new generation wallet payment service provider. We provide a cost-efficient and scalable solution for Start-ups that want to accept cryptocurrency as a payment method.</p>
                                <Link to="#">
                                    <button type='button' className='p-3 md:w-56 w-40 mt-10 cursor-pointer font-dmsans font-bold md:text-lg text-center text-gradient bg-transparent border-2 border-gradient rounded-full focus:outline-none flex items-center justify-center md:gap-5 gap-2'>
                                        Get Started
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.3914 10.5001L17.9909 9.90061L18.5904 10.5001L17.9909 11.0996L17.3914 10.5001ZM4.67402 11.3479C4.20577 11.3479 3.82619 10.9684 3.82619 10.5001C3.82619 10.0319 4.20577 9.65229 4.67402 9.65229V11.3479ZM12.904 4.81364L17.9909 9.90061L16.7919 11.0996L11.705 6.01265L12.904 4.81364ZM17.9909 11.0996L12.904 16.1866L11.705 14.9876L16.7919 9.90061L17.9909 11.0996ZM17.3914 11.3479H4.67402V9.65229H17.3914V11.3479Z" fill="url(#paint0_linear_195_746)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_195_746" x1="18.489" y1="5.418" x2="11.3332" y2="16.6823" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FF6600" />
                                                    <stop offset="1" stop-color="#2042B8" />
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

            <section className='md:my-32 px-10 md:px-0'>
                <img className='absolute right-0 hidden md:block' src="assets/images/Developers6.svg" alt="Developers" />
                <div className="max-w-6xl flex flex-col-reverse items-center mx-auto space-y-0 md:space-y-0 md:flex-row md:py-20">
                    <div className="flex flex-col md:w-1/2">
                        <h1 className="max-w-lg text-2xl font-rubik font-bold md:text-5xl md:text-left md:mt-0 mt-10 text-[#444444]">Business & Partners that trust Switch Wallet</h1>
                        <p className="max-w-lg md:text-left font-dmsans text-base md:text-lg font-normal my-10 text-[#757575]">We are backed by a few of the best. A product of XendFinance and has been steadily improving ever since. You can use Switch Wallet to exchange cryptocurrencies to FIAT currencies (e.g., EUR, USD, GBP, etc.). We make it easy to securely store your wallet on our server and provide you with the ultimate user experience.</p>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto p-5">
                <div className="rounded-3xl mt-10 md:mt-32 mb-20 flex flex-row bg-gradient-plus text-white">
                    <div className="lg:w-3/5 w-full p-12">
                        <div className="lg:w-2/3">
                            <h3 className="font-rubik font-bold mb-10 text-2xl md:text-4xl">A set way to take your business to the next level</h3>
                            <p className="font-dmsans font-bold mb-4 md:text-lg text-[#A7A7A7]">We accept multiple cryptocurrencies and convert them to fiat at the time of transaction.</p>
                        </div>
                    </div>
                    <div className="lg:w-2/5 w-full lg:flex lg:flex-row hidden items-center justify-center">
                        <img src="assets/images/big_logo.svg" alt="big logo" className="h-96 w-full" />
                        <a href="https://stg-integrations.switchwallet.io/auth/register" target="_blank" rel="noopener noreferrer" className='absolute'>
                            <button type='button' className='p-4 bg-white hover:bg-white md:w-60 w-40 rounded-full cursor-pointer'>
                                <p className='text-gradient font-dmsans font-bold text-lg'>Create Account</p>
                            </button>
                        </a>
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default Home;