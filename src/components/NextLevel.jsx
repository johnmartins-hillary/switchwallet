import React from 'react';
import { Link } from 'react-router-dom';

function NextLevel() {
    return (
        <section className="max-w-7xl mx-auto p-5">
            <div className="rounded-3xl shadow-lg my-32 flex flex-row bg-gradient text-white ">
                <div className="lg:w-3/5 w-full p-12">
                    <div className="lg:w-2/3">
                        <h3 className="font-rubik font-bold mb-10 text-2xl md:text-4xl">A set way to taking your business to the next level</h3>
                        <p className="mb-4 font-dmsans font-bold md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className="lg:w-2/5 w-full lg:flex lg:flex-row hidden items-center justify-center">
                    <img src="assets/images/big_logo.svg" alt="big logo" className="h-96 w-full" />
                    <Link to="/register" className='absolute'>
                        <button type='button' className='p-4 bg-white hover:bg-white md:w-56 w-40 rounded-full cursor-pointer'>
                            <p className='text-gradient font-dmsans font-bold text-lg'>Create Account</p>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default NextLevel;