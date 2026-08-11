"use client";
import { useState } from "react";
import AnimalCard from "./shared/AnimalCard";
const AllAnimalRaper = ({ allAnimalsData }) => {
  const [sortType, setSortType] = useState("");
  const sortedAnimals = [...allAnimalsData].sort((a, b) => {
    if (sortType === "low") {
      return a.price - b.price;
    }
    if (sortType === "high") {
      return b.price - a.price;
    }
    return 0;
  });
  return (
    <div>
      <div className="flex justify-end mb-6">
        <select onChange={(e) => setSortType(e.target.value)}
         className="w-full max-w-xs rounded-xl border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium 
         text-[var(--foreground)] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0B3B2E]"
        >
          <option value="">Filter By Price</option>
          <option value="low">Low to high</option>
          <option value="high">High to low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 auto-rows-fr">
        {sortedAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AllAnimalRaper;