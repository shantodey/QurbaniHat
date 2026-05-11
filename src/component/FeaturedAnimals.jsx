import Link from "next/link";
import { allAnimal } from "@/lib/data";
import AnimalCard from "./shared/AnimalCard";
import { RiArrowRightWideLine } from "react-icons/ri";


const FeaturedAnimals = async () => {
  const allAnimalsData = await allAnimal();

  return (
    <section className="container mx-auto px-4 py-16 lg:py-20">
      <div className="text-center pb-5">
        <h1 className="text-4xl">Featured Qurbani Animals</h1>
        <p>Hand-picked healthy animals from trusted farms</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 auto-rows-fr ">
        {allAnimalsData.slice(0, 4).map((animal) => (
          <AnimalCard key={animal.id} animal={animal}></AnimalCard>
        ))}
      </div>
        <div className="pt-5 text-center">
          <Link href={''} className="btn btn-active btn-primary"> View all the Animal <span><RiArrowRightWideLine /></span> </Link>
        </div>
    </section>
  );
};

export default FeaturedAnimals;