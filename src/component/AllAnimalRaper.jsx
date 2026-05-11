'use client'

import { useState } from "react";
import AnimalCard from "./shared/AnimalCard";

const AllAnimalRaper = ({ allAnimalsData }) => {

    const [shortType, setShortType] = useState('');
    const sortAnimal = [...allAnimalsData].sort((a, b) => {
        if (shortType === 'low') {
            return b.price - a.price 
        } else if (shortType === 'high') {
            return a.price - b.price
        }
        else{
            return allAnimalsData
        }

    })

    return (
        <div>
            <select onChange={(e) => setShortType(e.target.value)} defaultValue="Pick a color" className="select">
                <option disabled={true}>Filter By Price</option>
                <option value={'low'}>Low to high</option>
                <option value={'high'}>High to low</option>

            </select>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 auto-rows-fr ">
                {sortAnimal.map((animal) => (
                    <AnimalCard key={animal.id} animal={animal}></AnimalCard>
                ))}
            </div>
        </div>
    );
};

export default AllAnimalRaper;