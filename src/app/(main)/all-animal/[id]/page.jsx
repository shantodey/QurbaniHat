import { allAnimalId } from '@/lib/data';
import React from 'react';
import { FaMapMarkerAlt, FaWeightHanging, FaCalendarAlt, FaDna, FaShoppingCart, FaShieldAlt, FaInfoCircle } from 'react-icons/fa';

const Page = async ({ params }) => {
  const { id } = await params;
  const animal = await allAnimalId(id);

  const categoryColor = animal.category === 'Large Animal'
    ? 'badge-warning'
    : 'badge-success';

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4">
            {/* Image Card */}
            <div className="card bg-base-100 shadow-xl overflow-hidden">
              <figure className="relative">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className={`badge badge-lg font-semibold ${categoryColor} text-white px-4 py-3`}>
                    {animal.category}
                  </span>
                </div>
              </figure>
            </div>

            {/* About Card */}
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h3 className="card-title text-base-content">
                  <FaInfoCircle className="text-info" /> About this Animal
                </h3>
                <p className="text-base-content/70">{animal.description}</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-5">

            {/* Verified Badge */}
            <div>
              <span className="badge badge-outline badge-success gap-2 py-3 px-4 text-sm font-semibold">
                <FaShieldAlt className="w-4 h-4" />
                VERIFIED HEALTHY
              </span>
            </div>

            {/* Name & Location */}
            <div>
              <h1 className="text-4xl font-extrabold text-base-content leading-tight">
                {animal.name}
              </h1>
              <div className="flex items-center gap-1 mt-2 text-base-content/60">
                <FaMapMarkerAlt className="w-4 h-4" />
                <span className="text-sm">{animal.location}, Bangladesh</span>
              </div>
            </div>

            {/* Price Box */}
            <div className="card bg-base-100 shadow-sm border border-base-300">
              <div className="card-body py-4 px-5">
                <p className="text-xs font-semibold tracking-widest text-base-content/50 uppercase">
                  Fixed Price
                </p>
                <p className="text-4xl font-black text-base-content">
                  ৳{animal.price.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {/* Weight */}
              <div className="card bg-base-100 border border-base-300 shadow-sm">
                <div className="card-body py-4 px-5 gap-1">
                  <FaWeightHanging className="w-5 h-5 text-base-content/60" />
                  <p className="text-xs font-semibold tracking-widest text-base-content/50 uppercase mt-1">
                    Weight
                  </p>
                  <p className="text-xl font-bold text-base-content">{animal.weight} kg</p>
                </div>
              </div>

              {/* Age */}
              <div className="card bg-base-100 border border-base-300 shadow-sm">
                <div className="card-body py-4 px-5 gap-1">
                  <FaCalendarAlt className="w-5 h-5 text-base-content/60" />
                  <p className="text-xs font-semibold tracking-widest text-base-content/50 uppercase mt-1">
                    Age
                  </p>
                  <p className="text-xl font-bold text-base-content">
                    {animal.age} {animal.age === 1 ? 'Year' : 'Years'}
                  </p>
                </div>
              </div>

              {/* Breed */}
              <div className="card bg-base-100 border border-base-300 shadow-sm col-span-2">
                <div className="card-body py-4 px-5 gap-1">
                  <FaDna className="w-5 h-5 text-base-content/60" />
                  <p className="text-xs font-semibold tracking-widest text-base-content/50 uppercase mt-1">
                    Breed Type
                  </p>
                  <p className="text-xl font-bold text-base-content">{animal.breed}</p>
                </div>
              </div>
            </div>

            {/* Book Button */}
            <button className="btn btn-success btn-lg w-full text-white text-base font-bold gap-2 rounded-xl">
              <FaShoppingCart className="w-5 h-5" />
              Book This Animal
            </button>

            {/* Security Note */}
            <div className="flex items-center justify-center gap-2 text-base-content/50 text-sm">
              <FaShieldAlt className="w-4 h-4" />
              <span>Secure payment &amp; farm verification guaranteed</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;