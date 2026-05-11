import Link from "next/link";
import { allAnimal } from "@/lib/data";
import AnimalCard from "./shared/AnimalCard";
import { RiArrowRightWideLine } from "react-icons/ri";

const FeaturedAnimals = async () => {
  const allAnimalsData = await allAnimal();
  return (
    <section className="container mx-auto px-4 py-16 lg:py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <span className="mb-4 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-[#0B3B2E]">
          Featured Collection</span>
        <h1 className="text-4xl font-black text-[#032B22] md:text-5xl">   Featured Qurbani Animals </h1>
        <p className="mt-4 text-lg leading-8 text-gray-500">  Explore healthy and verified livestock from trusted farms across Bangladesh.</p>
      </div>
      <div className="grid auto-rows-fr grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 xl:grid-cols-4">
        {allAnimalsData.slice(0, 4).map((animal) => <AnimalCard key={animal.id} animal={animal} />)}
      </div>
      <div className="pt-12 text-center">
        <Link href="/all-animal" className="btn h-14 rounded-2xl border-0 bg-[#0B3B2E] px-8 text-base font-bold text-white hover:bg-[#14532D]">
          View All Animals
          <RiArrowRightWideLine className="text-2xl" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedAnimals;