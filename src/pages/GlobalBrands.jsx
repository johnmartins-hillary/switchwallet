import React from 'react';
import CustomersReview from '../components/CustomersReview';
import Layout from '../components/Layout';
import MindBlowing from '../components/MindBlowing';

function GlobalBrands() {
    return (
        <Layout>

            <section>
                <div className="container flex flex-col-reverse items-center px-6 mx-auto space-y-0 md:space-y-0 md:flex-row my-20">
                    <div className="md:w-2/3 flex flex-col">
                        <h1 className="font-rubik font-bold text-gradient text-2xl md:text-5xl md:text-left md:mt-0 mt-16 mb-10">API suite to build amazing payments experiences</h1>
                        <p className="max-w-md md:text-left leading-relaxed text-lg text-gray-600 font-dmsans mb-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus velit posuere vestibulum.</p>
                        <a href="https://stg-integrations.switchwallet.io/auth/register" target="_blank" rel="noopener noreferrer">
                            <button type='button' className='p-4 md:w-56 w-52 bg-[#2042B8] hover:bg-[#2546bd] rounded-full text-white cursor-pointer font-dmsans font-bold md:text-lg'>Create Account</button>
                        </a>
                    </div>
                    <div className="md:w-1/2 flex items-end justify-end">
                        <img src="assets/images/global-payments.svg" alt="Global Payments" />
                    </div>
                </div>
            </section>

            <section className='max-w-7xl mx-auto text-center md:my-28 my-16 md:px-0 px-10'>
                <h5 className='font-rubik font-normal text-xl mb-5'>Companies we have help grow with SwitchWallet</h5>
                <img className='mx-auto' src="assets/images/brands.svg" alt="Brands" />
            </section>

            <section className='my-20 md:my-60'>
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="font-rubik font-bold text-slate-700 text-2xl md:text-5xl text-center dark:text-white">Specially Designed for Payments</h1>
                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-32 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                        <div className="p-8 border bg-white z-50">
                            <span className="inline-block text-blue-500 dark:text-blue-400">
                                <svg width="76" height="80" viewBox="0 0 76 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0H76V38V61L66.5 70.5L57 80H38H0V0Z" fill="#2042B8" fill-opacity="0.21" />
                                    <path d="M26.5729 48.0831C26.9385 48.0831 27.2985 47.9875 27.6163 47.8046C26.7121 46.7542 26.7121 45.1989 27.6163 44.1485C27.0482 43.8236 26.3619 43.7815 25.7586 44.0346C25.1553 44.2863 24.7039 44.8052 24.5366 45.4366C24.3693 46.0694 24.5043 46.743 24.9036 47.2619C25.3016 47.7794 25.9189 48.0831 26.5728 48.0831L26.5729 48.0831Z" fill="#2042B8" />
                                    <path d="M28.6793 45.9767C28.6793 47.8203 27.6401 47.8203 27.6401 45.9767C27.6401 44.1331 28.6793 44.1331 28.6793 45.9767Z" fill="#2042B8" />
                                    <path d="M37.6118 44.7109H51.5337V47.2422H37.6118V44.7109Z" fill="#2042B8" />
                                    <path d="M29.7466 48.083C30.4019 48.083 31.0193 47.7807 31.4186 47.2618C31.8166 46.7429 31.953 46.0693 31.7856 45.4365C31.6169 44.8037 31.1655 44.2848 30.5608 44.0331C29.9575 43.7813 29.2713 43.8235 28.7031 44.1484C29.6073 45.1989 29.6073 46.7542 28.7031 47.8045C29.0209 47.9874 29.3809 48.083 29.7465 48.083L29.7466 48.083Z" fill="#2042B8" />
                                    <path d="M21.6172 33.8505H54.3829V38.1409H21.6172V33.8505Z" fill="#2042B8" />
                                    <path d="M21.6172 51.4976H54.3829V38.8444H21.6172V51.4976ZM36.9089 44.3596C36.9089 44.1655 37.0664 44.008 37.2605 44.008H51.8855C51.9783 44.008 52.0683 44.0446 52.1344 44.1107C52.2005 44.1767 52.237 44.2667 52.237 44.3596V47.5939C52.237 47.6868 52.2005 47.7768 52.1344 47.8429C52.0683 47.9089 51.9783 47.9455 51.8855 47.9455H37.2605C37.0664 47.9455 36.9089 47.788 36.9089 47.594V44.3596ZM26.5729 43.1671C27.1397 43.1671 27.6937 43.3386 28.1592 43.6607C29.0198 43.07 30.1364 43.0053 31.0589 43.4905C31.9814 43.9771 32.5594 44.9333 32.5594 45.9767C32.5594 47.0202 31.9814 47.9764 31.0589 48.463C30.1364 48.9481 29.0198 48.8834 28.1606 48.2928H28.1592C27.4237 48.7976 26.4914 48.9228 25.649 48.6289C24.8052 48.3364 24.1528 47.66 23.8884 46.8078C23.624 45.9542 23.7815 45.0275 24.3117 44.3089C24.8404 43.5917 25.68 43.167 26.5729 43.167L26.5729 43.1671Z" fill="#2042B8" />
                                    <path d="M21.6172 28.5023V33.147H54.3829V28.5023H21.6172ZM24.2961 30.9731H23.2569V30.27H24.2961V30.9731ZM31.8194 30.9731H25.127V30.27H31.8194V30.9731Z" fill="#2042B8" />
                                </svg>
                            </span>
                            <h1 className="font-rubik font-medium text-3xl mb-10 mt-6 text-gray-700">Modern Cards</h1>
                            <p className="dark:text-gray-300 leading-relaxed text-lg text-gray-600 font-dmsans">End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                        </div>
                        <div className="p-8 border bg-white z-50">
                            <span className="inline-block text-blue-500 dark:text-blue-400">
                                <svg width="76" height="80" viewBox="0 0 76 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0H76V38V61L66.5 70.5L57 80H38H0V0Z" fill="#FF6600" fill-opacity="0.22" />
                                    <path d="M49.7207 38.6408H39.3207C38.8004 38.6408 38.4004 38.2408 38.4004 37.7204V27.3204C38.4004 26.8001 37.9597 26.3611 37.441 26.4001C33.841 26.6798 30.7206 28.5204 28.641 31.2409C27.441 30.5612 26.041 30.1612 24.5614 30.1612C19.841 30.1612 16.041 34.0019 16.041 38.6816C16.041 43.3614 19.8817 47.202 24.5614 47.202C26.0817 47.202 27.4817 46.7614 28.7206 46.0817C30.9613 49.002 34.441 50.9225 38.2798 50.9613C44.839 51.041 50.2002 46.0409 50.6798 39.6409C50.7204 39.08 50.2798 38.6409 49.7205 38.6409L49.7207 38.6408ZM18.1599 38.6798C18.1599 35.1595 21.0005 32.3206 24.5191 32.3206C28.0394 32.3206 30.8783 35.1613 30.8783 38.6798C30.8783 42.2001 28.0377 45.039 24.5191 45.039C21.0003 45.0406 18.1599 42.1593 18.1599 38.6798Z" fill="#FF6600" />
                                    <path d="M42.6801 23.0408C42.1597 23.0002 41.7207 23.4408 41.7207 23.9611V34.3611C41.7207 34.8815 42.1207 35.2815 42.641 35.2815H53.041C53.5613 35.2815 54.0004 34.8408 53.9613 34.3221C53.5207 28.3205 48.7205 23.5205 42.6801 23.0409L42.6801 23.0408Z" fill="#FF6600" />
                                    <path d="M24.8795 37.8796H24.1999C23.9999 37.8796 23.8405 37.8 23.6795 37.639C23.5592 37.4796 23.4795 37.3187 23.5202 37.1187C23.5608 36.7593 23.8795 36.5187 24.2405 36.5187H24.9999C25.1999 36.5187 25.3592 36.639 25.3999 36.839C25.4405 36.9984 25.5592 37.1187 25.7592 37.1187H26.6389C26.7592 37.1187 26.8389 37.0781 26.9186 36.9984C26.9983 36.9187 26.9983 36.839 26.9983 36.7187C26.9186 35.7984 26.1983 35.0781 25.3186 34.9593V34.239C25.3186 34.039 25.1592 33.8796 24.9592 33.8796H24.0795C23.8795 33.8796 23.7202 34.039 23.7202 34.239V34.9999C22.5999 35.2406 21.7999 36.2796 21.9202 37.4406C22.0405 38.5999 23.0405 39.4812 24.2405 39.4812H24.7999C24.9999 39.4812 25.1592 39.5609 25.3202 39.7218C25.4405 39.8812 25.5202 40.0422 25.4795 40.2422C25.4389 40.6015 25.1202 40.8422 24.7592 40.8422H23.9999C23.7999 40.8422 23.6405 40.7218 23.5999 40.5218C23.5592 40.3625 23.4405 40.2422 23.2405 40.2422H22.3608C22.2405 40.2422 22.1608 40.2828 22.0811 40.3625C22.0014 40.4422 22.0014 40.5218 22.0014 40.6422C22.0811 41.5625 22.8014 42.2828 23.6811 42.4015V43.1218C23.6811 43.3218 23.8405 43.4812 24.0405 43.4812H24.9202C25.1202 43.4812 25.2795 43.3218 25.2795 43.1218V42.3625C26.2389 42.1219 26.9592 41.3625 27.0795 40.4031C27.1592 39.7625 26.9202 39.1234 26.5202 38.6438C26.1202 38.1594 25.5202 37.8797 24.8795 37.8797V37.8796Z" fill="#FF6600" />
                                </svg>
                            </span>
                            <h1 className="font-rubik font-medium text-3xl mb-10 mt-6 text-gray-700">No Extra Fee</h1>
                            <p className="dark:text-gray-300 leading-relaxed text-lg text-gray-600 font-dmsans">End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                        </div>
                        <div className="p-8 border bg-white z-50">
                            <span className="inline-block text-blue-500 dark:text-blue-400">
                                <svg width="76" height="80" viewBox="0 0 76 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0H76V38V61L66.5 70.5L57 80H38H0V0Z" fill="#6C63FF" fill-opacity="0.21" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M38.3753 23.838L52.1748 30.7003C52.5123 30.8508 52.6628 31.1883 52.6628 31.5258C52.2873 37.6753 50.7123 42.6253 48.2373 46.6753C45.7623 50.7253 42.4251 53.8008 38.4497 56.1631C38.1501 56.3502 37.8126 56.3136 37.5497 56.1631C33.612 53.8006 30.2373 50.7253 27.762 46.6753C25.325 42.5875 23.7498 37.6375 23.3743 31.4876C23.3363 31.1122 23.5613 30.8126 23.8623 30.6622L37.624 23.8376C37.849 23.6872 38.1499 23.7251 38.3749 23.8376L38.3753 23.838ZM39.3878 44.5002H36.5753C36.4628 44.5002 36.3883 44.4622 36.2758 44.4622C35.8258 44.3118 35.6008 43.8252 35.7513 43.3752L36.6513 40.8257C36.2013 40.6007 35.7893 40.2252 35.5263 39.8132C35.2267 39.3632 35.0383 38.8007 35.0383 38.2382C35.0383 37.4127 35.3758 36.7012 35.9003 36.1752C36.4248 35.6507 37.1378 35.3132 37.9633 35.3132C38.7508 35.3132 39.5003 35.6507 40.0263 36.1752C40.5508 36.6997 40.8883 37.4127 40.8883 38.2382C40.8883 38.8007 40.7013 39.3632 40.4383 39.8132C40.1753 40.2252 39.7633 40.6007 39.3133 40.8257L40.1753 43.3387C40.2133 43.4512 40.2498 43.5637 40.2498 43.6762C40.2498 44.1248 39.8744 44.5002 39.3878 44.5002V44.5002Z" fill="#6C63FF" />
                                </svg>
                            </span>
                            <h1 className="font-rubik font-medium text-3xl mb-10 mt-6 text-gray-700">Super Secure</h1>
                            <p className="dark:text-gray-300 leading-relaxed text-lg text-gray-600 font-dmsans">End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                        </div>
                    </div>
                </div>
            </section>

            <MindBlowing />

            <CustomersReview />

        </Layout>
    )
}

export default GlobalBrands;