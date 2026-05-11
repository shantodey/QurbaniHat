import AllAnimalRaper from "@/component/AllAnimalRaper";
import { allAnimal } from "@/lib/data";
const Page = async () => {
  const allAnimalsData = await allAnimal();
  return (
    <section className="container mx-auto px-4 py-16 lg:py-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#0F5132]"> Featured Qurbani Animals</h1>
        <p className="text-gray-500 mt-3">  Hand-picked healthy animals from trusted farms</p>
      </div>
      <AllAnimalRaper allAnimalsData={allAnimalsData} />
    </section>
  );
};

export default Page;