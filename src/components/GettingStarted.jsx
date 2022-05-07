import React from 'react';
import { Link } from 'react-router-dom';

function GettingStarted() {
    return (
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
                            <Link to="/register">
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
                            <Link to="/register">
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
                            <Link to="/register">
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
    )
}

export default GettingStarted;