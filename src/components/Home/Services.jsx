import React from 'react';

const Services = () => {
    return (
        <section className="bg-white">
            <div className="ms-24 md:ps-8 lg:ps-20 mt-14">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="w-full md:w-1/3 ">
                        <h4 className="uppercase text-pink-700 text-lg font-semibold">Services</h4>
                        <h1 className="text-2xl md:text-2xl lg:text-3xl font-bold text-gray-800 mt-4">Our top value <br /> categories for you</h1>
                    </div>
                    <div className="w-full md:w-2/3 mt-6 flex justify-end">
                       
                        <div className="w-full md:w-[300px] p-4 rounded-lg shadow-md">
                            <div className="flex items-center justify-center mb-4">
                                <img src="./service1.svg" alt="" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-semibold">Best Tour Guide</h3>
                                <p className="text-gray-600">What looked like a small patch of purple grass, above five feet.</p>
                            </div>
                        </div>

                        <div className="w-full md:w-[300px] p-4 rounded-lg shadow-md ml-4">
                            <div className="flex items-center justify-center mb-4">
                            <img src="./service2.svg" alt="" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-semibold">Easy Booking</h3>
                                <p className="text-gray-600">Square, was moving across the sand in their direction.</p>
                            </div>
                        </div>

                        <div className="w-full md:w-[300px] p-4 rounded-lg shadow-md ml-4">
                            <div className="flex items-center justify-center mb-4">
                            <img src="./service3.svg" alt="" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-semibold">Weather Forecast</h3>
                                <p className="text-gray-600">What looked like a small patch of purple grass, above five feet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
