import BookAnimal from '@/component/BookAnimal';
import { auth } from '@/lib/auth';
import { allAnimalId } from '@/lib/data';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import { FaMapMarkerAlt, FaWeightHanging, FaCalendarAlt, FaDna, FaShieldAlt, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';

const Page = async ({ params }) => {
  const { id } = await params;
  const animal = await allAnimalId(id);
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const categoryColor = animal.category === 'Large Animal'
    ? 'badge-warning'
    : 'badge-success';

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">


          <div className="flex flex-col gap-4">
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


            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <h3 className="card-title text-base-content">
                  <FaInfoCircle className="text-info" /> About this Animal
                </h3>
                <p className="text-base-content/70">{animal.description}</p>
              </div>
            </div>
          </div>


          <div className="flex flex-col gap-5">
            <div>
              <span className="badge badge-outline badge-success gap-2 py-3 px-4 text-sm font-semibold">
                <FaShieldAlt className="w-4 h-4" /> VERIFIED HEALTHY </span>
            </div>

            <div>
              <h1 className="text-4xl font-extrabold text-base-content leading-tight">  {animal.name}</h1>
              <div className="flex items-center gap-1 mt-2 text-base-content/60">
                <FaMapMarkerAlt className="w-4 h-4" />
                <span className="text-sm">{animal.location}, Bangladesh</span>
              </div>
            </div>

            <div className="card bg-base-100 shadow-sm border border-base-300">
              <div className="card-body py-4 px-5">
                <p className="text-xs font-semibold tracking-widest text-base-content/50 uppercase"> Fixed Price</p>
                <p className="text-4xl font-black text-base-content">৳{animal.price.toLocaleString()} </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="card bg-base-100 border border-base-300 shadow-sm">
                <div className="card-body py-4 px-5 gap-1">
                  <FaWeightHanging className="w-5 h-5 text-base-content/60" />
                  <p className="text-xs font-semibold tracking-widest text-base-content/50 uppercase mt-1"> Weight </p>
                  <p className="text-xl font-bold text-base-content">{animal.weight} kg</p>
                </div>
              </div>

              <div className="card bg-base-100 border border-base-300 shadow-sm">
                <div className="card-body py-4 px-5 gap-1">
                  <FaCalendarAlt className="w-5 h-5 text-base-content/60" />
                  <p className="text-xs font-semibold tracking-widest text-base-content/50 uppercase mt-1">  Age</p>
                  <p className="text-xl font-bold text-base-content">
                    {animal.age} {animal.age === 1 ? 'Year' : 'Years'}
                  </p>
                </div>
              </div>

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
            {user?
            <BookAnimal  animal={animal}></BookAnimal>
            :

            <Link className="btn bg-[#1a3a2a] hover:bg-[#142e22] text-white btn-lg w-full rounded-2xl font-bold text-base gap-2 border-none" href={'/login'}><FaCheckCircle className="w-5 h-5" />Log IN to  Confirm Booking</Link>
          }

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