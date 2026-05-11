import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
const AnimalCard = ({ animal }) => {
  const { name, price, type, weight, image, location, breed } = animal;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-2xl transition-all duration-300 hover:-translate-y-1 ">
      <figure className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute left-4 top-4 z-10 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold text-white backdrop-blur-md">
          Large Animal
        </div>
        <Image
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={image}
          alt={name}
          height={150}
          width={200}
        />
      </figure>
      <div className="flex flex-1 flex-col p-6">
        <h2 className="mb-4 text-xl font-bold text-slate-800">{name}</h2>

        <div className="mb-6 flex-1 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Type:</span>
            <span className="font-semibold text-slate-700">{type}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Breed:</span>
            <span className="font-semibold text-slate-700">{breed}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Weight:</span>
            <span className="font-semibold text-slate-700">{weight}</span>
          </div>
          <div className="flex items-center gap-1 pt-1 text-sm text-gray-400">
            <CiLocationOn className="text-lg" />
            <span>{location}</span>
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-50">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Price</p>
          <div className="flex items-end justify-between">
            <span className="text-2xl font-bold text-slate-800">৳ {price}</span>
            <button className="text-sm font-bold text-slate-800 hover:underline">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;