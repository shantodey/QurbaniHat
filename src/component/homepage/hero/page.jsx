const HeroSection = () => {
    return (
        <section className="min-h-screen flex items-center  px-4 py-16 lg:py-0">
            <div className="container mx-auto w-full">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    {/* Left Content */}
                    <div>

                        <div className="inline-flex items-center gap-2 bg-[#E8F5E9] px-4 py-2 rounded-full mb-6">
                            <div className="w-3 h-3 rounded-full bg-[#0F5132]"></div>

                            <span className="text-sm font-medium text-[#0F5132]">
                                Trusted by 5,000+ Happy Customers
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#0F5132]">
                            Book Your Halal Qurbani Animal with Confidence
                        </h1>

                        <p className="text-lg text-[#4B5563] mt-6 leading-8 max-w-2xl">
                            Explore verified cows, goats, and bulls from trusted farms across Bangladesh.
                            Choose healthy livestock, view details, and book easily online.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-8">

                            <button className="btn bg-[#0F5132] hover:bg-[#0d4029] border-0 text-white px-8">
                                Browse Animals

                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </button>

                            <button className="btn btn-outline border-2 border-[#0F5132] text-[#0F5132] hover:bg-[#0F5132] hover:text-white px-8">
                                Qurbani Tips
                            </button>

                        </div>

                        <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 mt-10">

                            <div className="flex items-center gap-2">
                                <svg
                                    className="w-6 h-6 text-[#0F5132]"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>

                                <span className="font-medium text-[#1F2937]">
                                    Verified Livestock
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <svg
                                    className="w-6 h-6 text-[#0F5132]"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>

                                <span className="font-medium text-[#1F2937]">
                                    Fair Pricing
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex justify-center lg:justify-end">

                        <div className="relative w-full max-w-md min-h-[420px] bg-[#E8F5E9] rounded-[32px] shadow-2xl flex items-center justify-center p-8">

                            <div className="absolute top-6 right-6 bg-white px-5 py-3 rounded-full shadow-lg text-center">
                                <p className="text-sm font-bold text-[#0F5132]">
                                    1000+
                                </p>

                                <p className="text-[10px] font-medium text-[#6B7280] tracking-wide">
                                    ANIMALS AVAILABLE
                                </p>
                            </div>

                            <div className="text-center">

                                <div className="flex justify-center items-end gap-3">

                                    {/* Goat */}
                                    <svg
                                        className="w-20 sm:w-24"
                                        viewBox="0 0 100 100"
                                        fill="none"
                                    >
                                        <ellipse cx="50" cy="85" rx="35" ry="12" fill="#D4A017" opacity="0.2" />
                                        <circle cx="50" cy="45" r="30" fill="#8B6F47" />
                                        <circle cx="50" cy="45" r="25" fill="#A0826D" />
                                        <circle cx="42" cy="38" r="8" fill="#3D3D3D" />
                                        <circle cx="58" cy="38" r="8" fill="#3D3D3D" />
                                        <ellipse cx="50" cy="50" rx="8" ry="10" fill="#D1A594" />
                                    </svg>

                                    {/* Cow */}
                                    <svg
                                        className="w-28 sm:w-32"
                                        viewBox="0 0 100 100"
                                        fill="none"
                                    >
                                        <ellipse cx="50" cy="90" rx="40" ry="8" fill="#D4A017" opacity="0.15" />
                                        <circle cx="50" cy="50" r="35" fill="#C4A574" />
                                        <ellipse cx="50" cy="48" rx="30" ry="32" fill="#D4B896" />
                                        <circle cx="38" cy="40" r="5" fill="#4A4A4A" />
                                        <circle cx="62" cy="40" r="5" fill="#4A4A4A" />
                                        <ellipse cx="50" cy="55" rx="10" ry="12" fill="#E8C8B0" />
                                    </svg>

                                    {/* Sheep */}
                                    <svg
                                        className="w-16 sm:w-20"
                                        viewBox="0 0 80 80"
                                        fill="none"
                                    >
                                        <ellipse cx="40" cy="70" rx="30" ry="6" fill="#D4A017" opacity="0.1" />
                                        <circle cx="40" cy="35" r="25" fill="#F4E4C1" />
                                        <circle cx="32" cy="30" r="4" fill="#2D2D2D" />
                                        <circle cx="48" cy="30" r="4" fill="#2D2D2D" />
                                        <ellipse cx="40" cy="42" rx="6" ry="8" fill="#FFD9B8" />
                                    </svg>

                                </div>

                                <p className="text-sm text-[#6B7280] mt-6">
                                    🌱 Fresh & Healthy Animals
                                </p>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;