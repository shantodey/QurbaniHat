
import { FaStar } from 'react-icons/fa';

const CustomerFeedback = () => {
    return (
        <section className="bg-[#FFF8E7] py-24 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-6xl font-bold text-[#0F5132]">
                        What Our Customers Say
                    </h2>

                    <p className="text-[#7b8794] text-lg mt-4">
                        Real experiences from satisfied customers
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="card bg-white border border-[#ececec] rounded-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                        <div className="card-body p-10">

                            {/* Profile */}
                            <div className="flex items-center gap-5 mb-8">

                                <img
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
                                    alt="Razin Chowdhury"
                                    className="w-20 h-20 rounded-full object-cover border-2 border-[#e5e7eb]"
                                />

                                <div>
                                    <h3 className="text-[20px] font-bold text-[#0F5132]">
                                        Razin Chowdhury
                                    </h3>

                                    <p className="text-sm font-semibold tracking-[2px] text-[#9ca3af] mt-1">
                                        SYLHET
                                    </p>
                                </div>

                            </div>

                            {/* Stars */}
                            <div className="flex items-center gap-1 text-[#EAB308] mb-6">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/* Feedback */}
                            <p className="text-[#4b5563] text-[18px] italic leading-10">
                                "Excellent website! Found a healthy cow easily.
                                The animal was exactly as described. Highly recommended
                                for anyone looking for Qurbani animals."
                            </p>

                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="card bg-white border border-[#ececec] rounded-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                        <div className="card-body p-10">

                            {/* Profile */}
                            <div className="flex items-center gap-5 mb-8">

                                <img
                                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop"
                                    alt="Sinikdho Mahmud"
                                    className="w-20 h-20 rounded-full object-cover border-2 border-[#e5e7eb]"
                                />

                                <div>
                                    <h3 className="text-[20px] font-bold text-[#0F5132]">
                                        Sinikdho Mahmud
                                    </h3>

                                    <p className="text-sm font-semibold tracking-[2px] text-[#9ca3af] mt-1">
                                        KURIGRAM
                                    </p>
                                </div>

                            </div>

                            {/* Stars */}
                            <div className="flex items-center gap-1 text-[#EAB308] mb-6">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/* Feedback */}
                            <p className="text-[#4b5563] text-[18px] italic leading-10">
                                "Very satisfied with QurbaniHat! Transparent pricing
                                and helpful customer service. Delivery was on time
                                and the animal was in perfect condition."
                            </p>

                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="card bg-white border border-[#ececec] rounded-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                        <div className="card-body p-10">

                            {/* Profile */}
                            <div className="flex items-center gap-5 mb-8">

                                <img
                                    src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=400&auto=format&fit=crop"
                                    alt="Karim Hassan"
                                    className="w-20 h-20 rounded-full object-cover border-2 border-[#e5e7eb]"
                                />

                                <div>
                                    <h3 className="text-[20px] font-bold text-[#0F5132]">
                                        Karim Hassan
                                    </h3>

                                    <p className="text-sm font-semibold tracking-[2px] text-[#9ca3af] mt-1">
                                        SYLHET
                                    </p>
                                </div>

                            </div>

                            {/* Stars */}
                            <div className="flex items-center gap-1 text-[#EAB308] mb-6">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/* Feedback */}
                            <p className="text-[#4b5563] text-[18px] italic leading-10">
                                "Best platform for Qurbani animal booking! Great
                                selection of healthy animals. The team was very
                                professional and supportive throughout."
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CustomerFeedback;