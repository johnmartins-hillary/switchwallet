import React from 'react';

function Mission() {
    return (
        <section className="md:py-4 my-10 md:my-60 text-dark">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col lg:w-2/5 w-full lg:-mt-12">
                    <div className="relative flex flex-col min-w-0 w-full">
                        <img src="assets/images/mission.svg" alt="Mission" />
                    </div>
                </div>
                <div className="flex flex-col lg:w-3/6 w-full p-8">
                    <h1 className="text-2xl md:text-6xl my-4 font-rubik font-bold">Our Mission</h1>
                    <p className="text-base md:text-lg my-2 md:my-4 font-dmsans text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum.</p>
                </div>
            </div>
        </section>
    )
}

export default Mission;