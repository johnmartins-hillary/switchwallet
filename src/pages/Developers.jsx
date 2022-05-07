import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

function Developers() {
    return (
        <Layout>

            <section>
                <div className="max-w-7xl flex flex-col-reverse items-center px-6 mx-auto space-y-0 md:space-y-0 md:flex-row">
                    <div className="md:w-2/3 flex flex-col">
                        <h1 className="font-rubik font-bold text-gradient text-2xl md:text-5xl md:text-left md:mt-0 mb-10">API suite to build amazing payments experiences</h1>
                        <p className="max-w-md md:text-left leading-relaxed text-lg text-gray-600 font-dmsans mb-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus velit posuere vestibulum.</p>
                        <Link to="/register">
                            <button type='button' className='p-4 md:w-56 w-52 bg-[#2042B8] hover:bg-[#2546bd] rounded-full text-white cursor-pointer font-dmsans font-bold md:text-lg'>Create Account</button>
                        </Link>
                    </div>
                    <div className="md:w-1/2 flex items-end justify-end">
                        <img src="assets/images/developers.svg" alt="Developers" />
                    </div>
                </div>
            </section>

            <section>
                <div className="container px-5 py-24 mx-auto max-w-7x1">
                    <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="bg-white p-0 md:p-6 rounded-lg">
                                <img className="lg:h-60 xl:h-72 md:h-64 sm:h-60 xs:h-60 h-60 rounded-xl w-full object-cover object-center mb-10" src="assets/images/summary.svg" alt="Summary" />
                                <h2 className="text-3xl text-gray-900 font-rubik font-medium mb-4">Quick Summary</h2>
                                <p className="leading-relaxed text-lg text-gray-600 font-dmsans">End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="bg-white p-0 md:p-6 rounded-lg">
                                <img className="lg:h-60 xl:h-72 md:h-64 sm:h-60 xs:h-60 h-60 rounded-xl w-full object-cover object-center mb-10" src="assets/images/manage.svg" alt="Manage" />
                                <h2 className="text-3xl text-gray-900 font-rubik font-medium mb-4">Manage your Wallet</h2>
                                <p className="leading-relaxed text-lg text-gray-600 font-dmsans">End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="bg-white p-0 md:p-6 rounded-lg">
                                <img className="lg:h-60 xl:h-72 md:h-64 sm:h-60 xs:h-60 h-60 rounded-xl w-full object-cover object-center mb-10" src="assets/images/receive.svg" alt="Receive" />
                                <h2 className="text-3xl text-gray-900 font-rubik font-medium mb-4">Receive Payment</h2>
                                <p className="leading-relaxed text-lg text-gray-600 font-dmsans">End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container flex flex-col-reverse items-center px-6 mx-auto space-y-0 md:space-y-0 md:flex-row md:my-44">
                    <div className="md:w-2/3 flex flex-col">
                        <h5 className='font-dmsans font-medium text-xl mb-5 text-slate-700 my-10'>Our Features</h5>
                        <h1 className="font-rubik font-bold text-slate-700 text-2xl md:text-5xl md:text-left md:mt-0 mb-10">Receive payment <br /> quickly from anywhere</h1>
                        <p className="md:w-2/3 md:text-left leading-relaxed text-lg text-gray-600 font-dmsans mb-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.ra.</p>
                    </div>
                    <div className="md:w-1/2 flex items-end justify-end">
                        <img className='w-full' src="assets/images/pay.svg" alt="Developers" />
                    </div>
                </div>
            </section>

            <section className='my-20 md:my-60'>
                <img className='absolute right-0 hidden md:block' src="assets/images/biggest_logo.svg" alt="Biggest Logo" />
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="font-rubik font-bold text-slate-700 text-2xl md:text-5xl md:text-left dark:text-white">Mind blowing Features</h1>
                    <p className="md:w-1/2 md:text-left mt-4 xl:mt-6 dark:text-gray-300 leading-relaxed text-lg text-gray-600 font-dmsans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus velit posuere vestibulum, accumsan tincidunt vehicula quam odio.</p>
                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                        <div className="p-8 border bg-white z-50">
                            <span className="inline-block text-blue-500 dark:text-blue-400">
                                <svg width="50" height="45" viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="15" width="50" height="30" fill="#FF6600" />
                                    <rect width="39" height="10" fill="#2042B8" />
                                </svg>
                            </span>
                            <h1 className="font-rubik font-medium text-3xl mb-10 mt-6 text-gray-700">Connect wallets & companies</h1>
                            <p className="dark:text-gray-300 leading-relaxed text-lg text-gray-600 font-dmsans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet</p>
                        </div>
                        <div className="p-8 border bg-white z-50">
                            <span className="inline-block text-blue-500 dark:text-blue-400">
                                <svg width="50" height="45" viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="15" width="50" height="30" fill="#2042B8" />
                                    <rect width="39" height="10" fill="#FF6600" />
                                </svg>
                            </span>
                            <h1 className="font-rubik font-medium text-3xl mb-10 mt-6 text-gray-700">Connect wallets & companies</h1>
                            <p className="dark:text-gray-300 leading-relaxed text-lg text-gray-600 font-dmsans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet</p>
                        </div>
                        <div className="grid grid-cols-1 gap-8">
                            <div className="p-8 border bg-white z-50">
                                <h1 className="font-rubik font-medium text-3xl mb-10 text-gray-700">Merits behind on afraid or warmly</h1>
                            </div>
                            <div className="p-8 border bg-white z-50">
                                <h1 className="font-rubik font-medium text-3xl mb-10 text-gray-700">Merits behind on afraid or warmly</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container flex flex-col-reverse items-center px-6 mx-auto space-y-0 md:space-y-0 md:flex-row md:my-44">
                    <div className="md:w-2/3 flex flex-col">
                        <h5 className='font-dmsans font-medium text-xl mb-5 text-slate-700 my-10'>Our Features</h5>
                        <h1 className="font-rubik font-bold text-slate-700 text-2xl md:text-5xl md:text-left md:mt-0 mb-10">Manage all expenses & <br /> income from your <br /> dashboard</h1>
                        <p className="md:w-2/3 md:text-left leading-relaxed text-lg text-gray-600 font-dmsans mb-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.ra.</p>
                    </div>
                    <div className="md:w-1/2 flex items-end justify-end">
                        <img className='w-full' src="assets/images/activities.svg" alt="Activities" />
                    </div>
                </div>
            </section>

            <div className="flex items-center justify-center md:my-40 my-10">
                <div className="w-full container mx-auto">
                    <div className="text-center max-w-2xl mx-auto">
                        <h1 className="font-rubik font-bold text-6xl md:text-5xl mb-5 text-black">Customers Review</h1>
                        <h3 className="font-dmsans md:text-lg leading-relaxed text-gray-600 dark:text-gray-300 mt-10 mb-10 md:mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus velit posuere vestibulum, accumsan tincidunt vehicula quam odio.</h3>
                    </div>
                    <div className="md:flex items-start">
                        <div className="px-3 md:w-1/3">
                            <div className="w-full mx-auto rounded-2xl bg-white shadow-lg p-5 text-gray-800 font-light mb-6">
                                <div className="w-full flex items-center">
                                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 0C8.9543 0 0 9.17236 0 20.4871C0 31.8018 8.9543 40.9741 20 40.9741C31.0457 40.9741 40 31.8018 40 20.4871C40 9.17236 31.0457 0 20 0ZM18.4692 9.64333L19.3286 13.6973C16.8106 14.2682 14.4951 15.0108 14.6826 17.8912H17.6416V28.6799H8.72803V18.5964C8.7312 10.5829 14.4747 9.93086 18.4692 9.64333ZM30.4102 9.64333L31.272 13.6973C28.7539 14.2682 26.4385 15.0108 26.626 17.8912H29.585V28.6799H20.6714V18.5964C20.6745 10.5829 26.4157 9.93086 30.4102 9.64333Z" fill="#2042B8" />
                                    </svg>
                                </div>
                                <div className="w-full mb-4">
                                    <p className="font-dmsans text-lg text-gray-600 mb-5 mt-4 xl:mt-6 dark:text-gray-300 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                                <div className="w-full flex items-center">
                                    <div className="overflow-hidden rounded-full w-20 h-20 bg-gray-50 border border-gray-200">
                                        <img src="https://i.pravatar.cc/100?img=1" alt="" />
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-rubik font-medium text-lg text-black">-Mike Grayson, CEO</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-3 md:w-1/3">
                            <div className="w-full mx-auto rounded-2xl bg-white shadow-lg p-5 text-gray-800 font-light mb-6">
                                <div className="w-full flex items-center">
                                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 0C8.9543 0 0 9.17236 0 20.4871C0 31.8018 8.9543 40.9741 20 40.9741C31.0457 40.9741 40 31.8018 40 20.4871C40 9.17236 31.0457 0 20 0ZM18.4692 9.64333L19.3286 13.6973C16.8106 14.2682 14.4951 15.0108 14.6826 17.8912H17.6416V28.6799H8.72803V18.5964C8.7312 10.5829 14.4747 9.93086 18.4692 9.64333ZM30.4102 9.64333L31.272 13.6973C28.7539 14.2682 26.4385 15.0108 26.626 17.8912H29.585V28.6799H20.6714V18.5964C20.6745 10.5829 26.4157 9.93086 30.4102 9.64333Z" fill="#2042B8" />
                                    </svg>
                                </div>
                                <div className="w-full mb-4">
                                    <p className="font-dmsans text-lg text-gray-600 mb-5 mt-4 xl:mt-6 dark:text-gray-300 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                                <div className="w-full flex items-center">
                                    <div className="overflow-hidden rounded-full w-20 h-20 bg-gray-50 border border-gray-200">
                                        <img src="https://i.pravatar.cc/100?img=1" alt="" />
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-rubik font-medium text-lg text-black">-Mike Grayson, CEO</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-3 md:w-1/3">
                            <div className="w-full mx-auto rounded-2xl bg-white shadow-lg p-5 text-gray-800 font-light mb-6">
                                <div className="w-full flex items-center">
                                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 0C8.9543 0 0 9.17236 0 20.4871C0 31.8018 8.9543 40.9741 20 40.9741C31.0457 40.9741 40 31.8018 40 20.4871C40 9.17236 31.0457 0 20 0ZM18.4692 9.64333L19.3286 13.6973C16.8106 14.2682 14.4951 15.0108 14.6826 17.8912H17.6416V28.6799H8.72803V18.5964C8.7312 10.5829 14.4747 9.93086 18.4692 9.64333ZM30.4102 9.64333L31.272 13.6973C28.7539 14.2682 26.4385 15.0108 26.626 17.8912H29.585V28.6799H20.6714V18.5964C20.6745 10.5829 26.4157 9.93086 30.4102 9.64333Z" fill="#2042B8" />
                                    </svg>
                                </div>
                                <div className="w-full mb-4">
                                    <p className="font-dmsans text-lg text-gray-600 mb-5 mt-4 xl:mt-6 dark:text-gray-300 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt ratione dolor exercitationem minima quas itaque saepe quasi architecto vel! Accusantium, vero sint recusandae cum tempora nemo commodi soluta deleniti.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                                <div className="w-full flex items-center">
                                    <div className="overflow-hidden rounded-full w-20 h-20 bg-gray-50 border border-gray-200">
                                        <img src="https://i.pravatar.cc/100?img=1" alt="" />
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-rubik font-medium text-lg text-black">-Mike Grayson, CEO</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Developers;