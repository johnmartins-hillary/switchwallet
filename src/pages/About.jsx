import React from 'react';
import Layout from '../components/Layout';

function About() {
    return (
        <Layout>

            <section>
                <div className="max-w-7xl flex flex-col-reverse items-center px-6 mx-auto md:mt-20 mt-10 space-y-0 md:space-y-0 md:flex-row">
                    <div className="flex flex-col md:w-1/2">
                        <h1 className="max-w-md text-3xl font-rubik font-bold text-gray-700 md:text-6xl md:text-left md:mt-0 mt-10 mb-14">About Us</h1>
                        <p className="max-w-lg md:text-left text-gray-500 font-dmsans font-normal text-base md:text-xl mb-14">
                            Switch Wallet is a one-stop destination for wallet payments for cryptocurrency investors, traders, payment providers, and merchants looking for a reliable alternative. For the first time, it's possible to keep all your business funds in one place and access them instantly, at any time and from anywhere.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex items-end justify-end">
                        <img src="assets/images/about1.svg" alt="About" />
                    </div>
                </div>
                <div className='max-w-7xl mx-auto bg-gradient-plus rounded-none md:rounded-3xl px-4 sm:px-6 lg:px-4 md:mt-24'>
                    <div className="p-10 md:p-5">
                        <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
                            <div className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden">
                                <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                    <div className='text-center'>
                                        <h1 className='font-rubik font-bold text-7xl text-white mb-5'>125+</h1>
                                        <h5 className='font-rubik font-light text-2xl text-white'>Start-ups</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden">
                                <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                    <div className='text-center'>
                                        <h1 className='font-rubik font-bold text-7xl text-white mb-5'>2500+ </h1>
                                        <h5 className='font-rubik font-light text-2xl text-white'>Enterprise</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden">
                                <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                    <div className='text-center'>
                                        <h1 className='font-rubik font-bold text-7xl text-white mb-5'>2500+ </h1>
                                        <h5 className='font-rubik font-light text-2xl text-white'>Brands</h5>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>

            <section className="mt-10 md:mt-32 text-dark">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col lg:w-2/5 w-full lg:-mt-12">
                        <div className="relative flex flex-col min-w-0 w-full">
                            <img src="assets/images/about2.svg" alt="About" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:w-3/6 w-full p-8">
                        <h1 className="text-2xl md:text-4xl my-4 font-rubik font-bold">Secure, low-cost International Payment Processing Service </h1>
                        <p className="font-dmsans font-normal text-base md:text-xl my-2 md:my-4 text-slate-500">We are a payment processing service that helps businesses save time and money. With our easy, simple and cost-effective international payment setup, we'll have your business experiencing an increase in sales in no time. Switch Wallet offers competitive rates, fast & secure transactions, and a variety of customizable features to help your business succeed.</p>
                    </div>
                </div>
            </section>

            <section className="py-4 text-dark">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row my-12 md:my-20">
                    <div className="flex flex-col w-full lg:w-2/5 p-8 md:order-1 order-2">
                        <h1 className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug font-rubik font-bold">Our Mission</h1>
                        <p className="font-dmsans font-normal text-base md:text-xl my-2 md:my-4 text-slate-500">To provide customers with the most convenient and seamless payment experience while using digital currencies.</p>
                    </div>
                    <div className="flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12 md:order-2 order-1">
                        <div className="relative flex flex-col min-w-0 break-words w-full">
                            <div className="flex-auto p-5 lg:p-10 flex justify-end">
                                <img src="assets/images/about3.svg" alt="About" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-dark">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
                    <div className="flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12">
                        <div className="container">
                            <div className="relative flex flex-col min-w-0 break-words w-full">
                                <div className="flex-auto p-5 lg:p-10">
                                    <img src="assets/images/about4.svg" alt="About" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full lg:w-2/5 p-8">
                        <h4 className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug font-rubik font-bold">Our Values</h4>
                        <p className="font-dmsans font-normal text-base md:text-xl my-2 md:my-4 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis</p>
                        <div className='mt-5'>
                            <h5 className='font-rubik font-medium text-2xl'>Transparency</h5>
                            <p className="font-dmsans font-normal text-base md:text-xl mt-1 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis</p>
                        </div>
                        <div className='mt-5'>
                            <h5 className='font-rubik font-medium text-2xl'>Communication</h5>
                            <p className="font-dmsans font-normal text-base md:text-xl mt-1 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis</p>
                        </div>
                        <div className='mt-5'>
                            <h5 className='font-rubik font-medium text-2xl'>High Standards</h5>
                            <p className="font-dmsans font-normal text-base md:text-xl mt-1 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center my-10 md:my-32 px-6">
                    <h1 className="font-rubik font-bold text-gradient text-xl md:text-6xl mb-5 md:mb-14">Get Started WIth SwitchWallet</h1>
                    <p className="max-w-lg font-dmsans font-normal text-base md:text-xl text-slate-500 mb-10">With Switch Wallet, you can provide your customers with the most convenient way to pay for their goods and services using digital currencies..</p>
                    <a href="https://stg-integrations.switchwallet.io/auth/register" target="_blank" rel="noopener noreferrer">
                        <button type='button' className='p-4 md:w-56 w-40 bg-[#2042B8] hover:bg-[#2546bd] rounded-full text-white cursor-pointer font-dmsans font-bold md:text-lg'>Create Account</button>
                    </a>
                </div>
            </section>

        </Layout>
    )
}

export default About;