import React from 'react';
import { Link } from "react-router-dom";

function Welcome() {
    return (
        <section>
            <div className="container flex flex-col-reverse items-center px-6 mx-auto md:mt-20 mt-10 space-y-0 md:space-y-0 md:flex-row">
                <div className="flex flex-col md:w-1/2">
                    <h1 className="max-w-md text-3xl font-rubik font-bold text-gradient md:text-4xl md:text-left md:mt-0 mt-10 mb-14">
                        Fastest Blockchain Payment Gateway your business deserve
                    </h1>
                    <p className="max-w-md md:text-left text-gray-500 font-dmsans font-medium text-lg mb-14">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus velit posuere vestibulum, accumsan tincidunt vehicula quam odio.
                    </p>
                    <div className="flex justify-center md:justify-start md:gap-5 gap-2">
                        <Link to="/register">
                            <button type='button' className='p-4 md:w-56 w-40 bg-[#2042B8] hover:bg-[#2546bd] rounded-full text-white cursor-pointer font-dmsans font-bold md:text-lg'>Create Account</button>
                        </Link>
                        <Link to="/contact">
                            <button type='text' className='p-3 md:p-4 md:w-56 w-40 cursor-pointer rounded-full text-gradient font-dmsans font-bold md:text-lg text-center text-lg my-0 border-2 border-amber-700'>Contact Sales</button>
                        </Link>
                    </div>
                    <div className='mt-32'>
                        <h3 className='text-gray-500 text-lg font-dmsans font-medium'>Trusted by Top Brands</h3>
                        <div className="flex justify-center md:justify-start md:gap-5 gap-2">
                            <img src="assets/images/brands.svg" alt="Brand" />
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 flex items-center justify-center">
                    <img src="assets/images/map.svg" alt="Map" />
                </div>
            </div>
        </section>
    )
}

export default Welcome;