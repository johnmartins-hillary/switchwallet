import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    function SubmitHandler(e) {
        e.preventDefault();
        const data = { name, email, message };
        if (data) {
            setTimeout(() => {
                navigate('/');
            }, 500);
        }
    }

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center w-full px-5 md:px-10 my-10 md:my-32 lg:flex-row">
                <div className="relative z-10 w-full max-w-2xl lg:w-5/12">
                    <div className="relative z-10 flex flex-col items-start justify-start p-8 md:p-10 bg-white shadow-2xl rounded-xl">
                        <div className='w-full text-center mb-10'>
                            <h4 className="text-4xl font-manrope font-extrabold leading-snug text-gradient">Contact Us</h4>
                            <p className='text-slate-500 text-lg'>Fill up the form below to send us a message.</p>
                        </div>
                        <form className="relative w-full mt-6 space-y-8" onSubmit={SubmitHandler}>
                            <div className="relative">
                                <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Full Name</label>
                                <input type="text" className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="John Doe" required value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="relative">
                                <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Email Address</label>
                                <input type="text" className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="janedoe@email.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="relative">
                                <label className="absolute px-2 ml-2 -mt-3 font-medium text-gray-600 bg-white">Your Message</label>
                                <textarea rows="5" type="text" className="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Message" required value={message} onChange={(e) => setMessage(e.target.value)} />
                            </div>
                            <div className="relative">
                                <button type='submit' className="inline-block w-full px-5 py-4 text-xl font-medium text-center text-white transition duration-200 bg-[#2042B8] hover:bg-[#2546bd] rounded-lg ease">Send</button>
                            </div>
                        </form>
                    </div>
                    <svg className="hidden md:block absolute top-0 left-0 z-0 w-32 h-32 -mt-12 -ml-12 text-gray-200 fill-current" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="none" strokeWidth={1} fillRule="evenodd">
                            <g fillRule="nonzero">
                                <g>
                                    <g>
                                        <circle cx="3.261" cy="3.445" r="2.72" />
                                        <circle cx="15.296" cy="3.445" r="2.719" />
                                        <circle cx="27.333" cy="3.445" r="2.72" />
                                        <circle cx="39.369" cy="3.445" r="2.72" />
                                        <circle cx="51.405" cy="3.445" r="2.72" />
                                        <circle cx="63.441" cy="3.445" r="2.72" />
                                        <circle cx="75.479" cy="3.445" r="2.72" />
                                        <circle cx="87.514" cy="3.445" r="2.719" />
                                    </g>
                                    <g transform="translate(0 12)">
                                        <circle cx="3.261" cy="3.525" r="2.72" />
                                        <circle cx="15.296" cy="3.525" r="2.719" />
                                        <circle cx="27.333" cy="3.525" r="2.72" />
                                        <circle cx="39.369" cy="3.525" r="2.72" />
                                        <circle cx="51.405" cy="3.525" r="2.72" />
                                        <circle cx="63.441" cy="3.525" r="2.72" />
                                        <circle cx="75.479" cy="3.525" r="2.72" />
                                        <circle cx="87.514" cy="3.525" r="2.719" />
                                    </g>
                                    <g transform="translate(0 24)">
                                        <circle cx="3.261" cy="3.605" r="2.72" />
                                        <circle cx="15.296" cy="3.605" r="2.719" />
                                        <circle cx="27.333" cy="3.605" r="2.72" />
                                        <circle cx="39.369" cy="3.605" r="2.72" />
                                        <circle cx="51.405" cy="3.605" r="2.72" />
                                        <circle cx="63.441" cy="3.605" r="2.72" />
                                        <circle cx="75.479" cy="3.605" r="2.72" />
                                        <circle cx="87.514" cy="3.605" r="2.719" />
                                    </g>
                                    <g transform="translate(0 36)">
                                        <circle cx="3.261" cy="3.686" r="2.72" />
                                        <circle cx="15.296" cy="3.686" r="2.719" />
                                        <circle cx="27.333" cy="3.686" r="2.72" />
                                        <circle cx="39.369" cy="3.686" r="2.72" />
                                        <circle cx="51.405" cy="3.686" r="2.72" />
                                        <circle cx="63.441" cy="3.686" r="2.72" />
                                        <circle cx="75.479" cy="3.686" r="2.72" />
                                        <circle cx="87.514" cy="3.686" r="2.719" />
                                    </g>
                                    <g transform="translate(0 49)">
                                        <circle cx="3.261" cy="2.767" r="2.72" />
                                        <circle cx="15.296" cy="2.767" r="2.719" />
                                        <circle cx="27.333" cy="2.767" r="2.72" />
                                        <circle cx="39.369" cy="2.767" r="2.72" />
                                        <circle cx="51.405" cy="2.767" r="2.72" />
                                        <circle cx="63.441" cy="2.767" r="2.72" />
                                        <circle cx="75.479" cy="2.767" r="2.72" />
                                        <circle cx="87.514" cy="2.767" r="2.719" />
                                    </g>
                                    <g transform="translate(0 61)">
                                        <circle cx="3.261" cy="2.846" r="2.72" />
                                        <circle cx="15.296" cy="2.846" r="2.719" />
                                        <circle cx="27.333" cy="2.846" r="2.72" />
                                        <circle cx="39.369" cy="2.846" r="2.72" />
                                        <circle cx="51.405" cy="2.846" r="2.72" />
                                        <circle cx="63.441" cy="2.846" r="2.72" />
                                        <circle cx="75.479" cy="2.846" r="2.72" />
                                        <circle cx="87.514" cy="2.846" r="2.719" />
                                    </g>
                                    <g transform="translate(0 73)">
                                        <circle cx="3.261" cy="2.926" r="2.72" />
                                        <circle cx="15.296" cy="2.926" r="2.719" />
                                        <circle cx="27.333" cy="2.926" r="2.72" />
                                        <circle cx="39.369" cy="2.926" r="2.72" />
                                        <circle cx="51.405" cy="2.926" r="2.72" />
                                        <circle cx="63.441" cy="2.926" r="2.72" />
                                        <circle cx="75.479" cy="2.926" r="2.72" />
                                        <circle cx="87.514" cy="2.926" r="2.719" />
                                    </g>
                                    <g transform="translate(0 85)">
                                        <circle cx="3.261" cy="3.006" r="2.72" />
                                        <circle cx="15.296" cy="3.006" r="2.719" />
                                        <circle cx="27.333" cy="3.006" r="2.72" />
                                        <circle cx="39.369" cy="3.006" r="2.72" />
                                        <circle cx="51.405" cy="3.006" r="2.72" />
                                        <circle cx="63.441" cy="3.006" r="2.72" />
                                        <circle cx="75.479" cy="3.006" r="2.72" />
                                        <circle cx="87.514" cy="3.006" r="2.719" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <svg className="hidden md:block absolute bottom-0 right-0 z-0 w-32 h-32 -mb-12 -mr-12 text-blue-600 fill-current" viewBox="0 0 91 91" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="none" strokeWidth={1} fillRule="evenodd">
                            <g fillRule="nonzero">
                                <g>
                                    <g>
                                        <circle cx="3.261" cy="3.445" r="2.72" />
                                        <circle cx="15.296" cy="3.445" r="2.719" />
                                        <circle cx="27.333" cy="3.445" r="2.72" />
                                        <circle cx="39.369" cy="3.445" r="2.72" />
                                        <circle cx="51.405" cy="3.445" r="2.72" />
                                        <circle cx="63.441" cy="3.445" r="2.72" />
                                        <circle cx="75.479" cy="3.445" r="2.72" />
                                        <circle cx="87.514" cy="3.445" r="2.719" />
                                    </g>
                                    <g transform="translate(0 12)">
                                        <circle cx="3.261" cy="3.525" r="2.72" />
                                        <circle cx="15.296" cy="3.525" r="2.719" />
                                        <circle cx="27.333" cy="3.525" r="2.72" />
                                        <circle cx="39.369" cy="3.525" r="2.72" />
                                        <circle cx="51.405" cy="3.525" r="2.72" />
                                        <circle cx="63.441" cy="3.525" r="2.72" />
                                        <circle cx="75.479" cy="3.525" r="2.72" />
                                        <circle cx="87.514" cy="3.525" r="2.719" />
                                    </g>
                                    <g transform="translate(0 24)">
                                        <circle cx="3.261" cy="3.605" r="2.72" />
                                        <circle cx="15.296" cy="3.605" r="2.719" />
                                        <circle cx="27.333" cy="3.605" r="2.72" />
                                        <circle cx="39.369" cy="3.605" r="2.72" />
                                        <circle cx="51.405" cy="3.605" r="2.72" />
                                        <circle cx="63.441" cy="3.605" r="2.72" />
                                        <circle cx="75.479" cy="3.605" r="2.72" />
                                        <circle cx="87.514" cy="3.605" r="2.719" />
                                    </g>
                                    <g transform="translate(0 36)">
                                        <circle cx="3.261" cy="3.686" r="2.72" />
                                        <circle cx="15.296" cy="3.686" r="2.719" />
                                        <circle cx="27.333" cy="3.686" r="2.72" />
                                        <circle cx="39.369" cy="3.686" r="2.72" />
                                        <circle cx="51.405" cy="3.686" r="2.72" />
                                        <circle cx="63.441" cy="3.686" r="2.72" />
                                        <circle cx="75.479" cy="3.686" r="2.72" />
                                        <circle cx="87.514" cy="3.686" r="2.719" />
                                    </g>
                                    <g transform="translate(0 49)">
                                        <circle cx="3.261" cy="2.767" r="2.72" />
                                        <circle cx="15.296" cy="2.767" r="2.719" />
                                        <circle cx="27.333" cy="2.767" r="2.72" />
                                        <circle cx="39.369" cy="2.767" r="2.72" />
                                        <circle cx="51.405" cy="2.767" r="2.72" />
                                        <circle cx="63.441" cy="2.767" r="2.72" />
                                        <circle cx="75.479" cy="2.767" r="2.72" />
                                        <circle cx="87.514" cy="2.767" r="2.719" />
                                    </g>
                                    <g transform="translate(0 61)">
                                        <circle cx="3.261" cy="2.846" r="2.72" />
                                        <circle cx="15.296" cy="2.846" r="2.719" />
                                        <circle cx="27.333" cy="2.846" r="2.72" />
                                        <circle cx="39.369" cy="2.846" r="2.72" />
                                        <circle cx="51.405" cy="2.846" r="2.72" />
                                        <circle cx="63.441" cy="2.846" r="2.72" />
                                        <circle cx="75.479" cy="2.846" r="2.72" />
                                        <circle cx="87.514" cy="2.846" r="2.719" />
                                    </g>
                                    <g transform="translate(0 73)">
                                        <circle cx="3.261" cy="2.926" r="2.72" />
                                        <circle cx="15.296" cy="2.926" r="2.719" />
                                        <circle cx="27.333" cy="2.926" r="2.72" />
                                        <circle cx="39.369" cy="2.926" r="2.72" />
                                        <circle cx="51.405" cy="2.926" r="2.72" />
                                        <circle cx="63.441" cy="2.926" r="2.72" />
                                        <circle cx="75.479" cy="2.926" r="2.72" />
                                        <circle cx="87.514" cy="2.926" r="2.719" />
                                    </g>
                                    <g transform="translate(0 85)">
                                        <circle cx="3.261" cy="3.006" r="2.72" />
                                        <circle cx="15.296" cy="3.006" r="2.719" />
                                        <circle cx="27.333" cy="3.006" r="2.72" />
                                        <circle cx="39.369" cy="3.006" r="2.72" />
                                        <circle cx="51.405" cy="3.006" r="2.72" />
                                        <circle cx="63.441" cy="3.006" r="2.72" />
                                        <circle cx="75.479" cy="3.006" r="2.72" />
                                        <circle cx="87.514" cy="3.006" r="2.719" />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </Layout>
    )
}

export default Contact;