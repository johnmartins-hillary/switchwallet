import React from 'react';
import Layout from '../components/Layout';
import MindBlowing from '../components/MindBlowing';

const Developers = () => {
    return (
        <Layout>

            <section>
                <div className="container flex flex-col-reverse items-center px-6 mx-auto space-y-0 md:space-y-0 md:flex-row">
                    <div className="md:w-2/3 flex flex-col">
                        <h1 className="font-rubik font-bold text-gradient text-2xl md:text-5xl md:text-left md:mt-0 mb-10">API suite to build amazing payments experiences</h1>
                        <p className="max-w-md md:text-left leading-relaxed text-lg text-gray-600 font-dmsans mb-14">There's never been a faster, easier, more reliable wallet infrastructure service for your business. SwitchWallet provides excellent customer experiences when dealing with digital payments.</p>
                        <a href="/register" target="_blank" rel="noopener noreferrer">
                            <button type='button' className='p-4 md:w-56 w-52 bg-[#2042B8] hover:bg-[#2546bd] rounded-full text-white cursor-pointer font-dmsans font-bold md:text-lg'>Create Account</button>
                        </a>
                    </div>
                    <div className="md:w-1/2 flex items-end justify-end">
                        <img src="assets/images/developers1.svg" alt="Developers" />
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-7xl px-5 py-24 mx-auto max-w-7x1">
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="bg-white p-0 md:p-6 rounded-lg">
                                <img className="lg:h-60 xl:h-72 md:h-64 sm:h-60 xs:h-60 h-60 rounded-xl w-full object-cover object-center mb-10" src="assets/images/summary.svg" alt="Summary" />
                                <h2 className="text-3xl text-gray-900 font-rubik font-medium mb-4">Quick Summary</h2>
                                <p className="leading-relaxed text-lg text-gray-600 font-dmsans">End-to-end wallet infrastructure service and financial management in a single solution. Meet the right platform.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="bg-white p-0 md:p-6 rounded-lg">
                                <img className="lg:h-60 xl:h-72 md:h-64 sm:h-60 xs:h-60 h-60 rounded-xl w-full object-cover object-center mb-10" src="assets/images/manage.svg" alt="Manage" />
                                <h2 className="text-3xl text-gray-900 font-rubik font-medium mb-4">Manage your Wallet</h2>
                                <p className="leading-relaxed text-lg text-gray-600 font-dmsans">End-to-end wallet infrastructure service and financial management in a single solution. Meet the right platform.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="bg-white p-0 md:p-6 rounded-lg">
                                <img className="lg:h-60 xl:h-72 md:h-64 sm:h-60 xs:h-60 h-60 rounded-xl w-full object-cover object-center mb-10" src="assets/images/receive.svg" alt="Receive" />
                                <h2 className="text-3xl text-gray-900 font-rubik font-medium mb-4">Receive Payment</h2>
                                <p className="leading-relaxed text-lg text-gray-600 font-dmsans">End-to-end wallet infrastructure service and financial management in a single solution. Meet the right platform.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="max-w-7xl flex flex-col-reverse items-center px-6 mx-auto space-y-0 md:space-y-0 md:flex-row md:mt-10">
                    <div className="md:w-2/3 flex flex-col">
                        <h5 className='font-dmsans font-medium text-xl mb-5 text-slate-700 my-10'>Our Features</h5>
                        <h1 className="font-rubik font-bold text-slate-700 text-2xl md:text-5xl md:text-left md:mt-0 mb-10">Receive payment <br /> quickly from anywhere</h1>
                        <p className="md:w-2/3 md:text-left leading-relaxed text-lg text-gray-600 font-dmsans">Switch Wallet is the one of the fastest Bitcoin and blockchain wallet infrastructure service on the market with a Global footprint. You are assured your customers can pay  and receive payments quickly, conveniently and securely with either cryptocurrency or via bank transfer. We're your new choice for a payment gateway provider.</p>
                    </div>
                    <div className="md:w-1/2 flex items-end justify-end">
                        <img className='w-full' src="assets/images/developers2.svg" alt="Developers" />
                    </div>
                </div>
            </section>

            <MindBlowing />

            <section>
                <div className="max-w-7xl flex flex-col-reverse items-center px-6 mx-auto space-y-0 md:space-y-0 md:flex-row md:my-10">
                    <div className="md:w-2/3 flex flex-col">
                        <h5 className='font-dmsans font-medium text-xl mb-5 text-slate-700 my-10'>Our Features</h5>
                        <h1 className="font-rubik font-bold text-slate-700 text-2xl md:text-5xl md:text-left md:mt-0 mb-10">Manage all expenses & <br /> income from your <br /> dashboard</h1>
                        <p className="md:w-2/3 md:text-left leading-relaxed text-lg text-gray-600 font-dmsans mb-14">Setting up with us is fast and easy. We have a bespoke dashboard to help you monitor all your sell or buy orders. This empowers you to see all your transactions at a glance.</p>
                    </div>
                    <div className="md:w-1/2 flex items-end justify-end">
                        <img className='w-full' src="assets/images/developers3.svg" alt="Developers" />
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default Developers;