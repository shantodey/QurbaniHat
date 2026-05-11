'use client'
import { useSession } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import { FaShoppingCart, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle, FaTimes } from 'react-icons/fa';

const BookAnimal = ({ animal }) => {
  const { data: session, } = useSession() 
  const user=session?.user;   
    const conFormBooking=()=>{
        toast.success(' Booking Confron')
        document.getElementById('booking_modal').close()
    }
    return (
        <>
            <button
                onClick={() => document.getElementById('booking_modal').showModal()}
                className="btn btn-success btn-lg w-full text-white text-base font-bold gap-2 rounded-xl"
            >
                <FaShoppingCart className="w-5 h-5" />
                Book This Animal
            </button>

            <dialog id="booking_modal" className="modal">
                <div className="modal-box p-0 overflow-hidden max-w-md rounded-3xl">

                    <div className="bg-[#1a3a2a] text-white px-6 pt-8 pb-6 text-center relative">
                        <form method="dialog">
                            <button className="btn btn-circle btn-sm absolute top-4 right-4 bg-white/20 hover:bg-white/30 border-none text-white">
                                <FaTimes className="w-3 h-3" />
                            </button>
                        </form>

                        {/* Logo */}
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-lg">
                                🐄
                            </div>
                            <span className="text-2xl font-bold tracking-wide">Qurbani<span className="text-green-400">.</span></span>
                        </div>

                        <p className="text-white/80 text-sm leading-snug">
                            Complete the form to confirm your booking for{' '}
                            <span className="text-white font-semibold">{animal.name}</span>
                        </p>
                    </div>


                    <div className="bg-white px-6 py-6 flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-bold text-base-content flex items-center gap-1">
                                    <FaUser className="text-[#1a3a2a]" /> Full Name
                                </label>
                                <input
                                    type="text"
                                    defaultValue={user?.name}
                                    placeholder="Your full name"
                                    className="input input-bordered input-sm bg-[#f5f5f0] border-none rounded-xl w-full focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-bold text-base-content flex items-center gap-1">
                                    <FaEnvelope className="text-[#1a3a2a]" /> Email Address
                                </label>
                                <input
                                    type="email"
                                     defaultValue={user?.email}
                                    className="input input-bordered input-sm bg-[#f5f5f0] border-none rounded-xl w-full focus:outline-none"
                                />
                            </div>
                        </div>


                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-bold text-base-content flex items-center gap-1">
                                <FaPhone className="text-[#1a3a2a]" /> Phone Number
                            </label>
                            <input
                                type="tel"
                                placeholder="+880 1XXX XXXXXX"
                                className="input input-bordered bg-[#f5f5f0] border-none rounded-xl w-full focus:outline-none"
                            />
                        </div>


                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-bold text-base-content flex items-center gap-1">
                                <FaMapMarkerAlt className="text-[#1a3a2a]" /> Delivery Address
                            </label>
                            <textarea
                                placeholder="Your full delivery address..."
                                rows={3}
                                className="textarea bg-[#f5f5f0] border-none rounded-xl w-full focus:outline-none resize-none"
                            />
                        </div>


                        <div className="flex items-center justify-between bg-[#f5f5f0] rounded-2xl px-5 py-3">
                            <span className="text-sm text-base-content/60">Total Amount:</span>
                            <span className="text-2xl font-black text-base-content">
                                ৳{animal.price}
                            </span>
                        </div>

                        <button  onClick={conFormBooking} className="btn bg-[#1a3a2a] hover:bg-[#142e22] text-white btn-lg w-full rounded-2xl font-bold text-base gap-2 border-none">
                            <FaCheckCircle className="w-5 h-5" />
                            Confirm Booking
                        </button>
                    </div>
                </div>

                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};

export default BookAnimal;