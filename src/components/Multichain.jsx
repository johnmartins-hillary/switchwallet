import React from 'react';

function Multichain() {
    return (
        <section className="py-4 my-12 md:my-36 text-dark">
            <div className='text-center md:my-32'>
                <h1 className='text-4xl md:text-5xl my-4 font-rubik font-bold'>Fast n’ Simple payment for you </h1>
                <p className="text-sm md:text-lg my-2 md:my-4 font-dmsans font-normal text-slate-500">Built for your Business to connect more customer</p>
            </div>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
                <div className="flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12">
                    <div className="container">
                        <div className="relative flex flex-col min-w-0 break-words w-full">
                            <div className="flex-auto p-5 lg:p-10">
                                <img src="assets/images/setup.svg" alt="Setup" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full lg:w-2/5 p-8">
                    <p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug font-rubik font-bold">Multichain Crypto Payment API</p>
                    <p className="text-sm md:text-lg my-2 md:my-4 font-dmsans font-normal text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus velit posuere vestibulum, accumsan tincidunt vehicula quam odio.</p>
                </div>
            </div>
        </section>
    )
}

export default Multichain;