'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import { CiStar } from "react-icons/ci";
import { SiTicktick } from "react-icons/si";
import { IoIosArrowRoundForward } from "react-icons/io";

import hero from '@/assets/hero.png';

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-[#F7F8F3]">
            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 0.6, scale: 1 }} transition={{ duration: 1 }}
                className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-100 blur-3xl"
            />

            <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 0.6, scale: 1 }}  transition={{ duration: 1.2 }} className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-100 blur-3xl" />

            <div className="container mx-auto px-4 py-16 lg:py-24">
                <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
                    <motion.div  initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-2">
                            <div className="h-2.5 w-2.5 rounded-full bg-[#0B3B2E]"></div>
                            <span className="text-sm font-semibold text-[#0B3B2E]">  Trusted Qurbani Marketplace in Bangladesh </span>
                        </motion.div>

                        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
                            className="max-w-2xl text-4xl font-black leading-tight text-[#032B22] sm:text-5xl lg:text-6xl">
                            Find Healthy Qurbani Animals From Trusted Farms
                        </motion.h1>


                        <motion.p  initial={{ opacity: 0, y: 30 }}  animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }} className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">Explore verified cows, goats, bulls, and livestock for Eid-ul-Adha. Compare prices, check animal details, and book your Qurbani animal online with confidence.
                        </motion.p>


                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}  className="mt-8 flex flex-col gap-4 sm:flex-row"  >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href={'/all-animal'}
                                    className="btn flex h-14 items-center gap-2 rounded-2xl border-0 bg-[#0B3B2E] px-8 text-white hover:bg-[#14532D]"
                                >  Browse Animals  <IoIosArrowRoundForward className="h-5 w-5" />
                                </Link>
                            </motion.div>

                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                className="btn h-14 rounded-2xl border-2 border-[#0B3B2E] bg-transparent px-8 text-[#0B3B2E] hover:bg-[#0B3B2E] hover:text-white"
                            > Qurbani Tips
                            </motion.button>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-10"
                        >
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="flex items-center gap-3"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100"><SiTicktick /> </div>
                                <div>
                                    <h4 className="font-bold text-[#032B22]">  Verified Animals  </h4>
                                    <p className="text-sm text-gray-500">  Healthy and farm checked  </p>
                                </div>
                            </motion.div>

                            <motion.div whileHover={{ y: -5 }} className="flex items-center gap-3" >
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                                    <CiStar className="text-yellow-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#032B22]"> Fair Pricing </h4>
                                    <p className="text-sm text-gray-500"> Directly from trusted sellers</p>
                                </div>
                            </motion.div>
                        </motion.div>

                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }}  transition={{ duration: 1 }} className="relative flex justify-center lg:justify-end"
                    >

                        <motion.div animate={{ y: [0, -15, 0] }}  transition={{duration: 4, repeat: Infinity, ease: "easeInOut",}}
                            className="relative overflow-hidden rounded-[36px] bg-white p-5 shadow-2xl">
                            <Image src={hero}className="h-[500px] w-full max-w-lg rounded-[28px] object-cover" alt="Qurbani image"/>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1 }}
                                className="absolute left-10 top-10 rounded-2xl bg-white/95 px-5 py-4 shadow-xl backdrop-blur"
                            >
                                <h3 className="text-3xl font-black text-[#0B3B2E]">1000+</h3>
                                <p className="text-sm font-medium text-gray-500">Animals Available</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.2 }}
                                className="absolute bottom-10 right-10 rounded-2xl bg-[#0B3B2E] px-6 py-5 text-white shadow-xl"
                            >
                                <h4 className="text-xl font-bold">Trusted Farms</h4>
                                <p className="mt-1 text-sm text-gray-200">Healthy & Verified Livestock</p>
                            </motion.div>

                        </motion.div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default HeroSection;