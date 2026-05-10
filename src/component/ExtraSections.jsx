import React from 'react';
import { FaShieldAlt, FaUserTag } from 'react-icons/fa';
import { MdOutlineVerified, MdVerifiedUser } from 'react-icons/md';
import { RiCustomerServiceLine } from 'react-icons/ri';

const ExtraSections = () => {
    return (
        <section className="bg-charcoal py-20 lg:py-28 px-4">

            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-6xl font-bold text-[#0F5132]">
                        Why Choose QurbaniHat?
                    </h2>

                    <p className="text-[#6B7280] text-lg mt-5">
                        Your trusted partner for halal livestock booking
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                    <div className="card bg-white shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="card-body items-center text-center py-10">

                            <div className="w-20 h-20 rounded-3xl bg-[#0F5132] flex items-center justify-center shadow-lg mb-6">
                                <MdVerifiedUser className="w-10 h-10 text-white" />
                            </div>

                            <h3 className="text-3xl font-bold text-[#0F5132] leading-tight">
                                Verified Animals
                            </h3>

                            <p className="text-[#6B7280] text-lg leading-9 mt-4">
                                All animals are verified healthy and meet Qurbani standards.
                            </p>
                        </div>
                    </div>
                    <div className="card bg-white shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="card-body items-center text-center py-10">

                            <div className="w-20 h-20 rounded-3xl bg-[#0F5132] flex items-center justify-center shadow-lg mb-6">
                                <FaUserTag className="w-10 h-10 text-white"/>
                            </div>

                            <h3 className="text-3xl font-bold text-[#0F5132] leading-tight">
                                Transparent Pricing
                            </h3>

                            <p className="text-[#6B7280] text-lg leading-9 mt-4">
                                Clear pricing with no hidden charges. What you see is what you pay.
                            </p>
                        </div>
                    </div>
                    <div className="card bg-white shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="card-body items-center text-center py-10">

                            <div className="w-20 h-20 rounded-3xl bg-[#0F5132] flex items-center justify-center shadow-lg mb-6">
                                <FaShieldAlt className="w-10 h-10 text-white"/>
                              
                            </div>

                            <h3 className="text-3xl font-bold text-[#0F5132] leading-tight">
                                Trusted Farm Locations
                            </h3>

                            <p className="text-[#6B7280] text-lg leading-9 mt-4">
                                Partner with verified farms across Bangladesh with proven quality.
                            </p>
                        </div>
                    </div>
                    <div className="card bg-white shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="card-body items-center text-center py-10">

                            <div className="w-20 h-20 rounded-3xl bg-[#0F5132] flex items-center justify-center shadow-lg mb-6">
                                <RiCustomerServiceLine className="w-10 h-10 text-white"/>
                            </div>

                            <h3 className="text-3xl font-bold text-[#0F5132] leading-tight">
                                Simple Online Booking
                            </h3>

                            <p className="text-[#6B7280] text-lg leading-9 mt-4">
                                Easy booking process with secure payment and instant confirmation.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Qurbani Tips */}
            </div>
        </section>
    );
};

export default ExtraSections;