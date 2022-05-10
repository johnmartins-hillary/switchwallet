import React from 'react';

function MindBlowing() {
    return (
        <section className='my-20 md:my-60'>
            <img className='absolute right-0 hidden md:block' src="assets/images/Developers6.svg" alt="Developers" />
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
    )
}

export default MindBlowing;