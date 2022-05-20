import React from 'react';
import GetStarted from '../components/GetStarted';
import Layout from '../components/Layout';

function FAQ() {
    return (
        <Layout>

            {/* <section>
                <div className="max-w-7xl mx-auto text-center my-20 md:my-40 px-1">
                    <h1 className="text-4xl md:text-6xl my-4 font-rubik font-bold text-gradient mb-10">Get answer to your questions</h1>
                    <p className="text-base md:text-lg font-dmsans text-slate-500 mb-20">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Cursus velit posuere vestibulum.</p>
                    <div className="flex items-center mx-auto max-w-3xl md:px-0 px-3">
                        <input className="w-full rounded-full h-20 focus:outline-none bg-[#F3F3F3] px-16 font-dmsans font-medium" placeholder="Search" type="text" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 absolute text-zinc-500 ml-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </section> */}

            {/* <section className="container mx-auto bg-white pb-20">
                <div tabIndex={0} aria-label="group of cards" className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4">
                    <div tabIndex={0} aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-5/12 rounded-3xl border p-5">
                        <div className="w-20 h-20 relative mr-5">
                            <div className="absolute top-0 right-0 rounded w-16 h-16 mt-2 mr-1" />
                            <div className="absolute text-white rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                <svg width="30" height="30" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.49058 18.19H24V0H3.43398C2.52413 0.00244812 1.65238 0.306007 1.00902 0.844417C0.365658 1.38283 0.00292534 2.11236 0 2.87379V19.623C0 19.6301 0 19.6372 0 19.6444C0 21.3213 1.57257 22.7377 3.43398 22.7377H24V21.2217H3.43398C2.58475 21.2217 1.81132 20.4699 1.81132 19.6443C1.81132 18.856 2.58028 18.19 3.49058 18.19ZM18.1132 1.53161V9.71788L15.3736 7.70513L12.6792 9.70608V1.53161H18.1132ZM10.8679 1.51584V11.7477H12.6589L15.3802 9.72697L18.1305 11.7477H19.9245V1.51584H22.1887V16.6742H5.43849L5.43396 1.51584H10.8679ZM3.43398 1.51584H3.62264L3.62694 16.6742H3.49036C2.90139 16.6743 2.32264 16.803 1.81132 17.0476V2.88563C1.80994 2.52403 1.98 2.17674 2.2842 1.91994C2.5884 1.66315 3.0019 1.51782 3.43398 1.51584Z" fill="url(#paint0_linear_269_548)" />
                                    <defs><linearGradient id="paint0_linear_269_548" x1="-2.07123" y1="0.010849" x2="14.9035" y2="22.5745" gradientUnits="userSpaceOnUse"><stop stopColor="#FF6600" /><stop offset="1" stopColor="#2042B8" /></linearGradient></defs>
                                </svg>
                            </div>
                        </div>
                        <div className="w-10/12">
                            <h2 tabIndex={0} className="focus:outline-none text-xl text-gray-800 font-rubik font-medium">General</h2>
                            <p tabIndex={0} className="focus:outline-none text-base text-gray-400 font-dmsans font-medium pt-2">General information aboout switch wallet and how it can be used</p>
                        </div>
                    </div>
                    <div tabIndex={0} aria-label="card 2" className="focus:outline-none flex sm:w-full md:w-5/12 rounded-3xl border p-5">
                        <div className="w-20 h-20 relative mr-5">
                            <div className="absolute top-0 right-0 rounded w-16 h-16 mt-2 mr-1" />
                            <div className="absolute text-white rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8999 12.6599C19.7396 12.4774 19.6512 12.2428 19.6512 11.9999C19.6512 11.757 19.7396 11.5224 19.8999 11.3399L21.1799 9.89989C21.3209 9.74256 21.4085 9.5446 21.4301 9.3344C21.4516 9.1242 21.4061 8.91258 21.2999 8.72989L19.2999 5.26989C19.1948 5.08742 19.0348 4.94277 18.8426 4.85658C18.6505 4.77039 18.4361 4.74705 18.2299 4.78989L16.3499 5.16989C16.1107 5.21932 15.8616 5.17948 15.6498 5.05789C15.4379 4.93631 15.2779 4.74138 15.1999 4.5099L14.5899 2.6799C14.5228 2.48127 14.395 2.30876 14.2245 2.18674C14.054 2.06471 13.8495 1.99935 13.6399 1.9999H9.6399C9.42183 1.98851 9.20603 2.04882 9.02546 2.17161C8.84489 2.2944 8.70948 2.47291 8.6399 2.6799L8.0799 4.5099C8.0019 4.74138 7.84187 4.93631 7.63001 5.05789C7.41815 5.17948 7.16911 5.21932 6.9299 5.16989L4.9999 4.78989C4.80445 4.76228 4.6052 4.79312 4.42724 4.87853C4.24929 4.96395 4.1006 5.10012 3.9999 5.26989L1.9999 8.72989C1.89106 8.91054 1.84212 9.12098 1.86008 9.33112C1.87804 9.54126 1.96198 9.74033 2.0999 9.89989L3.3699 11.3399C3.53022 11.5224 3.61863 11.757 3.61863 11.9999C3.61863 12.2428 3.53022 12.4774 3.3699 12.6599L2.0999 14.0999C1.96198 14.2595 1.87804 14.4585 1.86008 14.6687C1.84212 14.8788 1.89106 15.0892 1.9999 15.2699L3.9999 18.7299C4.10499 18.9124 4.26501 19.057 4.45715 19.1432C4.64928 19.2294 4.86372 19.2527 5.0699 19.2099L6.9499 18.8299C7.18911 18.7805 7.43815 18.8203 7.65001 18.9419C7.86187 19.0635 8.0219 19.2584 8.0999 19.4899L8.7099 21.3199C8.77947 21.5269 8.91489 21.7054 9.09546 21.8282C9.27603 21.951 9.49183 22.0113 9.7099 21.9999H13.7099C13.9195 22.0004 14.1241 21.9351 14.2945 21.8131C14.465 21.691 14.5928 21.5185 14.6599 21.3199L15.2699 19.4899C15.3479 19.2584 15.5079 19.0635 15.7198 18.9419C15.9316 18.8203 16.1807 18.7805 16.4199 18.8299L18.2999 19.2099C18.5061 19.2527 18.7205 19.2294 18.9126 19.1432C19.1048 19.057 19.2648 18.9124 19.3699 18.7299L21.3699 15.2699C21.4761 15.0872 21.5216 14.8756 21.5001 14.6654C21.4785 14.4552 21.3909 14.2572 21.2499 14.0999L19.8999 12.6599ZM18.4099 13.9999L19.2099 14.8999L17.9299 17.1199L16.7499 16.8799C16.0297 16.7327 15.2805 16.855 14.6445 17.2237C14.0085 17.5924 13.53 18.1817 13.2999 18.8799L12.9199 19.9999H10.3599L9.9999 18.8599C9.76975 18.1617 9.29128 17.5724 8.6553 17.2037C8.01932 16.835 7.27012 16.7127 6.5499 16.8599L5.3699 17.0999L4.0699 14.8899L4.8699 13.9899C5.36185 13.4399 5.63383 12.7278 5.63383 11.9899C5.63383 11.252 5.36185 10.5399 4.8699 9.98989L4.0699 9.08989L5.3499 6.88989L6.5299 7.12989C7.25012 7.27712 7.99932 7.15478 8.6353 6.78609C9.27128 6.41741 9.74975 5.82805 9.97989 5.12989L10.3599 3.99989H12.9199L13.2999 5.13989C13.53 5.83805 14.0085 6.42741 14.6445 6.79609C15.2805 7.16477 16.0297 7.28712 16.7499 7.13989L17.9299 6.89989L19.2099 9.11989L18.4099 10.0199C17.9235 10.5687 17.6549 11.2766 17.6549 12.0099C17.6549 12.7432 17.9235 13.4511 18.4099 13.9999ZM11.6399 7.99989C10.8488 7.99989 10.0754 8.23449 9.41761 8.67402C8.75982 9.11354 8.24713 9.73826 7.94438 10.4692C7.64163 11.2001 7.56241 12.0043 7.71675 12.7803C7.8711 13.5562 8.25206 14.2689 8.81147 14.8283C9.37088 15.3877 10.0836 15.7687 10.8595 15.923C11.6355 16.0774 12.4397 15.9982 13.1706 15.6954C13.9015 15.3927 14.5262 14.88 14.9658 14.2222C15.4053 13.5644 15.6399 12.791 15.6399 11.9999C15.6399 10.939 15.2185 9.92161 14.4683 9.17147C13.7182 8.42132 12.7008 7.99989 11.6399 7.99989ZM11.6399 13.9999C11.2443 13.9999 10.8577 13.8826 10.5288 13.6628C10.1999 13.4431 9.94351 13.1307 9.79214 12.7653C9.64076 12.3998 9.60115 11.9977 9.67832 11.6097C9.7555 11.2218 9.94598 10.8654 10.2257 10.5857C10.5054 10.306 10.8618 10.1155 11.2497 10.0383C11.6377 9.96115 12.0398 10.0008 12.4053 10.1521C12.7707 10.3035 13.0831 10.5599 13.3028 10.8888C13.5226 11.2177 13.6399 11.6043 13.6399 11.9999C13.6399 12.5303 13.4292 13.039 13.0541 13.4141C12.679 13.7892 12.1703 13.9999 11.6399 13.9999Z" fill="url(#paint0_linear_269_553)" />
                                    <defs><linearGradient id="paint0_linear_269_553" x1="0.160726" y1="2.00808" x2="15.3574" y2="20.8073" gradientUnits="userSpaceOnUse"><stop stopColor="#FF6600" /><stop offset="1" stopColor="#2042B8" /></linearGradient></defs>
                                </svg>
                            </div>
                        </div>
                        <div className="w-10/12">
                            <h2 tabIndex={0} className="focus:outline-none text-xl text-gray-800 font-rubik font-medium">Getting Started</h2>
                            <p tabIndex={0} className="focus:outline-none text-base text-gray-400 font-dmsans font-medium pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus velit posuere.</p>
                        </div>
                    </div>
                    <div tabIndex={0} aria-label="card 3" className="focus:outline-none flex sm:w-full md:w-5/12 rounded-3xl border p-5">
                        <div className="w-20 h-20 relative mr-5">
                            <div className="absolute top-0 right-0 rounded w-16 h-16 mt-2 mr-1" />
                            <div className="absolute text-white rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                <svg width="30" height="30" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 2.5106C0 1.84475 0.316071 1.20617 0.87868 0.735338C1.44129 0.264509 2.20435 0 3 0H21C21.7956 0 22.5587 0.264509 23.1213 0.735338C23.6839 1.20617 24 1.84475 24 2.5106V12.553C24 13.2189 23.6839 13.8574 23.1213 14.3283C22.5587 14.7991 21.7956 15.0636 21 15.0636H3C2.20435 15.0636 1.44129 14.7991 0.87868 14.3283C0.316071 13.8574 0 13.2189 0 12.553V2.5106ZM3 1.2553C2.60218 1.2553 2.22064 1.38755 1.93934 1.62297C1.65804 1.85838 1.5 2.17767 1.5 2.5106V3.7659H22.5V2.5106C22.5 2.17767 22.342 1.85838 22.0607 1.62297C21.7794 1.38755 21.3978 1.2553 21 1.2553H3ZM22.5 6.2765H1.5V12.553C1.5 12.8859 1.65804 13.2052 1.93934 13.4406C2.22064 13.676 2.60218 13.8083 3 13.8083H21C21.3978 13.8083 21.7794 13.676 22.0607 13.4406C22.342 13.2052 22.5 12.8859 22.5 12.553V6.2765Z" fill="url(#paint0_linear_269_559)" />
                                    <path d="M3 10.0424C3 9.70949 3.15804 9.3902 3.43934 9.15478C3.72064 8.91937 4.10218 8.78711 4.5 8.78711H6C6.39782 8.78711 6.77936 8.91937 7.06066 9.15478C7.34196 9.3902 7.5 9.70949 7.5 10.0424V11.2977C7.5 11.6307 7.34196 11.95 7.06066 12.1854C6.77936 12.4208 6.39782 12.553 6 12.553H4.5C4.10218 12.553 3.72064 12.4208 3.43934 12.1854C3.15804 11.95 3 11.6307 3 11.2977V10.0424Z" fill="url(#paint1_linear_269_559)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_269_559" x1="-2.07123" y1="0.00718739" x2="7.27412" y2="18.758" gradientUnits="userSpaceOnUse"><stop stopColor="#FF6600" /><stop offset="1" stopColor="#2042B8" /></linearGradient>
                                        <linearGradient id="paint1_linear_269_559" x1="2.61164" y1="8.78891" x2="5.30931" y2="12.8484" gradientUnits="userSpaceOnUse"><stop stopColor="#FF6600" /><stop offset="1" stopColor="#2042B8" /></linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="w-10/12">
                            <h2 tabIndex={0} className="focus:outline-none text-xl text-gray-800 font-rubik font-medium">Payment</h2>
                            <p tabIndex={0} className="focus:outline-none text-base text-gray-400 font-dmsans font-medium pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Cursus velit posuere.</p>
                        </div>
                    </div>
                    <div tabIndex={0} aria-label="card 4" className="focus:outline-none flex sm:w-full md:w-5/12 rounded-3xl border p-5">
                        <div className="w-20 h-20 relative mr-5">
                            <div className="absolute top-0 right-0 rounded w-16 h-16 mt-2 mr-1" />
                            <div className="absolute text-white rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                <svg width="30" height="30" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.6 15.0594V1M15.4 1H24.28C24.3746 1 24.4682 1.01559 24.5555 1.04587C24.6429 1.07615 24.7223 1.12053 24.7891 1.17648C24.856 1.23243 24.909 1.29886 24.9452 1.37196C24.9814 1.44507 25 1.52342 25 1.60255V14.4569C25 14.536 24.9814 14.6144 24.9452 14.6875C24.909 14.7606 24.856 14.827 24.7891 14.883C24.7223 14.9389 24.6429 14.9833 24.5555 15.0136C24.4682 15.0439 24.3746 15.0594 24.28 15.0594H15.4V1ZM15.4 1V15.0594V1ZM15.4 1H10.6H15.4ZM15.4 15.0594H10.6H15.4ZM10.6 15.0594H1.72C1.52904 15.0594 1.34591 14.996 1.21088 14.883C1.07586 14.77 1 14.6167 1 14.4569V1.60255C1 1.44274 1.07586 1.28948 1.21088 1.17648C1.34591 1.06348 1.52904 1 1.72 1H10.6V15.0594Z" stroke="url(#paint0_linear_269_566)" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.00011 5.86954C7.00011 5.45378 6.5045 5.16756 6.1001 5.41059C5.63561 5.68937 5.25723 6.05681 4.99636 6.48243C4.73549 6.90806 4.59965 7.37961 4.6001 7.85796C4.6001 8.86623 5.1917 9.75901 6.1001 10.3063C6.5045 10.5494 7.00011 10.2631 7.00011 9.84738V5.87054V5.86954ZM19.0001 5.86954C19.0001 5.45378 19.4957 5.16756 19.9001 5.41059C20.3646 5.68937 20.743 6.05681 21.0039 6.48243C21.2647 6.90806 21.4006 7.37961 21.4001 7.85796C21.4008 8.33648 21.265 8.80823 21.0042 9.23404C20.7433 9.65985 20.3648 10.0275 19.9001 10.3063C19.4957 10.5494 19.0001 10.2631 19.0001 9.84738V5.87054V5.86954Z" fill="url(#paint1_linear_269_566)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_269_566" x1="-1.07123" y1="1.00671" x2="7.28397" y2="18.9682" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FF6600" /><stop offset="1" stopColor="#2042B8" /></linearGradient>
                                        <linearGradient id="paint1_linear_269_566" x1="3.15023" y1="5.32371" x2="4.93862" y2="12.7802" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#FF6600" /><stop offset="1" stopColor="#2042B8" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="w-10/12">
                            <h2 tabIndex={0} className="focus:outline-none text-xl text-gray-800 font-rubik font-medium">Commerce</h2>
                            <p tabIndex={0} className="focus:outline-none text-base text-gray-400 font-dmsans font-medium pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus velit posuere.</p>
                        </div>
                    </div>
                    <div tabIndex={0} aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-5/12 rounded-3xl border p-5">
                        <div className="w-20 h-20 relative mr-5">
                            <div className="absolute top-0 right-0 rounded w-16 h-16 mt-2 mr-1" />
                            <div className="absolute text-white rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                <svg width="30" height="30" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.28571 13.3899V7.65137H16.0571C17.2 7.04882 18.5486 6.69495 20 6.69495C21.0171 6.69495 21.9771 6.8671 22.8571 7.17316V1.91284C22.8571 1.40552 22.6163 0.918986 22.1877 0.560258C21.759 0.201531 21.1776 0 20.5714 0H2.28571C1.01714 0 0 0.851215 0 1.91284V13.3899C0 13.8972 0.240816 14.3837 0.66947 14.7425C1.09812 15.1012 1.67951 15.3027 2.28571 15.3027H13.1429C12.8457 14.7098 12.6629 14.0594 12.6057 13.3899H2.28571ZM2.28571 1.91284H20.5714V3.82568H2.28571V1.91284ZM24 12.9117C24 13.6959 23.7143 14.4228 23.2343 15.0254L21.9886 13.9829C22.1829 13.6577 22.2857 13.2943 22.2857 12.9117C22.2857 12.2775 21.9847 11.6694 21.4489 11.221C20.9131 10.7725 20.1863 10.5206 19.4286 10.5206V11.9553L16.8571 9.80331L19.4286 7.65137V9.086C21.9543 9.086 24 10.798 24 12.9117ZM19.4286 13.8681L22 16.0201L19.4286 18.172V16.7374C16.9029 16.7374 14.8571 15.0254 14.8571 12.9117C14.8571 12.1274 15.1429 11.4005 15.6229 10.798L16.8686 11.8405C16.6743 12.1657 16.5714 12.5291 16.5714 12.9117C16.5714 13.5458 16.8724 14.154 17.4083 14.6024C17.9441 15.0508 18.6708 15.3027 19.4286 15.3027V13.8681Z" fill="url(#paint0_linear_269_573)" />
                                    <defs><linearGradient id="paint0_linear_269_573" x1="-2.07123" y1="0.00867052" x2="10.3992" y2="20.7498" gradientUnits="userSpaceOnUse"><stop stopColor="#FF6600" /><stop offset="1" stopColor="#2042B8" /></linearGradient></defs>
                                </svg>
                            </div>
                        </div>
                        <div className="w-10/12">
                            <h2 tabIndex={0} className="focus:outline-none text-xl text-gray-800 font-rubik font-medium">Transfers</h2>
                            <p tabIndex={0} className="focus:outline-none text-base text-gray-400 font-dmsans font-medium pt-2">General information aboout switch wallet and how it can be used</p>
                        </div>
                    </div>
                    <div tabIndex={0} aria-label="card 2" className="focus:outline-none flex sm:w-full md:w-5/12 rounded-3xl border p-5">
                        <div className="w-20 h-20 relative mr-5">
                            <div className="absolute top-0 right-0 rounded w-16 h-16 mt-2 mr-1" />
                            <div className="absolute text-white rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                <svg width="30" height="30" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.4991 6.02103C18.2541 8.78625 15.7492 11.0421 12.9993 11.0421C10.2494 11.0421 7.74018 8.78678 7.49956 6.02103C7.24957 3.1444 9.68697 1 12.9993 1C16.3117 1 18.7491 3.1967 18.4991 6.02103Z" stroke="url(#paint0_linear_269_578)" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.9997 14.3894C7.5624 14.3894 2.04386 16.8999 1.02265 21.6385C0.899531 22.2097 1.28577 22.7578 2.00011 22.7578H23.9993C24.7142 22.7578 25.1005 22.2097 24.9774 21.6385C23.9555 16.8999 18.437 14.3894 12.9997 14.3894Z" stroke="url(#paint1_linear_269_578)" stroke-width="2" stroke-miterlimit="10" />
                                    <defs>
                                        <linearGradient id="paint0_linear_269_578" x1="6.52962" y1="1.00479" x2="13.9378" y2="11.2565" gradientUnits="userSpaceOnUse"><stop stopColor="#FF6600" /><stop offset="1" stopColor="#2042B8" /></linearGradient>
                                        <linearGradient id="paint1_linear_269_578" x1="-1.07123" y1="14.3934" x2="2.27302" y2="26.4718" gradientUnits="userSpaceOnUse"><stop stopColor="#FF6600" /><stop offset="1" stopColor="#2042B8" /></linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="w-10/12">
                            <h2 tabIndex={0} className="focus:outline-none text-xl text-gray-800 font-rubik font-medium">Account Management</h2>
                            <p tabIndex={0} className="focus:outline-none text-base text-gray-400 font-dmsans font-medium pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus velit posuere.</p>
                        </div>
                    </div>
                    <div tabIndex={0} aria-label="card 3" className="focus:outline-none flex sm:w-full md:w-5/12 rounded-3xl border p-5">
                        <div className="w-20 h-20 relative mr-5">
                            <div className="absolute top-0 right-0 rounded w-16 h-16 mt-2 mr-1" />
                            <div className="absolute text-white rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                <svg width="30" height="30" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.4286 1H3.57143C2.15127 1 1 1.96347 1 3.15196V17.4984C1 18.6869 2.15127 19.6503 3.57143 19.6503H22.4286C23.8487 19.6503 25 18.6869 25 17.4984V3.15196C25 1.96347 23.8487 1 22.4286 1Z" stroke="url(#paint0_linear_269_585)" strokeLinejoin="round" />
                                    <path d="M9.25 9.15948H12.25M4.75 4.13818L8.5 6.64883L4.75 9.15948V4.13818Z" stroke="url(#paint1_linear_269_585)" strokeLinecap="round" strokeLinejoin="round" />
                                    <defs>
                                        <linearGradient id="paint0_linear_269_585" x1="-1.07123" y1="1.0089" x2="11.8809" y2="21.9987" gradientUnits="userSpaceOnUse"><stop stopColor="#FF6600" /><stop offset="1" stopColor="#2042B8" /></linearGradient>
                                        <linearGradient id="paint1_linear_269_585" x1="4.10274" y1="4.14058" x2="7.33697" y2="10.2241" gradientUnits="userSpaceOnUse"><stop stopColor="#FF6600" /><stop offset="1" stopColor="#2042B8" /></linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="w-10/12">
                            <h2 tabIndex={0} className="focus:outline-none text-xl text-gray-800 font-rubik font-medium">Terminals</h2>
                            <p tabIndex={0} className="focus:outline-none text-base text-gray-400 font-dmsans font-medium pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus velit posuere.</p>
                        </div>
                    </div>
                    <div tabIndex={0} aria-label="card 4" className="focus:outline-none flex sm:w-full md:w-5/12 rounded-3xl border p-5">
                        <div className="w-20 h-20 relative mr-5">
                            <div className="absolute top-0 right-0 rounded w-16 h-16 mt-2 mr-1" />
                            <div className="absolute text-white rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                                <svg width="30" height="30" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 0L0 3.3475V8.36875C0 13.0134 3.84 17.3568 9 18.4113C14.16 17.3568 18 13.0134 18 8.36875V3.3475L9 0ZM9 9.19726H16C15.47 12.6452 12.72 15.7165 9 16.6789V9.20563H2V4.43544L9 1.83276V9.19726Z" fill="url(#paint0_linear_269_592)" />
                                    <defs><linearGradient id="paint0_linear_269_592" x1="-1.55342" y1="0.00878468" x2="12.448" y2="17.2474" gradientUnits="userSpaceOnUse"><stop stopColor="#FF6600" /><stop offset="1" stopColor="#2042B8" /></linearGradient></defs>
                                </svg>
                            </div>
                        </div>
                        <div className="w-10/12">
                            <h2 tabIndex={0} className="focus:outline-none text-xl text-gray-800 font-rubik font-medium">Security</h2>
                            <p tabIndex={0} className="focus:outline-none text-base text-gray-400 font-dmsans font-medium pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus velit posuere.</p>
                        </div>
                    </div>
                </div>
            </section> */}

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