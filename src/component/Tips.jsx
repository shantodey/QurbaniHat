import {
  FaCheckCircle,
  FaBalanceScale,
  FaHandshake,
  FaCalendarCheck
} from "react-icons/fa";

const Tips = () => {

  const tipsData = [
    {
      id: 1,
      icon: <FaCheckCircle />,
      title: "Choose Healthy Animals",
      description: "Look for active and healthy livestock with clear eyes and proper feeding condition."
    },
    {
      id: 2,
      icon: <FaBalanceScale />,
      title: "Check Age & Weight",
      description: "Make sure the animal meets proper Qurbani age and weight requirements."
    },
    {
      id: 3,
      icon: <FaHandshake />,
      title: "Buy From Trusted Farms",
      description: "Choose verified sellers and trusted farms for better quality and safety."
    },
    {
      id: 4,
      icon: <FaCalendarCheck />,
      title: "Book Before Eid Rush",
      description: "Early booking gives you better animal choices and avoids last minute problems."
    }
  ];

  return (
    <section className="bg-base-200 py-16 lg:py-24">

      <div className="container mx-auto px-4">

        <div className="mx-auto mb-12 max-w-2xl text-center">

          <span className="mb-4 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#0B3B2E]">
            Qurbani Guide
          </span>

          <h2 className="text-4xl font-black text-[#032B22] lg:text-5xl">
            Qurbani Preparation Tips
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-500">  Important things to check before booking your Qurbani animal. </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {tipsData.map((tip) => (
            <div key={tip.id} className="card border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="card-body">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl text-[#0B3B2E]">  {tip.icon} </div>
                <h3 className="text-2xl font-bold text-[#032B22]">  {tip.title} </h3>
                <p className="leading-8 text-gray-500">  {tip.description} </p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Tips;