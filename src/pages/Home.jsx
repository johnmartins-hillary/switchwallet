import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

function Home() {
    return (
        <Layout>

            <section>
                <div className="container flex flex-col-reverse items-center px-6 mx-auto md:mt-20 mt-10 space-y-0 md:space-y-0 md:flex-row">
                    <div className="flex flex-col md:w-1/2">
                        <h1 className="max-w-md text-3xl font-rubik font-bold text-gradient md:text-4xl md:text-left md:mt-0 mt-10 mb-14">
                            Fastest Blockchain Payment Gateway your business deserve
                        </h1>
                        <p className="max-w-md md:text-left text-gray-500 font-dmsans font-medium text-lg mb-14">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus velit posuere vestibulum, accumsan tincidunt vehicula quam odio.
                        </p>
                        <div className="flex justify-center md:justify-start md:gap-5 gap-2">
                            <a href="https://stg-integrations.switchwallet.io/auth/register" target="_blank" rel="noopener noreferrer">
                                <button type='button' className='p-4 md:w-56 w-40 bg-[#2042B8] hover:bg-[#2546bd] rounded-full text-white cursor-pointer font-dmsans font-bold md:text-lg'>Create Account</button>
                            </a>
                            <Link to="/contact">
                                <button type='text' className='p-3 md:p-4 md:w-56 w-40 cursor-pointer rounded-full text-gradient font-dmsans font-bold md:text-lg text-center text-lg my-0 border-2 border-amber-700'>Contact Sales</button>
                            </Link>
                        </div>
                        <div className='mt-32'>
                            <h3 className='text-gray-500 text-lg font-dmsans font-medium'>Trusted by Top Brands</h3>
                            <div className="flex justify-center md:justify-start md:gap-5 gap-2">
                                <img src="assets/images/brands.svg" alt="Brands" />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex items-center justify-center">
                        <img src="assets/images/map.svg" alt="Map" />
                    </div>
                </div>
            </section>

            <section className="py-4 my-12 md:my-36 text-dark">
                <div className='text-center md:my-32'>
                    <h1 className='text-4xl md:text-5xl my-4 font-rubik font-bold'>Fast n’ Simple payment for you </h1>
                    <p className="text-sm md:text-lg my-2 md:my-4 font-dmsans font-normal text-slate-500">Built for your Business to connect more customer</p>
                </div>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
                    <div className="flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12">
                        <div className="container">
                            <div className="relative flex flex-col min-w-0 break-words w-full">
                                <div className="flex-auto p-5 lg:p-10">
                                    <img src="assets/images/setup.svg" alt="Setup" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full lg:w-2/5 p-8">
                        <p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug font-rubik font-bold">Multichain Crypto Payment API</p>
                        <p className="text-sm md:text-lg my-2 md:my-4 font-dmsans font-normal text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus velit posuere vestibulum, accumsan tincidunt vehicula quam odio.</p>
                    </div>
                </div>
            </section>

            <section className="py-4 text-dark">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row my-12 md:my-36">
                    <div className="flex flex-col w-full lg:w-2/5 p-8 md:order-1 order-2">
                        <h1 className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug font-rubik font-bold">Fiat-to-Crypto Payment</h1>
                        <p className="text-sm md:text-lg my-2 md:my-4 font-dmsans font-normal text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus velit posuere vestibulum, accumsan tincidunt vehicula quam odio.</p>
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

            <section className="py-4 text-dark">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row my-12 md:my-36">
                    <div className="flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12">
                        <div className="container">
                            <div className="relative flex flex-col min-w-0 break-words w-full">
                                <div className="flex-auto p-5 lg:p-10">
                                    <img src="assets/images/crypto_portfolio.svg" alt="Crypto Portfolio" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full lg:w-2/5 p-8">
                        <p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug font-rubik font-bold">Supports BUSD, BTC, ETH, SHIBA, and up to 100+ Crypto</p>
                        <p className="text-sm md:text-lg my-2 md:my-4 font-dmsans font-normal text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus velit posuere vestibulum, accumsan tincidunt vehicula quam odio.</p>
                    </div>
                </div>
            </section>

            <section className="pb-12 lg:pb-[90px]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                                <h2 className="font-bold text-2xl sm:text-4xl md:text-[40px] text-dark mb-4 font-rubik">Getting Started is  easy</h2>
                                <p className="text-zinc-500 font-dmsans text-base md:text-lg font-bold">Built for your Business to connect more customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-lg mb-8">
                                <div className=" w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8 ">
                                    <img src='assets/images/rocket.svg' alt='Rocket' />
                                </div>
                                <h2 className="text-3xl text-dark mb-5 font-rubik font-bold">Switch Wallet For Start-up</h2>
                                <p className="text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus velit posuere vestibulum, accumsan tincidunt vehicula quam odio.</p>
                                <Link to="#">
                                    <button type='button' className='p-3 md:w-56 w-40 mt-10 cursor-pointer font-dmsans font-bold md:text-lg text-center text-gradient bg-transparent border-2 border-amber-700 rounded-full focus:outline-none flex items-center justify-center md:gap-5 gap-2'>
                                        Get Started
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-lg mb-8">
                                <div className=" w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8 ">
                                    <img src='assets/images/wallet.svg' alt='Wallet' />
                                </div>
                                <h2 className="text-3xl text-dark mb-5 font-rubik font-bold">Switch Wallet For Enterprise</h2>
                                <p className="text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus velit posuere vestibulum, accumsan tincidunt vehicula quam odio.</p>
                                <Link to="#">
                                    <button type='button' className='p-3 md:w-56 w-40 mt-10 cursor-pointer font-dmsans font-bold md:text-lg text-center text-gradient bg-transparent border-2 border-amber-700 rounded-full focus:outline-none flex items-center justify-center md:gap-5 gap-2'>
                                        Get Started
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                            <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-lg mb-8 ">
                                <div className=" w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8 ">
                                    <img src='assets/images/community.svg' alt='Community' />
                                </div>
                                <h2 className="text-3xl text-dark mb-5 font-rubik font-bold">Switch Wallet For Global Brand</h2>
                                <p className="text-zinc-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus velit posuere vestibulum, accumsan tincidunt vehicula quam odio.</p>
                                <Link to="#">
                                    <button type='button' className='p-3 md:w-56 w-40 mt-10 cursor-pointer font-dmsans font-bold md:text-lg text-center text-gradient bg-transparent border-2 border-amber-700 rounded-full focus:outline-none flex items-center justify-center md:gap-5 gap-2'>
                                        Get Started
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='md:my-60 px-10 md:px-0'>
                <img className='absolute right-0 hidden md:block' src="assets/images/Developers6.svg" alt="Developers" />
                <div className="max-w-7xl flex flex-col-reverse items-center mx-auto space-y-0 md:space-y-0 md:flex-row md:py-20">
                    <div className="flex flex-col md:w-1/2">
                        <h1 className="max-w-sm text-3xl font-rubik font-bold md:text-4xl md:text-left md:mt-0 mt-10 mb-10 text-black">Business & Partners that trust Switch Wallet</h1>
                        <p className="max-w-sm md:text-left text-gray-500 font-dmsans text-lg font-bold mb-14">Built for your Business to connect more customer</p>
                        <div className="flex justify-center md:justify-start md:gap-5 gap-2">
                            <img src="assets/images/brands.svg" alt="Brand" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto p-5">
                <div className="rounded-3xl my-20 md:my-32 flex flex-row bg-gradient-plus text-white">
                    <div className="lg:w-3/5 w-full p-12">
                        <div className="lg:w-2/3">
                            <h3 className="font-rubik font-bold mb-10 text-2xl md:text-4xl">A set way to taking your business to the next level</h3>
                            <p className="font-dmsans font-bold mb-4 md:text-lg text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="lg:w-2/5 w-full lg:flex lg:flex-row hidden items-center justify-center">
                        <img src="assets/images/big_logo.svg" alt="big logo" className="h-96 w-full" />
                        <a href="https://stg-integrations.switchwallet.io/auth/register" target="_blank" rel="noopener noreferrer" className='absolute'>
                            <button type='button' className='p-4 bg-white hover:bg-white md:w-56 w-40 rounded-full cursor-pointer'>
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