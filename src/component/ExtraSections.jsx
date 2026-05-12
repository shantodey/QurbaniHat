"use client"

import { motion } from "motion/react";
import { FaShieldAlt, FaUserTag } from 'react-icons/fa';
import { MdVerifiedUser } from 'react-icons/md';
import { RiCustomerServiceLine } from 'react-icons/ri';

const ExtraSections = () => {

    const cardVariants = {
        hidden: { opacity: 0, y: 80 },
        show: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6
            }
        })
    };

    return (
        <section className="bg-charcoal px-4 py-20 lg:py-28">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold text-[#0F5132] lg:text-6xl">  Why Choose QurbaniHat?  </h2>
                    <p className="mt-5 text-lg text-[#6B7280]">   Your trusted partner for halal livestock booking </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
                    <motion.div custom={0} initial="hidden" whileInView="show" viewport={{ once: true }} variants={cardVariants} whileHover={{ y: -10 }} className="card bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                        <div className="card-body items-center py-10 text-center">
                            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#0F5132] shadow-lg">
                                <MdVerifiedUser className="h-10 w-10 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold leading-tight text-[#0F5132]"> Verified Animals  </h3>
                            <p className="mt-4 text-lg leading-9 text-[#6B7280]">All animals are verified healthy and meet Qurbani standards. </p>

                        </div>
                    </motion.div>

                    <motion.div custom={1} initial="hidden" whileInView="show" viewport={{ once: true }} variants={cardVariants} whileHover={{ y: -10 }} className="card bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                        <div className="card-body items-center py-10 text-center">
                            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#0F5132] shadow-lg"> <FaUserTag className="h-10 w-10 text-white" /> </div>
                            <h3 className="text-3xl font-bold leading-tight text-[#0F5132]"> Transparent Pricing </h3>
                            <p className="mt-4 text-lg leading-9 text-[#6B7280]">  Clear pricing with no hidden charges. What you see is what you pay.</p>

                        </div>
                    </motion.div>

                    <motion.div custom={2} initial="hidden" whileInView="show" viewport={{ once: true }} variants={cardVariants} whileHover={{ y: -10 }} className="card bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                        <div className="card-body items-center py-10 text-center">

                            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#0F5132] shadow-lg"> <FaShieldAlt className="h-10 w-10 text-white" /> </div>
                            <h3 className="text-3xl font-bold leading-tight text-[#0F5132]">  Trusted Farm Locations </h3>
                            <p className="mt-4 text-lg leading-9 text-[#6B7280]">   Partner with verified farms across Bangladesh with proven quality. </p>

                        </div>
                    </motion.div>

                    <motion.div custom={3} initial="hidden" whileInView="show" viewport={{ once: true }} variants={cardVariants} whileHover={{ y: -10 }} className="card bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                        <div className="card-body items-center py-10 text-center">
                            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#0F5132] shadow-lg"><RiCustomerServiceLine className="h-10 w-10 text-white" /> </div>
                            <h3 className="text-3xl font-bold leading-tight text-[#0F5132]">  Simple Online Booking </h3>
                            <p className="mt-4 text-lg leading-9 text-[#6B7280]">  Easy booking process with secure payment and instant confirmation. </p>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ExtraSections;