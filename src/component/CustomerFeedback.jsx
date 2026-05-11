import { FaStar } from "react-icons/fa";
const CustomerFeedback = () => {
    const feedbackData = [
        {
            id: 1,
            name: "Razin Chowdhury",
            location: "SYLHET",
            image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
            comment:
                "Excellent website! Found a healthy cow easily. The animal was exactly as described. Highly recommended for anyone looking for Qurbani animals."
        },
        {
            id: 2,
            name: "Sinikdho Mahmud",
            location: "KURIGRAM",
            image:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
            comment:
                "Very satisfied with QurbaniHat! Transparent pricing and helpful customer service. Delivery was on time and the animal was in perfect condition."
        },
        {
            id: 3,
            name: "Karim Hassan",
            location: "SYLHET",
            image:
                "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=400&auto=format&fit=crop",
            comment:
                "Best platform for Qurbani animal booking! Great selection of healthy animals. The team was very professional and supportive throughout."
        }
    ];

    return (
        <section className="bg-base-200 py-24 px-4">
            <div className="container mx-auto">

                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-6xl font-bold text-[#0F5132]"> What Our Customers Say </h2>
                    <p className="text-[#7b8794] text-lg mt-4">   Real experiences from satisfied customers </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {feedbackData.map((item) => (
                        <div key={item.id} className="card bg-white border border-[#ececec] rounded-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                            <div className="card-body p-10">
                                <div className="flex items-center gap-5 mb-8">
                                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-full object-cover border-2 border-[#e5e7eb]" />
                                    <div>
                                        <h3 className="text-[20px] font-bold text-[#0F5132]"> {item.name} </h3>
                                        <p className="text-sm font-semibold tracking-[2px] text-[#9ca3af] mt-1">    {item.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 text-[#EAB308] mb-6">   <FaStar />  <FaStar />  <FaStar />  <FaStar />  <FaStar /></div>
                                <p className="text-[#4b5563] text-[18px] italic leading-10">     {item.comment} </p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default CustomerFeedback;