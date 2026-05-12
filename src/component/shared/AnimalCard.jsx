 'use client'
 import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { CiLocationOn } from "react-icons/ci";

const AnimalCard = ({ animal }) => {
  const { name, price, type, weight, image, location, breed, id } = animal;

  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="group flex h-full flex-col overflow-hidden rounded-[24px] bg-white shadow-lg transition-all duration-300 hover:shadow-2xl">
      <figure className="relative h-[230px] overflow-hidden">
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="absolute right-4 top-4 z-10 rounded-full bg-[#0B3B2E] px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-white shadow-md">
          {type === "Cow" ? "Large Animal" : "Small Animal"}
        </motion.div>

        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
          <Image className="h-full w-full object-cover" src={image} alt={name} height={400} width={500} />
        </motion.div>
      </figure>

      <div className="flex flex-1 flex-col p-6">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className="mb-5 text-[25px] font-bold leading-tight text-[#032B22]">
          {name}
        </motion.h2>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-500">Type:</span>
            <span className="font-bold text-[#032B22]">{type}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-500">Breed:</span>
            <span className="font-bold text-[#032B22]">{breed}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-500">Weight:</span>
            <span className="font-bold text-[#032B22]">{weight}</span>
          </div>

          <motion.div whileHover={{ x: 5 }} className="flex items-center gap-2 pt-2 text-gray-400">
            <CiLocationOn className="text-xl" />
            <span className="text-sm">{location}</span>
          </motion.div>
        </div>

        <div className="mt-6 border-t border-gray-100 pt-5">
          <p className="text-[11px] font-bold uppercase tracking-[3px] text-gray-400">Price</p>

          <div className="mt-2 flex items-center justify-between">
            <motion.h3 whileHover={{ scale: 1.05 }} className="text-2xl font-extrabold text-[#032B22]">
              ৳{price}
            </motion.h3>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link href={`/all-animal/${id}`} className="text-sm font-bold text-[#032B22] underline underline-offset-4 hover:text-green-700">
                View Details
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimalCard;