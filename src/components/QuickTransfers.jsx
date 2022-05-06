import React from 'react';

function QuickTransfers() {
    return (
        <section className="md:py-4 my-10 md:my-52 text-dark">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col lg:w-2/5 w-full lg:-mt-12">
                    <div className="relative flex flex-col min-w-0 w-full">
                        <img src="assets/images/QuickTransfers.svg" alt="Quick Transfers" />
                    </div>
                </div>
                <div className="flex flex-col lg:w-3/6 w-full p-8">
                    <h1 className="text-2xl md:text-4xl my-4 font-rubik font-bold">Secure, low-cost International Payment Processing Service </h1>
                    <p className="text-sm md:text-lg my-2 md:my-4 font-dmsans font-normal text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.</p>
                    <p className="text-sm md:text-lg my-2 md:my-4 font-dmsans font-normal text-slate-500">Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque.</p>
                </div>
            </div>
        </section>
    )
}

export default QuickTransfers;