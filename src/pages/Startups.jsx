import React from 'react';
import CustomersReview from '../components/CustomersReview';
import Layout from '../components/Layout';

function Startups() {
    return (
        <Layout>

            <section>
                <div className="container flex flex-col-reverse items-center px-6 mx-auto space-y-0 md:space-y-0 md:flex-row">
                    <div className="md:w-2/3 flex flex-col">
                        <h1 className="font-rubik font-bold text-gradient text-2xl md:text-5xl md:text-left md:mt-0 mt-16 mb-10">API suite to build amazing payments experiences</h1>
                        <p className="max-w-md md:text-left leading-relaxed text-lg text-gray-600 font-dmsans mb-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus velit posuere vestibulum.</p>
                        <a href="https://stg-integrations.switchwallet.io/auth/register" target="_blank" rel="noopener noreferrer">
                            <button type='button' className='p-4 md:w-56 w-52 bg-[#2042B8] hover:bg-[#2546bd] rounded-full text-white cursor-pointer font-dmsans font-bold md:text-lg'>Create Account</button>
                        </a>
                    </div>
                    <div className="md:w-1/2 flex items-end justify-end">
                        <img src="assets/images/startup1.svg" alt="startup" className='w-full' />
                    </div>
                </div>
            </section>

            <section className='container mx-auto text-center md:my-28 my-16 md:px-0 px-10'>
                <h5 className='font-rubik font-normal text-xl mb-5'>Over 12k+ business growing with Switchwallet</h5>
                <img className='mx-auto' src="assets/images/brands.svg" alt="Brands" />
            </section>

            <section>
                <div className="container mx-auto flex flex-col md:flex-row my-10 md:my-40">
                    <div className="flex flex-col w-full lg:w-2/4 p-8 md:order-1 order-2">
                        <h5 className='font-dmsans font-medium text-xl text-slate-700 text-gradient'>Our Features</h5>
                        <h1 className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug font-rubik font-bold">Receive payment quickly from anywhere</h1>
                        <p className="text-sm md:text-lg my-2 md:my-4 font-dmsans font-normal text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
                        <p className="text-sm md:text-lg my-2 md:my-4 font-dmsans font-normal text-slate-500">Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per </p>
                    </div>
                    <div className="flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12 md:order-2 order-1">
                        <div className="relative flex flex-col min-w-0 break-words w-full">
                            <div className="flex-auto p-5 lg:p-10 flex justify-center">
                                <img src="assets/images/startup2.svg" alt="Enterpise" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto flex flex-col md:flex-row md:my-40">
                    <div className="flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12">
                        <div className="container">
                            <div className="relative flex flex-col min-w-0 break-words w-full">
                                <div className="flex-auto p-5 lg:p-10">
                                    <img src="assets/images/startup3.svg" alt="Startups" className='w-full md:w-4/6' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full lg:w-2/4 p-8">
                        <h5 className='font-dmsans font-medium text-xl text-slate-700 text-gradient'>Our Features</h5>
                        <p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug font-rubik font-bold">All payments are linked to your financy account</p>
                        <p className="text-sm md:text-lg my-2 md:my-4 font-dmsans font-normal text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. </p>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto flex flex-col md:flex-row mt-40">
                    <div className="flex flex-col w-full lg:w-2/4 p-8 md:order-1 order-2">
                        <h5 className='font-dmsans font-medium text-xl text-slate-700 text-gradient'>Our Features</h5>
                        <h1 className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug font-rubik font-bold">All payments are linked to your financy account</h1>
                        <p className="text-sm md:text-lg my-2 md:my-4 font-dmsans font-normal text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. </p>
                    </div>
                    <div className="flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12 md:order-2 order-1">
                        <div className="relative flex flex-col min-w-0 break-words w-full">
                            <div className="flex-auto p-5 lg:p-10 flex justify-end">
                                <img src="assets/images/Enterpise2.svg" alt="Enterpise" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 my-20 md:my-40">
                <img className='absolute right-0 hidden md:block' src="assets/images/big_side_logo.svg" alt="Big" />
                <div className="text-center pb-20">
                    <p className='font-dmsans font-medium text-gradient mb-5'>Why SwitchWallet</p>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-rubik font-bold text-gray-900">Why Choose Us</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
                    <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-50 items-center">
                        <div className="w-full md:w-2/5 h-52 p-5">
                            <img className="object-center object-cover w-full h-full rounded-2xl" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />
                        </div>
                        <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                            <p className="text-xl text-gray-700 font-rubik font-bold">No Hidden Charges</p>
                            <p className="text-base leading-relaxed text-gray-500 font-dmsans">End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-50 items-center">
                        <div className="w-full md:w-2/5 h-52 p-5">
                            <img className="object-center object-cover w-full h-full rounded-2xl" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />
                        </div>
                        <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                            <p className="text-xl text-gray-700 font-rubik font-bold">No Extra Fee</p>
                            <p className="text-base leading-relaxed text-gray-500 font-dmsans">End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-50 items-center">
                        <div className="w-full md:w-2/5 h-52 p-5">
                            <img className="object-center object-cover w-full h-full rounded-2xl" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />
                        </div>
                        <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                            <p className="text-xl text-gray-700 font-rubik font-bold">No Extra Fee</p>
                            <p className="text-base leading-relaxed text-gray-500 font-dmsans">End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-50 items-center">
                        <div className="w-full md:w-2/5 h-52 p-5">
                            <img className="object-center object-cover w-full h-full rounded-2xl" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />
                        </div>
                        <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                            <p className="text-xl text-gray-700 font-rubik font-bold">No Extra Fee</p>
                            <p className="text-base leading-relaxed text-gray-500 font-dmsans">End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                        </div>
                    </div>
                </div>
            </section>

            <CustomersReview />

        </Layout>
    )
}

export default Startups;