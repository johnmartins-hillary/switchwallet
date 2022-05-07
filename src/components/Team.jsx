import React from 'react'

function Team() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 my-20 md:my-60">
            <img className='absolute right-0 hidden md:block' src="assets/images/big_side_logo.svg" alt="Big" />
            <div className="text-center pb-20">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-rubik font-bold text-gray-900">The Executive Team</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-50">
                    <div className="w-full md:w-2/5 h-52 p-5">
                        <img className="object-center object-cover w-full h-full rounded-2xl" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />
                    </div>
                    <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                        <p className="text-xl text-gray-700 font-rubik font-bold">Dany Bailey</p>
                        <p className="text-base text-gray-400 font-normal">Software Engineer</p>
                        <p className="text-base leading-relaxed text-gray-500 font-dmsans">Lorem ipsum dolor sit amet, consectetur adipiscing. Cursus velit posuere vestibulum, accumsan tincidunt vehicula quam odio.</p>
                    </div>
                </div>
                <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-50">
                    <div className="w-full md:w-2/5 h-52 p-5">
                        <img className="object-center object-cover w-full h-full rounded-2xl" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />
                    </div>
                    <div className="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
                        <p className="text-xl text-gray-700 font-rubik font-bold">Lucy Carter</p>
                        <p className="text-base text-gray-400 font-normal">Graphic Designer</p>
                        <p className="text-base leading-relaxed text-gray-500 font-dmsans">Lorem ipsum dolor sit amet, consectetur adipiscing. Cursus velit posuere vestibulum, accumsan tincidunt vehicula quam odio.</p>
                    </div>
                </div>
                <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-50">
                    <div className="w-full md:w-2/5 h-52 p-5">
                        <img className="object-center object-cover w-full h-full rounded-2xl" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80" alt="" />
                    </div>
                    <div className="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
                        <p className="text-xl text-gray-700 font-rubik font-bold">Jade Bradley</p>
                        <p className="text-base text-gray-400 font-normal">Dev Ops</p>
                        <p className="text-base leading-relaxed text-gray-500 font-dmsans">Lorem ipsum dolor sit amet, consectetur adipiscing. Cursus velit posuere vestibulum, accumsan tincidunt vehicula quam odio.</p>
                    </div>
                </div>
                <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-50">
                    <div className="w-full md:w-2/5 h-52 p-5">
                        <img className="object-center object-cover w-full h-full rounded-2xl" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="" />
                    </div>
                    <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                        <p className="text-xl text-gray-700 font-rubik font-bold">Dany Bailey</p>
                        <p className="text-base text-gray-400 font-normal">Software Engineer</p>
                        <p className="text-base leading-relaxed text-gray-500 font-dmsans">Lorem ipsum dolor sit amet, consectetur adipiscing. Cursus velit posuere vestibulum, accumsan tincidunt vehicula quam odio.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team;