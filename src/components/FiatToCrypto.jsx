import React from 'react'

function FiatToCrypto() {
    return (
        <section className="py-4 text-dark">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row my-12 md:my-36">
                <div className="flex flex-col w-full lg:w-2/5 p-8 md:order-1 order-2">
                    <h1 className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug font-rubik font-bold">Fiat-to-Crypto Payment</h1>
                    <p className="text-sm md:text-lg my-2 md:my-4 font-dmsans font-normal text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus velit posuere vestibulum, accumsan tincidunt vehicula quam odio.</p>
                </div>
                <div className="flex flex-col lg:w-3/5 justify-center w-full lg:-mt-12 md:order-2 order-1">
                    <div className="relative flex flex-col min-w-0 break-words w-full">
                        <div className="flex-auto p-5 lg:p-10 flex justify-end">
                            <img src="assets/images/transfer_money.svg" alt="Transfer Money" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FiatToCrypto