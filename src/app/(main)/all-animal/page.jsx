
import AnimalCard from "@/component/shared/AnimalCard";
import { allAnimal } from "@/lib/data";
const page = async() => {
    const allAnimalsData = await allAnimal();

    return (
        <section className="container mx-auto px-4 py-16 lg:py-20">
            <div className="text-center pb-5">
                <h1 className="text-4xl">Featured Qurbani Animals</h1>
                <p>Hand-picked healthy animals from trusted farms</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 auto-rows-fr ">
                {allAnimalsData.map((animal) => (
                    <AnimalCard key={animal.id} animal={animal}></AnimalCard>
                ))}
            </div>
           
        </section>
    );
};


export default page;