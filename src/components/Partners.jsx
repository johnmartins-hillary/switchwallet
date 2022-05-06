import React from 'react';

function Partners() {
    return (
        <section className='md:my-60 px-10 md:px-0'>
            <div className="max-w-7xl flex flex-col-reverse items-center mx-auto space-y-0 md:space-y-0 md:flex-row">
                <div className="flex flex-col md:w-1/2">
                    <h1 className="max-w-sm text-3xl font-rubik font-bold text-gradient md:text-4xl md:text-left md:mt-0 mt-10 mb-10">Business & Partners that trust Switch Wallet</h1>
                    <p className="max-w-sm md:text-left text-gray-500 font-dmsans text-lg font-bold mb-14">Built for your Business to connect more customer</p>
                    <div className="flex justify-center md:justify-start md:gap-5 gap-2">
                        <img src="assets/images/brands.svg" alt="Brand" />
                    </div>
                </div>
                <img className='absolute right-0 hidden md:block' src="assets/images/biggest_logo.svg" alt="Biggest Logo" />
            </div>
        </section>
    )
}

export default Partners;