import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { SiTicktick } from "react-icons/si";
import hero from'@/assets/hero.png'
const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-[#F7F8F3]">
            <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-green-100 blur-3xl opacity-60"></div>
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-100 blur-3xl opacity-60"></div>
            <div className="container mx-auto px-4 py-16 lg:py-24">
                <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
                    <div>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-2">
                            <div className="h-2.5 w-2.5 rounded-full bg-[#0B3B2E]"></div>
                            <span className="text-sm font-semibold text-[#0B3B2E]">  Trusted Qurbani Marketplace in Bangladesh    </span>
                        </div>
                        <h1 className="max-w-2xl text-4xl font-black leading-tight text-[#032B22] sm:text-5xl lg:text-6xl">
                            Find Healthy Qurbani Animals From Trusted Farms </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                            Explore verified cows, goats, bulls, and livestock for Eid-ul-Adha.
                            Compare prices, check animal details, and book your Qurbani animal online with confidence.
                        </p>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                            <button className="btn h-14 rounded-2xl border-0 bg-[#0B3B2E] px-8 text-white hover:bg-[#14532D]">
                                Browse Animals

                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>

                            <button className="btn h-14 rounded-2xl border-2 border-[#0B3B2E] bg-transparent px-8 text-[#0B3B2E] hover:bg-[#0B3B2E] hover:text-white">
                                Qurbani Tips
                            </button>

                        </div>

                        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-10">

                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                                    <SiTicktick />
                                </div>

                                <div>
                                    <h4 className="font-bold text-[#032B22]">   Verified Animals </h4>
                                    <p className="text-sm text-gray-500">  Healthy and farm checked </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                                    <CiStar className=' text-yellow-600' />
                                </div>

                                <div>
                                    <h4 className="font-bold text-[#032B22]">
                                        Fair Pricing
                                    </h4>

                                    <p className="text-sm text-gray-500">
                                        Directly from trusted sellers
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="relative flex justify-center lg:justify-end">

                        <div className="relative overflow-hidden rounded-[36px] bg-white p-5 shadow-2xl">

                            <Image src={hero}  className="h-[500px] w-full max-w-lg rounded-[28px] object-cover" alt=" Qurbani image" ></Image>
                           
                            <div className="absolute left-10 top-10 rounded-2xl bg-white/95 px-5 py-4 shadow-xl backdrop-blur">
                                <h3 className="text-3xl font-black text-[#0B3B2E]">   1000+</h3>
                                <p className="text-sm font-medium text-gray-500">Animals Available</p>
                            </div>

                            <div className="absolute bottom-10 right-10 rounded-2xl bg-[#0B3B2E] px-6 py-5 text-white shadow-xl">
                                <h4 className="text-xl font-bold">Trusted Farms </h4>
                                <p className="mt-1 text-sm text-gray-200"> Healthy & Verified Livestock</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;