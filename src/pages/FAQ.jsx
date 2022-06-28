import React from 'react';
import GetStarted from '../components/GetStarted';
import Layout from '../components/Layout';

const FAQ = () => {
    return (
        <Layout>

            <section className="max-w-7xl mx-auto bg-white md:py-40 py-10 md:px-0 px-5">
                <h1 className="text-4xl md:text-6xl font-rubik font-bold text-gradient mb-20 text-center">Frequently Asked Questions</h1>
                <div className='row'>
                    <div className="tabs">
                        <div className="mb-8 tab">
                            <div className="border relative rounded-2xl">
                                <input className="w-full absolute z-10 cursor-pointer opacity-0 h-full top-6" type="checkbox" id="chck1" />
                                <header className="flex justify-between items-center p-6 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck1">
                                    <span className="font-dmsans font-medium text-xl text-slate-500">What is Crypto APIs?</span>
                                    <div className="flex items-center justify-center test">
                                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2L8 7.02124L14 2" stroke="url(#paint0_linear_269_596)" stroke-width="2" stroke-miterlimit="10" strokeLinecap="square" />
                                            <defs>
                                                <linearGradient id="paint0_linear_269_596" x1="0.964386" y1="2.0024" x2="3.29926" y2="9.02949" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FF6600" />
                                                    <stop offset="1" stopColor="#2042B8" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                </header>
                                <div className="tab-content">
                                    <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                                        <ul className="pl-4">
                                            <li className="pb-2">Crypto APIs is a blockchain infrastructure layer that radically simplifies the development of blockchain and crypto related applications by providing all needed blockchain APIs. We provide fast, reliable, and unified API solutions to access real-time and historical data from crypto market and blockchain protocols.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-8 tab">
                            <div className="border relative rounded-2xl">
                                <input className="w-full absolute z-10 cursor-pointer opacity-0 h-full top-6" type="checkbox" id="chck2" />
                                <header className="flex justify-between items-center p-6 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck2">
                                    <span className="font-dmsans font-medium text-xl text-slate-500">What products does Crypto APIs offer?</span>
                                    <div className="flex items-center justify-center test">
                                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2L8 7.02124L14 2" stroke="url(#paint0_linear_269_596)" stroke-width="2" stroke-miterlimit="10" strokeLinecap="square" />
                                            <defs>
                                                <linearGradient id="paint0_linear_269_596" x1="0.964386" y1="2.0024" x2="3.29926" y2="9.02949" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FF6600" />
                                                    <stop offset="1" stopColor="#2042B8" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                </header>
                                <div className="tab-content">
                                    <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                                        <ul className="pl-4">
                                            <li className="pb-2">Crypto APIs is a set of blockchain- and crypto-related products which can help you reduce your development and infrastructure costs. It's an infrastructure layer which significantly reduces your go to market time.</li>
                                            <li className="pb-2">- Wallet as a Service - an MPC digital wallet that incorporates the best features, security and authorization processes on the market.</li>
                                            <li className="pb-2">- Blockchain Data - retrieve historical and real-time blockchain data.</li>
                                            <li className="pb-2">- Blockchain Events - get a notification for your subscribed events.</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-8 tab">
                            <div className="border relative rounded-2xl">
                                <input className="w-full absolute z-10 cursor-pointer opacity-0 h-full top-6" type="checkbox" id="chck3" />
                                <header className="flex justify-between items-center p-6 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck3">
                                    <span className="font-dmsans font-medium text-xl text-slate-500">Who are our intended customers?</span>
                                    <div className="flex items-center justify-center test">
                                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2L8 7.02124L14 2" stroke="url(#paint0_linear_269_596)" stroke-width="2" stroke-miterlimit="10" strokeLinecap="square" />
                                            <defs>
                                                <linearGradient id="paint0_linear_269_596" x1="0.964386" y1="2.0024" x2="3.29926" y2="9.02949" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#FF6600" />
                                                    <stop offset="1" stopColor="#2042B8" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                    </div>
                                </header>
                                <div className="tab-content">
                                    <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                                        <ul className="pl-4">
                                            <li className="pb-2">Crypto APIs has designed its blockchain products for any SME, Enterprise or crypto-enthusiast who would be able to gain the most of them. You can check our website to see the crypto and blockchain products that we offer and for any questions, don't hesitate and contact our team.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <GetStarted />

        </Layout>
    )
}

export default FAQ;