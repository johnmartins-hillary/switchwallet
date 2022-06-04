import React from 'react';
import Layout from '../components/Layout';
// import CustomersReview from '../components/CustomersReview';

function Startups() {
    return (
        <Layout>

            <section>
                <div className="container flex flex-col-reverse items-center px-6 mx-auto space-y-0 md:space-y-0 md:flex-row">
                    <div className="md:w-2/3 flex flex-col">
                        <h1 className="font-rubik font-bold text-gradient text-2xl md:text-5xl md:text-left md:mt-0 mt-16 mb-10">API suite to build amazing payments experiences</h1>
                        <p className="max-w-md md:text-left leading-relaxed text-lg text-gray-600 font-dmsans mb-14">There's never been a faster, easier, or more reliable wallet infrastructure for your business. With SwitchWallet, your customers will have an excellent experience dealing with blockchain transactions.</p>
                        <a href="https://stg-integrations.switchwallet.io/auth/register" target="_blank" rel="noopener noreferrer">
                            <button type='button' className='p-4 md:w-56 w-52 bg-[#2042B8] hover:bg-[#2546bd] rounded-full text-white cursor-pointer font-dmsans font-bold md:text-lg'>Create Account</button>
                        </a>
                    </div>
                    <div className="md:w-1/2 flex items-end justify-end">
                        <img src="assets/images/startup1.svg" alt="startup" className='w-full' />
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
                                <img src="assets/images/startup2.svg" alt="Enterpise" />
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
                                <img src="assets/images/startup3.svg" alt="Startups" className='w-full md:w-4/6' />
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
                            <svg width="49" height="56" viewBox="0 0 49 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.5384 19.3779H17.8917V16.7051H19.185C19.3565 16.7051 19.521 16.7755 19.6422 16.9008C19.7635 17.0261 19.8316 17.1961 19.8316 17.3733C19.8316 17.5505 19.8998 17.7205 20.021 17.8458C20.1423 17.9711 20.3068 18.0415 20.4783 18.0415C20.6498 18.0415 20.8143 17.9711 20.9355 17.8458C21.0568 17.7205 21.1249 17.5505 21.1249 17.3733C21.1249 16.8416 20.9205 16.3318 20.5567 15.9558C20.1929 15.5799 19.6995 15.3687 19.185 15.3687H17.8917V14.0323C17.8917 13.8551 17.8236 13.6851 17.7023 13.5598C17.5811 13.4345 17.4166 13.3641 17.2451 13.3641C17.0736 13.3641 16.9091 13.4345 16.7878 13.5598C16.6666 13.6851 16.5984 13.8551 16.5984 14.0323V15.3687H15.9518C15.2658 15.3687 14.6079 15.6503 14.1228 16.1515C13.6377 16.6528 13.3652 17.3326 13.3652 18.0415C13.3652 18.7503 13.6377 19.4302 14.1228 19.9314C14.6079 20.4327 15.2658 20.7143 15.9518 20.7143H16.5984V23.387H15.3052C15.1337 23.387 14.9692 23.3166 14.8479 23.1913C14.7266 23.066 14.6585 22.8961 14.6585 22.7188C14.6585 22.5416 14.5904 22.3717 14.4691 22.2464C14.3479 22.121 14.1834 22.0506 14.0119 22.0506C13.8404 22.0506 13.6759 22.121 13.5546 22.2464C13.4334 22.3717 13.3652 22.5416 13.3652 22.7188C13.3652 23.2505 13.5696 23.7604 13.9334 24.1363C14.2972 24.5122 14.7907 24.7234 15.3052 24.7234H16.5984V26.0598C16.5984 26.237 16.6666 26.407 16.7878 26.5323C16.9091 26.6576 17.0736 26.728 17.2451 26.728C17.4166 26.728 17.5811 26.6576 17.7023 26.5323C17.8236 26.407 17.8917 26.237 17.8917 26.0598V24.7234H18.5384C19.2244 24.7234 19.8823 24.4418 20.3673 23.9406C20.8524 23.4393 21.1249 22.7595 21.1249 22.0506C21.1249 21.3418 20.8524 20.6619 20.3673 20.1607C19.8823 19.6595 19.2244 19.3779 18.5384 19.3779V19.3779ZM16.5984 19.3779H15.9518C15.6088 19.3779 15.2798 19.2371 15.0373 18.9864C14.7948 18.7358 14.6585 18.3959 14.6585 18.0415C14.6585 17.687 14.7948 17.3471 15.0373 17.0965C15.2798 16.8459 15.6088 16.7051 15.9518 16.7051H16.5984V19.3779ZM18.5384 23.387H17.8917V20.7143H18.5384C18.8814 20.7143 19.2103 20.8551 19.4528 21.1057C19.6954 21.3563 19.8316 21.6962 19.8316 22.0506C19.8316 22.4051 19.6954 22.745 19.4528 22.9956C19.2103 23.2462 18.8814 23.387 18.5384 23.387Z" fill="url(#paint0_linear_299_342)" />
                                <circle cx="17.0282" cy="17.0282" r="16.5282" stroke="url(#paint1_linear_299_342)" />
                                <path d="M23.9248 31.4701L37.2887 53.887C46.1338 56.6145 48.0141 54.467 47.4194 45.9118L33.4089 31.4701" stroke="url(#paint2_linear_299_342)" />
                                <path d="M19.1861 11.6396C22.3894 8.36119 23.6711 6.75505 22.6348 5.38876H10.1331C10.2648 8.741 11.9095 9.58604 14.0129 11.6396M19.1861 11.6396H14.0129M19.1861 11.6396C23.7754 15.3307 25.6032 17.7825 24.5747 24.3569C19.138 29.7759 15.9702 29.9806 10.1331 24.3569C9.00669 19.8437 10.0306 17.0283 14.0129 11.6396" stroke="url(#paint3_linear_299_342)" />
                                <circle cx="31.6861" cy="22.6327" r="8.83743" fill="white" />
                                <path d="M32.1186 13.3641C26.7145 13.3641 22.4189 17.6596 22.4189 23.0637C22.4189 28.4678 26.7145 32.7633 32.1186 32.7633C37.5226 32.7633 41.8182 28.4678 41.8182 23.0637C41.8182 17.6596 37.5226 13.3641 32.1186 13.3641ZM32.1186 31.3777C27.5459 31.3777 23.8046 27.6364 23.8046 23.0637C23.8046 18.491 27.5459 14.7498 32.1186 14.7498C36.6912 14.7498 40.4325 18.491 40.4325 23.0637C40.4325 27.6364 36.6912 31.3777 32.1186 31.3777Z" fill="url(#paint4_linear_299_342)" />
                                <path d="M35.6092 27.5901L32.1173 24.0982L28.6254 27.5901L27.5908 26.5555L31.0827 23.0636L27.5908 19.5717L28.6254 18.5371L32.1173 22.029L35.6092 18.5371L36.6438 19.5717L33.1519 23.0636L36.6438 26.5555L35.6092 27.5901Z" fill="url(#paint5_linear_299_342)" />
                                <defs>
                                    <linearGradient id="paint0_linear_299_342" x1="12.6956" y1="13.3705" x2="22.5904" y2="20.6059" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6600" />
                                        <stop offset="1" stop-color="#2042B8" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_299_342" x1="-2.93911" y1="0.0162496" x2="22.8341" y2="32.4734" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6600" />
                                        <stop offset="1" stop-color="#2042B8" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_299_342" x1="21.8885" y1="31.4814" x2="39.6843" y2="53.9542" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6600" />
                                        <stop offset="1" stop-color="#2042B8" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_299_342" x1="8.39673" y1="5.39979" x2="26.0275" y2="19.9545" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6600" />
                                        <stop offset="1" stop-color="#2042B8" />
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_299_342" x1="20.7448" y1="13.3734" x2="35.4257" y2="31.8616" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6600" />
                                        <stop offset="1" stop-color="#2042B8" />
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_299_342" x1="26.8095" y1="18.5414" x2="33.6607" y2="27.1693" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6600" />
                                        <stop offset="1" stop-color="#2042B8" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="text-left p-6 md:p-4 space-y-2">
                            <p className="text-2xl text-gray-700 font-manrope font-extrabold">Secure Transactions</p>
                            <p className="text-lg leading-relaxed text-gray-500 font-manrope">End-to-end transaction management in a single solution. Meet the right platform for making secure transactions.</p>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-30 p-8 md:p-10">
                        <div className='p-5 md:block hidden'>
                            <svg width="49" height="56" viewBox="0 0 49 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.5384 19.3779H17.8917V16.7051H19.185C19.3565 16.7051 19.521 16.7755 19.6422 16.9008C19.7635 17.0261 19.8316 17.1961 19.8316 17.3733C19.8316 17.5505 19.8998 17.7205 20.021 17.8458C20.1423 17.9711 20.3068 18.0415 20.4783 18.0415C20.6498 18.0415 20.8143 17.9711 20.9355 17.8458C21.0568 17.7205 21.1249 17.5505 21.1249 17.3733C21.1249 16.8416 20.9205 16.3318 20.5567 15.9558C20.1929 15.5799 19.6995 15.3687 19.185 15.3687H17.8917V14.0323C17.8917 13.8551 17.8236 13.6851 17.7023 13.5598C17.5811 13.4345 17.4166 13.3641 17.2451 13.3641C17.0736 13.3641 16.9091 13.4345 16.7878 13.5598C16.6666 13.6851 16.5984 13.8551 16.5984 14.0323V15.3687H15.9518C15.2658 15.3687 14.6079 15.6503 14.1228 16.1515C13.6377 16.6528 13.3652 17.3326 13.3652 18.0415C13.3652 18.7503 13.6377 19.4302 14.1228 19.9314C14.6079 20.4327 15.2658 20.7143 15.9518 20.7143H16.5984V23.387H15.3052C15.1337 23.387 14.9692 23.3166 14.8479 23.1913C14.7266 23.066 14.6585 22.8961 14.6585 22.7188C14.6585 22.5416 14.5904 22.3717 14.4691 22.2464C14.3479 22.121 14.1834 22.0506 14.0119 22.0506C13.8404 22.0506 13.6759 22.121 13.5546 22.2464C13.4334 22.3717 13.3652 22.5416 13.3652 22.7188C13.3652 23.2505 13.5696 23.7604 13.9334 24.1363C14.2972 24.5122 14.7907 24.7234 15.3052 24.7234H16.5984V26.0598C16.5984 26.237 16.6666 26.407 16.7878 26.5323C16.9091 26.6576 17.0736 26.728 17.2451 26.728C17.4166 26.728 17.5811 26.6576 17.7023 26.5323C17.8236 26.407 17.8917 26.237 17.8917 26.0598V24.7234H18.5384C19.2244 24.7234 19.8823 24.4418 20.3673 23.9406C20.8524 23.4393 21.1249 22.7595 21.1249 22.0506C21.1249 21.3418 20.8524 20.6619 20.3673 20.1607C19.8823 19.6595 19.2244 19.3779 18.5384 19.3779V19.3779ZM16.5984 19.3779H15.9518C15.6088 19.3779 15.2798 19.2371 15.0373 18.9864C14.7948 18.7358 14.6585 18.3959 14.6585 18.0415C14.6585 17.687 14.7948 17.3471 15.0373 17.0965C15.2798 16.8459 15.6088 16.7051 15.9518 16.7051H16.5984V19.3779ZM18.5384 23.387H17.8917V20.7143H18.5384C18.8814 20.7143 19.2103 20.8551 19.4528 21.1057C19.6954 21.3563 19.8316 21.6962 19.8316 22.0506C19.8316 22.4051 19.6954 22.745 19.4528 22.9956C19.2103 23.2462 18.8814 23.387 18.5384 23.387Z" fill="url(#paint0_linear_299_342)" />
                                <circle cx="17.0282" cy="17.0282" r="16.5282" stroke="url(#paint1_linear_299_342)" />
                                <path d="M23.9248 31.4701L37.2887 53.887C46.1338 56.6145 48.0141 54.467 47.4194 45.9118L33.4089 31.4701" stroke="url(#paint2_linear_299_342)" />
                                <path d="M19.1861 11.6396C22.3894 8.36119 23.6711 6.75505 22.6348 5.38876H10.1331C10.2648 8.741 11.9095 9.58604 14.0129 11.6396M19.1861 11.6396H14.0129M19.1861 11.6396C23.7754 15.3307 25.6032 17.7825 24.5747 24.3569C19.138 29.7759 15.9702 29.9806 10.1331 24.3569C9.00669 19.8437 10.0306 17.0283 14.0129 11.6396" stroke="url(#paint3_linear_299_342)" />
                                <circle cx="31.6861" cy="22.6327" r="8.83743" fill="white" />
                                <path d="M32.1186 13.3641C26.7145 13.3641 22.4189 17.6596 22.4189 23.0637C22.4189 28.4678 26.7145 32.7633 32.1186 32.7633C37.5226 32.7633 41.8182 28.4678 41.8182 23.0637C41.8182 17.6596 37.5226 13.3641 32.1186 13.3641ZM32.1186 31.3777C27.5459 31.3777 23.8046 27.6364 23.8046 23.0637C23.8046 18.491 27.5459 14.7498 32.1186 14.7498C36.6912 14.7498 40.4325 18.491 40.4325 23.0637C40.4325 27.6364 36.6912 31.3777 32.1186 31.3777Z" fill="url(#paint4_linear_299_342)" />
                                <path d="M35.6092 27.5901L32.1173 24.0982L28.6254 27.5901L27.5908 26.5555L31.0827 23.0636L27.5908 19.5717L28.6254 18.5371L32.1173 22.029L35.6092 18.5371L36.6438 19.5717L33.1519 23.0636L36.6438 26.5555L35.6092 27.5901Z" fill="url(#paint5_linear_299_342)" />
                                <defs>
                                    <linearGradient id="paint0_linear_299_342" x1="12.6956" y1="13.3705" x2="22.5904" y2="20.6059" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6600" />
                                        <stop offset="1" stop-color="#2042B8" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_299_342" x1="-2.93911" y1="0.0162496" x2="22.8341" y2="32.4734" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6600" />
                                        <stop offset="1" stop-color="#2042B8" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_299_342" x1="21.8885" y1="31.4814" x2="39.6843" y2="53.9542" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6600" />
                                        <stop offset="1" stop-color="#2042B8" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_299_342" x1="8.39673" y1="5.39979" x2="26.0275" y2="19.9545" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6600" />
                                        <stop offset="1" stop-color="#2042B8" />
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_299_342" x1="20.7448" y1="13.3734" x2="35.4257" y2="31.8616" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6600" />
                                        <stop offset="1" stop-color="#2042B8" />
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_299_342" x1="26.8095" y1="18.5414" x2="33.6607" y2="27.1693" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6600" />
                                        <stop offset="1" stop-color="#2042B8" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="text-left p-6 md:p-4 space-y-2">
                            <p className="text-2xl text-gray-700 font-manrope font-extrabold">Faster Processing Time</p>
                            <p className="text-lg leading-relaxed text-gray-500 font-manrope">Transactions and orders done with Switch Wallet are processed promptly, so you can maximize your time  and money.</p>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-30 p-8 md:p-10">
                        <div className='p-5 md:block hidden'>
                            <svg width="49" height="56" viewBox="0 0 49 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.5384 19.3779H17.8917V16.7051H19.185C19.3565 16.7051 19.521 16.7755 19.6422 16.9008C19.7635 17.0261 19.8316 17.1961 19.8316 17.3733C19.8316 17.5505 19.8998 17.7205 20.021 17.8458C20.1423 17.9711 20.3068 18.0415 20.4783 18.0415C20.6498 18.0415 20.8143 17.9711 20.9355 17.8458C21.0568 17.7205 21.1249 17.5505 21.1249 17.3733C21.1249 16.8416 20.9205 16.3318 20.5567 15.9558C20.1929 15.5799 19.6995 15.3687 19.185 15.3687H17.8917V14.0323C17.8917 13.8551 17.8236 13.6851 17.7023 13.5598C17.5811 13.4345 17.4166 13.3641 17.2451 13.3641C17.0736 13.3641 16.9091 13.4345 16.7878 13.5598C16.6666 13.6851 16.5984 13.8551 16.5984 14.0323V15.3687H15.9518C15.2658 15.3687 14.6079 15.6503 14.1228 16.1515C13.6377 16.6528 13.3652 17.3326 13.3652 18.0415C13.3652 18.7503 13.6377 19.4302 14.1228 19.9314C14.6079 20.4327 15.2658 20.7143 15.9518 20.7143H16.5984V23.387H15.3052C15.1337 23.387 14.9692 23.3166 14.8479 23.1913C14.7266 23.066 14.6585 22.8961 14.6585 22.7188C14.6585 22.5416 14.5904 22.3717 14.4691 22.2464C14.3479 22.121 14.1834 22.0506 14.0119 22.0506C13.8404 22.0506 13.6759 22.121 13.5546 22.2464C13.4334 22.3717 13.3652 22.5416 13.3652 22.7188C13.3652 23.2505 13.5696 23.7604 13.9334 24.1363C14.2972 24.5122 14.7907 24.7234 15.3052 24.7234H16.5984V26.0598C16.5984 26.237 16.6666 26.407 16.7878 26.5323C16.9091 26.6576 17.0736 26.728 17.2451 26.728C17.4166 26.728 17.5811 26.6576 17.7023 26.5323C17.8236 26.407 17.8917 26.237 17.8917 26.0598V24.7234H18.5384C19.2244 24.7234 19.8823 24.4418 20.3673 23.9406C20.8524 23.4393 21.1249 22.7595 21.1249 22.0506C21.1249 21.3418 20.8524 20.6619 20.3673 20.1607C19.8823 19.6595 19.2244 19.3779 18.5384 19.3779V19.3779ZM16.5984 19.3779H15.9518C15.6088 19.3779 15.2798 19.2371 15.0373 18.9864C14.7948 18.7358 14.6585 18.3959 14.6585 18.0415C14.6585 17.687 14.7948 17.3471 15.0373 17.0965C15.2798 16.8459 15.6088 16.7051 15.9518 16.7051H16.5984V19.3779ZM18.5384 23.387H17.8917V20.7143H18.5384C18.8814 20.7143 19.2103 20.8551 19.4528 21.1057C19.6954 21.3563 19.8316 21.6962 19.8316 22.0506C19.8316 22.4051 19.6954 22.745 19.4528 22.9956C19.2103 23.2462 18.8814 23.387 18.5384 23.387Z" fill="url(#paint0_linear_299_342)" />
                                <circle cx="17.0282" cy="17.0282" r="16.5282" stroke="url(#paint1_linear_299_342)" />
                                <path d="M23.9248 31.4701L37.2887 53.887C46.1338 56.6145 48.0141 54.467 47.4194 45.9118L33.4089 31.4701" stroke="url(#paint2_linear_299_342)" />
                                <path d="M19.1861 11.6396C22.3894 8.36119 23.6711 6.75505 22.6348 5.38876H10.1331C10.2648 8.741 11.9095 9.58604 14.0129 11.6396M19.1861 11.6396H14.0129M19.1861 11.6396C23.7754 15.3307 25.6032 17.7825 24.5747 24.3569C19.138 29.7759 15.9702 29.9806 10.1331 24.3569C9.00669 19.8437 10.0306 17.0283 14.0129 11.6396" stroke="url(#paint3_linear_299_342)" />
                                <circle cx="31.6861" cy="22.6327" r="8.83743" fill="white" />
                                <path d="M32.1186 13.3641C26.7145 13.3641 22.4189 17.6596 22.4189 23.0637C22.4189 28.4678 26.7145 32.7633 32.1186 32.7633C37.5226 32.7633 41.8182 28.4678 41.8182 23.0637C41.8182 17.6596 37.5226 13.3641 32.1186 13.3641ZM32.1186 31.3777C27.5459 31.3777 23.8046 27.6364 23.8046 23.0637C23.8046 18.491 27.5459 14.7498 32.1186 14.7498C36.6912 14.7498 40.4325 18.491 40.4325 23.0637C40.4325 27.6364 36.6912 31.3777 32.1186 31.3777Z" fill="url(#paint4_linear_299_342)" />
                                <path d="M35.6092 27.5901L32.1173 24.0982L28.6254 27.5901L27.5908 26.5555L31.0827 23.0636L27.5908 19.5717L28.6254 18.5371L32.1173 22.029L35.6092 18.5371L36.6438 19.5717L33.1519 23.0636L36.6438 26.5555L35.6092 27.5901Z" fill="url(#paint5_linear_299_342)" />
                                <defs>
                                    <linearGradient id="paint0_linear_299_342" x1="12.6956" y1="13.3705" x2="22.5904" y2="20.6059" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6600" />
                                        <stop offset="1" stop-color="#2042B8" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_299_342" x1="-2.93911" y1="0.0162496" x2="22.8341" y2="32.4734" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6600" />
                                        <stop offset="1" stop-color="#2042B8" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_299_342" x1="21.8885" y1="31.4814" x2="39.6843" y2="53.9542" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6600" />
                                        <stop offset="1" stop-color="#2042B8" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_299_342" x1="8.39673" y1="5.39979" x2="26.0275" y2="19.9545" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6600" />
                                        <stop offset="1" stop-color="#2042B8" />
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_299_342" x1="20.7448" y1="13.3734" x2="35.4257" y2="31.8616" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6600" />
                                        <stop offset="1" stop-color="#2042B8" />
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_299_342" x1="26.8095" y1="18.5414" x2="33.6607" y2="27.1693" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6600" />
                                        <stop offset="1" stop-color="#2042B8" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="text-left p-6 md:p-4 space-y-2">
                            <p className="text-2xl text-gray-700 font-manrope font-extrabold">Zero Service Charges</p>
                            <p className="text-lg leading-relaxed text-gray-500 font-manrope">We charge 0% cost for our infrastructure service, with the major cost being the gas fee.</p>
                        </div>
                    </div>
                    <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-30 p-8 md:p-10">
                        <div className='p-5 md:block hidden'>
                            <svg width="49" height="56" viewBox="0 0 49 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.5384 19.3779H17.8917V16.7051H19.185C19.3565 16.7051 19.521 16.7755 19.6422 16.9008C19.7635 17.0261 19.8316 17.1961 19.8316 17.3733C19.8316 17.5505 19.8998 17.7205 20.021 17.8458C20.1423 17.9711 20.3068 18.0415 20.4783 18.0415C20.6498 18.0415 20.8143 17.9711 20.9355 17.8458C21.0568 17.7205 21.1249 17.5505 21.1249 17.3733C21.1249 16.8416 20.9205 16.3318 20.5567 15.9558C20.1929 15.5799 19.6995 15.3687 19.185 15.3687H17.8917V14.0323C17.8917 13.8551 17.8236 13.6851 17.7023 13.5598C17.5811 13.4345 17.4166 13.3641 17.2451 13.3641C17.0736 13.3641 16.9091 13.4345 16.7878 13.5598C16.6666 13.6851 16.5984 13.8551 16.5984 14.0323V15.3687H15.9518C15.2658 15.3687 14.6079 15.6503 14.1228 16.1515C13.6377 16.6528 13.3652 17.3326 13.3652 18.0415C13.3652 18.7503 13.6377 19.4302 14.1228 19.9314C14.6079 20.4327 15.2658 20.7143 15.9518 20.7143H16.5984V23.387H15.3052C15.1337 23.387 14.9692 23.3166 14.8479 23.1913C14.7266 23.066 14.6585 22.8961 14.6585 22.7188C14.6585 22.5416 14.5904 22.3717 14.4691 22.2464C14.3479 22.121 14.1834 22.0506 14.0119 22.0506C13.8404 22.0506 13.6759 22.121 13.5546 22.2464C13.4334 22.3717 13.3652 22.5416 13.3652 22.7188C13.3652 23.2505 13.5696 23.7604 13.9334 24.1363C14.2972 24.5122 14.7907 24.7234 15.3052 24.7234H16.5984V26.0598C16.5984 26.237 16.6666 26.407 16.7878 26.5323C16.9091 26.6576 17.0736 26.728 17.2451 26.728C17.4166 26.728 17.5811 26.6576 17.7023 26.5323C17.8236 26.407 17.8917 26.237 17.8917 26.0598V24.7234H18.5384C19.2244 24.7234 19.8823 24.4418 20.3673 23.9406C20.8524 23.4393 21.1249 22.7595 21.1249 22.0506C21.1249 21.3418 20.8524 20.6619 20.3673 20.1607C19.8823 19.6595 19.2244 19.3779 18.5384 19.3779V19.3779ZM16.5984 19.3779H15.9518C15.6088 19.3779 15.2798 19.2371 15.0373 18.9864C14.7948 18.7358 14.6585 18.3959 14.6585 18.0415C14.6585 17.687 14.7948 17.3471 15.0373 17.0965C15.2798 16.8459 15.6088 16.7051 15.9518 16.7051H16.5984V19.3779ZM18.5384 23.387H17.8917V20.7143H18.5384C18.8814 20.7143 19.2103 20.8551 19.4528 21.1057C19.6954 21.3563 19.8316 21.6962 19.8316 22.0506C19.8316 22.4051 19.6954 22.745 19.4528 22.9956C19.2103 23.2462 18.8814 23.387 18.5384 23.387Z" fill="url(#paint0_linear_299_342)" />
                                <circle cx="17.0282" cy="17.0282" r="16.5282" stroke="url(#paint1_linear_299_342)" />
                                <path d="M23.9248 31.4701L37.2887 53.887C46.1338 56.6145 48.0141 54.467 47.4194 45.9118L33.4089 31.4701" stroke="url(#paint2_linear_299_342)" />
                                <path d="M19.1861 11.6396C22.3894 8.36119 23.6711 6.75505 22.6348 5.38876H10.1331C10.2648 8.741 11.9095 9.58604 14.0129 11.6396M19.1861 11.6396H14.0129M19.1861 11.6396C23.7754 15.3307 25.6032 17.7825 24.5747 24.3569C19.138 29.7759 15.9702 29.9806 10.1331 24.3569C9.00669 19.8437 10.0306 17.0283 14.0129 11.6396" stroke="url(#paint3_linear_299_342)" />
                                <circle cx="31.6861" cy="22.6327" r="8.83743" fill="white" />
                                <path d="M32.1186 13.3641C26.7145 13.3641 22.4189 17.6596 22.4189 23.0637C22.4189 28.4678 26.7145 32.7633 32.1186 32.7633C37.5226 32.7633 41.8182 28.4678 41.8182 23.0637C41.8182 17.6596 37.5226 13.3641 32.1186 13.3641ZM32.1186 31.3777C27.5459 31.3777 23.8046 27.6364 23.8046 23.0637C23.8046 18.491 27.5459 14.7498 32.1186 14.7498C36.6912 14.7498 40.4325 18.491 40.4325 23.0637C40.4325 27.6364 36.6912 31.3777 32.1186 31.3777Z" fill="url(#paint4_linear_299_342)" />
                                <path d="M35.6092 27.5901L32.1173 24.0982L28.6254 27.5901L27.5908 26.5555L31.0827 23.0636L27.5908 19.5717L28.6254 18.5371L32.1173 22.029L35.6092 18.5371L36.6438 19.5717L33.1519 23.0636L36.6438 26.5555L35.6092 27.5901Z" fill="url(#paint5_linear_299_342)" />
                                <defs>
                                    <linearGradient id="paint0_linear_299_342" x1="12.6956" y1="13.3705" x2="22.5904" y2="20.6059" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6600" />
                                        <stop offset="1" stop-color="#2042B8" />
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_299_342" x1="-2.93911" y1="0.0162496" x2="22.8341" y2="32.4734" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6600" />
                                        <stop offset="1" stop-color="#2042B8" />
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_299_342" x1="21.8885" y1="31.4814" x2="39.6843" y2="53.9542" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6600" />
                                        <stop offset="1" stop-color="#2042B8" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_299_342" x1="8.39673" y1="5.39979" x2="26.0275" y2="19.9545" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6600" />
                                        <stop offset="1" stop-color="#2042B8" />
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_299_342" x1="20.7448" y1="13.3734" x2="35.4257" y2="31.8616" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6600" />
                                        <stop offset="1" stop-color="#2042B8" />
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_299_342" x1="26.8095" y1="18.5414" x2="33.6607" y2="27.1693" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF6600" />
                                        <stop offset="1" stop-color="#2042B8" />
                                    </linearGradient>
                                </defs>
                            </svg>
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