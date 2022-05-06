import React from 'react';

function Banner() {
    return (
        <section>
            <div className="max-w-7xl flex flex-col-reverse items-center px-6 mx-auto md:mt-20 mt-10 space-y-0 md:space-y-0 md:flex-row">
                <div className="flex flex-col md:w-1/2">
                    <h1 className="max-w-md text-3xl font-rubik font-bold text-gray-700 md:text-6xl md:text-left md:mt-0 mt-10 mb-14">About Us</h1>
                    <p className="max-w-md md:text-left text-gray-500 font-dmsans font-medium text-lg mb-14">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus velit posuere vestibulum, accumsan tincidunt vehicula quam odio.
                    </p>
                </div>
                <div className="md:w-1/2 flex items-end justify-end">
                    <img src="assets/images/collaboration.svg" alt="Collaboration" />
                </div>
            </div>
            <div className='max-w-7xl mx-auto bg-gradient rounded-none md:rounded-3xl px-4 sm:px-6 lg:px-4 mt-32'>
                <div className="p-10 md:p-5">
                    <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
                        <div className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden">
                            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                <div className='text-center'>
                                    <h1 className='font-rubik font-bold text-7xl text-white mb-5'>125+</h1>
                                    <h5 className='font-rubik font-light text-2xl text-white'>Start-ups</h5>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden">
                            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                <div className='text-center'>
                                    <h1 className='font-rubik font-bold text-7xl text-white mb-5'>2500+ </h1>
                                    <h5 className='font-rubik font-light text-2xl text-white'>Enterprise</h5>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full h-64 bg-cover bg-center group rounded-lg overflow-hidden">
                            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center">
                                <div className='text-center'>
                                    <h1 className='font-rubik font-bold text-7xl text-white mb-5'>2500+ </h1>
                                    <h5 className='font-rubik font-light text-2xl text-white'>Brands</h5>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Banner;