import React from 'react'
import { Link } from 'react-router-dom';

function GetStarted() {
    return (
        <section>
            <div className="max-w-7xl mx-auto text-center my-20 md:my-40 px-1">
                <h1 className="text-2xl md:text-6xl my-4 font-rubik font-bold text-gradient mb-14">Get Started WIth SwitchWallet</h1>
                <p className="text-base md:text-lg font-dmsans text-slate-500 mb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus velit <br /> posuere vestibulum, accumsan tincidunt vehicula quam odio.</p>
                <Link to="/register">
                    <button type='button' className='p-4 md:w-56 w-40 bg-[#2042B8] hover:bg-[#2546bd] rounded-full text-white cursor-pointer font-dmsans font-bold md:text-lg'>Create Account</button>
                </Link>
            </div>
        </section>
    )
}

export default GetStarted;