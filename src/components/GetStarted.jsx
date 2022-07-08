import React from 'react';

const GetStarted = () => {
    return (
        <section className="mx-5">
            <div className="container max-w-7xl rounded-2xl mx-auto py-20 bg-gradient my-20 text-center px-5">
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl xl:text-4xl">A set way of taking your business to the next level</h2>
                <p className="max-w-md mx-auto mt-3 text-base text-gray-400 sm:text-lg md:mt-5 md:text-lg md:max-w-3xl">We have the most affordable solution that allows businesses to perform transactions in multiple cryptocurrencies and digital assets. Our solution provides uber swift transactions, giving you the best support in the market.                    </p>
                <div className="flex justify-center mt-8 space-x-3">
                    <a href="https://integrations.switchwallet.io/auth/register" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-60 px-6 py-3 mb-3 text-black bg-white sm:mb-0 sm:w-auto font-dmsans text-lg font-bold rounded-full md:w-56 shadow-md">Create Account</a>
                </div>
            </div>
        </section>
    )
}

export default GetStarted;