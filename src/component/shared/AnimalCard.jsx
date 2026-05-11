import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import BookAnimal from "../BookAnimal";

const AnimalCard = ({ animal }) => {
  const { name, price, type, weight, image, location, breed, id } = animal;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[24px] bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <figure className="relative h-[230px] overflow-hidden">
        <div className="absolute right-4 top-4 z-10 rounded-full bg-[#0B3B2E] px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-white shadow-md">
          {type === "Cow" ? "Large Animal" : "Small Animal"}
        </div>
        <Image className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={image}alt={name} height={400} width={500}/>
      </figure>

      <div className="flex flex-1 flex-col p-6">
        <h2 className="mb-5 text-[25px] font-bold leading-tight text-[#032B22]">{name}</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-500 font-medium">Type:</span>
            <span className="font-bold text-[#032B22]">{type}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-500 font-medium">Breed:</span>
            <span className="font-bold text-[#032B22]">
              {breed}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500 font-medium">Weight:</span>
            <span className="font-bold text-[#032B22]">{weight}</span>
          </div>

          <div className="flex items-center gap-2 pt-2 text-gray-400">
            <CiLocationOn className="text-xl" />
            <span className="text-sm"> {location} </span>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-100 pt-5">
          <p className="text-[11px] font-bold uppercase tracking-[3px] text-gray-400"> Price</p>
          <div className="mt-2 flex items-center justify-between">
            <h3 className="text-2xl font-extrabold text-[#032B22]"> ৳{price} </h3>
            <Link href={`/all-animal/${id}`}
              className="text-sm font-bold text-[#032B22] underline underline-offset-4 hover:text-green-700">View Details</Link>
          </div>
        </div>

        

      </div>

    </div>
  );
};

export default AnimalCard;