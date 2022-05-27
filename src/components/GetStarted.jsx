import React from 'react';

function GetStarted() {
    return (
        <section>
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center my-10 md:my-32 px-6">
                <h1 className="font-rubik font-bold text-gradient text-xl md:text-6xl mb-5 md:mb-14">Get Started WIth SwitchWallet</h1>
                <p className="max-w-lg font-dmsans font-normal text-base md:text-xl text-slate-500 mb-10">With Switch Wallet, you can provide your customers with the most convenient way to pay for their goods and services using digital currencies..</p>
                <a href="https://stg-integrations.switchwallet.io/auth/register" target="_blank" rel="noopener noreferrer">
                    <button type='button' className='p-4 md:w-56 w-40 bg-[#2042B8] hover:bg-[#2546bd] rounded-full text-white cursor-pointer font-dmsans font-bold md:text-lg'>Create Account</button>
                </a>
            </div>
        </section>
    )
}

export default GetStarted;