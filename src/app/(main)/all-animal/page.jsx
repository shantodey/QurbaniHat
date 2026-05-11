
import AllAnimalRaper from "@/component/AllAnimalRaper";
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
            <AllAnimalRaper allAnimalsData={allAnimalsData}></AllAnimalRaper>
           
        </section>
    );
};


export default page;