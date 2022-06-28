import React from 'react';
import Layout from '../components/Layout';

const Startups = () => {
    return (
        <Layout>

            <section>
                <div className="container flex flex-col-reverse items-center px-6 mx-auto space-y-0 md:space-y-0 md:flex-row">
                    <div className="md:w-2/3 flex flex-col">
                        <h1 className="max-w-2xl font-rubik font-bold text-gradient text-2xl md:text-5xl md:text-left md:mt-0 mt-16 mb-10">API suite to build amazing product experiences</h1>
                        <p className="max-w-md md:text-left leading-relaxed text-lg text-gray-600 font-dmsans mb-14">There's never been a faster, easier, or more reliable wallet infrastructure for your business. With SwitchWallet, your customers will have an excellent experience dealing with blockchain transactions.</p>
                        <a href="https://stg-integrations.switchwallet.io/auth/register" target="_blank" rel="noopener noreferrer">
                            <button type='button' className='p-4 md:w-56 w-52 bg-[#2042B8] hover:bg-[#2546bd] rounded-full text-white cursor-pointer font-dmsans font-bold md:text-lg'>Create Account</button>
                        </a>
                    </div>
                    <div className="md:w-1/2 flex items-end justify-end">
                        <img src="assets/images/startup1.png" alt="" className='w-full' />
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row my-10 md:my-40">
                    <div className="flex flex-col w-full lg:w-2/4 p-8 md:order-1 order-2">
                        <h5 className='font-dmsans font-medium text-xl text-slate-700 text-gradient'>Our Features</h5>
                        <h1 className="text-2xl md:text-5xl my-4 leading-relaxed md:leading-snug font-rubik font-bold">Manage all your accounts in one place</h1>
                        <p className="text-lg md:text-lg my-2 md:my-4 font-dmsans font-normal text-slate-500">Organise your business transactions with our bespoke dashboard, designed to meet all your needs in one place.</p>
                    </div>
                    <div className="flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12 md:order-2 order-1">
                        <div className="relative flex flex-col min-w-0 break-words w-full">
                            <div className="flex-auto p-5 lg:p-10 flex justify-center">
                                <img src="assets/images/startup2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
                    <div className="flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12">
                        <div className="relative flex flex-col min-w-0 break-words w-full">
                            <div className="flex-auto p-5 lg:p-10">
                                <img src="assets/images/startup3.png" alt="" className='w-full md:w-4/6' />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full lg:w-2/4 p-8">
                        <h5 className='font-dmsans font-medium text-xl text-slate-700 text-gradient'>Our Features</h5>
                        <p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug font-rubik font-bold">Easy setup and onboarding</p>
                        <p className="text-lg md:text-lg my-2 md:my-4 font-dmsans font-normal text-slate-500">We have a user-friendly platform that enables you to become familiar with our key features quickly. We also have a dedicated team available to assist with any unexpected challenges you may encounter.</p>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 my-20 md:my-40">
                <img className='absolute right-0 hidden md:block' src="assets/images/big_side_logo.svg" alt="Big" />
                <div className="text-center md:pb-20">
                    <p className='font-dmsans font-normal text-lg text-gradient mb-5'>Why SwitchWallet</p>
                    <h1 className="text-3xl md:text2-4xl lg:text-5xl font-rubik font-bold text-gray-900">Why Choose Us</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
                    <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-30 p-8 md:p-10">
                        <div className='p-5 md:block hidden'>
                            <img src='assets/images/startup4.svg' alt='' className='h-10 w-20' />
                        </div>
                        <div className="text-left p-6 md:p-4 space-y-2">
                            <p className="text-2xl text-gray-700 font-manrope font-extrabold">Secure Transactions</p>
                            <p className="text-lg leading-relaxed text-gray-500 font-manrope">End-to-end transaction management in a single solution. Meet the right platform for making secure transactions.</p>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-30 p-8 md:p-10">
                        <div className='p-5 md:block hidden'>
                            <img src='assets/images/startup4.svg' alt='' className='h-10 w-20' />
                        </div>
                        <div className="text-left p-6 md:p-4 space-y-2">
                            <p className="text-2xl text-gray-700 font-manrope font-extrabold">Faster Processing Time</p>
                            <p className="text-lg leading-relaxed text-gray-500 font-manrope">Transactions and orders done with Switch Wallet are processed promptly, so you can maximize your time  and money.</p>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-30 p-8 md:p-10">
                        <div className='p-5 md:block hidden'>
                            <img src='assets/images/startup4.svg' alt='' className='h-10 w-20' />
                        </div>
                        <div className="text-left p-6 md:p-4 space-y-2">
                            <p className="text-2xl text-gray-700 font-manrope font-extrabold">Zero Service Charges</p>
                            <p className="text-lg leading-relaxed text-gray-500 font-manrope">We charge 0% cost for our infrastructure service, with the major cost being the gas fee.</p>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-30 p-8 md:p-10">
                        <div className='p-5 md:block hidden'>
                            <img src='assets/images/startup4.svg' alt='' className='h-10 w-20' />
                        </div>
                        <div className="text-left p-6 md:p-4 space-y-2">
                            <p className="text-2xl text-gray-700 font-manrope font-extrabold">No Hassle with Transactions</p>
                            <p className="text-lg leading-relaxed text-gray-500 font-manrope">We offer our customers hassle-free transactions at no additional charge.</p>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default Startups;