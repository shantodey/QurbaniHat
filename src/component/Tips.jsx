import {
    FaCheckCircle,
    FaBalanceScale,
    FaHandshake,
    FaCalendarCheck
} from 'react-icons/fa';
const Tips = () => {
    return (
               <section className="bg-[#FFF8E7] py-24 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-6xl font-bold text-[#0F5132]">
                        Qurbani Preparation Tips
                    </h2>

                    <p className="text-[#7b8794] text-lg mt-4">
                        Essential guidelines for selecting your Qurbani animal
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

                    {/* Card */}
                    <div className="card bg-white border border-[#ececec] rounded-[28px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
                        <div className="card-body p-8">

                            <div className="w-16 h-16 rounded-2xl bg-[#EEF3EF] flex items-center justify-center mb-8">
                                <FaCheckCircle className="text-[#0F5132] text-[22px]" />
                            </div>

                            <h3 className="text-[22px] leading-[34px] font-bold text-[#0F5132] mb-4">
                                Choose a Healthy Animal
                            </h3>

                            <p className="text-[#7b8794] text-[18px] leading-9">
                                Look for active, well-fed animals with clear eyes and good condition.
                            </p>

                        </div>
                    </div>

                    {/* Card */}
                    <div className="card bg-white border border-[#ececec] rounded-[28px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
                        <div className="card-body p-8">

                            <div className="w-16 h-16 rounded-2xl bg-[#EEF3EF] flex items-center justify-center mb-8">
                                <FaBalanceScale className="text-[#0F5132] text-[22px]" />
                            </div>

                            <h3 className="text-[22px] leading-[34px] font-bold text-[#0F5132] mb-4">
                                Check Age & Weight
                            </h3>

                            <p className="text-[#7b8794] text-[18px] leading-9">
                                Verify the animal meets Qurbani requirements for age and weight standards.
                            </p>

                        </div>
                    </div>

                    {/* Card */}
                    <div className="card bg-white border border-[#ececec] rounded-[28px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
                        <div className="card-body p-8">

                            <div className="w-16 h-16 rounded-2xl bg-[#EEF3EF] flex items-center justify-center mb-8">
                                <FaHandshake className="text-[#0F5132] text-[22px]" />
                            </div>

                            <h3 className="text-[22px] leading-[34px] font-bold text-[#0F5132] mb-4">
                                Confirm Trusted Seller
                            </h3>

                            <p className="text-[#7b8794] text-[18px] leading-9">
                                Book from verified farms with proven track record and customer reviews.
                            </p>

                        </div>
                    </div>

                    {/* Card */}
                    <div className="card bg-white border border-[#ececec] rounded-[28px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
                        <div className="card-body p-8">

                            <div className="w-16 h-16 rounded-2xl bg-[#EEF3EF] flex items-center justify-center mb-8">
                                <FaCalendarCheck className="text-[#0F5132] text-[22px]" />
                            </div>

                            <h3 className="text-[22px] leading-[34px] font-bold text-[#0F5132] mb-4">
                                Book Early Before Eid
                            </h3>

                            <p className="text-[#7b8794] text-[18px] leading-9">
                                Secure your animal in advance to get the best selection and avoid last-minute rush.
                            </p>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Tips;