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
                <div className="mt-28">

                    <div className="flex items-center justify-between mb-10 flex-col sm:flex-row gap-4">
                        <div>
                            <h2 className="text-4xl font-bold text-[#0F5132]">
                                Qurbani Tips
                            </h2>

                            <p className="text-[#6B7280] mt-3">
                                Important things to know before booking your animal
                            </p>
                        </div>

                        <button className="btn bg-[#0F5132] hover:bg-[#0c4028] border-0 text-white">
                            View All Tips
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                        <div className="card bg-white shadow-sm">
                            <figure className="h-56 bg-[#E8F5E9] flex items-center justify-center text-7xl">
                                🐄
                            </figure>

                            <div className="card-body">
                                <h3 className="card-title text-[#0F5132] text-2xl">
                                    How to Choose a Healthy Cow
                                </h3>

                                <p className="text-[#6B7280] leading-8">
                                    Learn the important signs of a healthy Qurbani animal before purchase.
                                </p>

                                <div className="card-actions mt-4">
                                    <button className="btn btn-outline border-[#0F5132] text-[#0F5132] hover:bg-[#0F5132] hover:text-white">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-white shadow-sm">
                            <figure className="h-56 bg-[#E8F5E9] flex items-center justify-center text-7xl">
                                🌙
                            </figure>

                            <div className="card-body">
                                <h3 className="card-title text-[#0F5132] text-2xl">
                                    Qurbani Rules & Sunnah
                                </h3>

                                <p className="text-[#6B7280] leading-8">
                                    Understand Islamic guidelines and Sunnah practices for Qurbani.
                                </p>

                                <div className="card-actions mt-4">
                                    <button className="btn btn-outline border-[#0F5132] text-[#0F5132] hover:bg-[#0F5132] hover:text-white">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-white shadow-sm">
                            <figure className="h-56 bg-[#E8F5E9] flex items-center justify-center text-7xl">
                                🚚
                            </figure>

                            <div className="card-body">
                                <h3 className="card-title text-[#0F5132] text-2xl">
                                    Delivery & Farm Visit Guide
                                </h3>

                                <p className="text-[#6B7280] leading-8">
                                    Know how delivery works and how to arrange a farm visit easily.
                                </p>

                                <div className="card-actions mt-4">
                                    <button className="btn btn-outline border-[#0F5132] text-[#0F5132] hover:bg-[#0F5132] hover:text-white">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </div>
        </section>
    );
};

export default ExtraSections;