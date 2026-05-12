import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/og.png";
import {FaFacebookF, FaInstagram, FaYoutube, FaPhoneAlt, FaMapMarkerAlt,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#0B3B2E] text-white">
      <div className="container mx-auto px-5 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Image src={Logo}  alt="QurbaniHat Logo" width={220} height={100} priority/>
            <p className="mt-4 text-sm leading-7 text-gray-300">
              QurbaniHat is a trusted livestock booking platform where users
              can explore healthy cows, goats, and other Qurbani animals from
              different locations in Bangladesh.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-5">  Quick Links </h2>
            <div className="flex flex-col gap-3 text-gray-300">
              <Link href="/" className="hover:text-yellow-400 duration-300"> Home </Link>
              <Link href="/animals"className="hover:text-yellow-400 duration-300"> All Animals</Link>
              <Link href="/login" className="hover:text-yellow-400 duration-300" > Login</Link>
              <Link href="/register"  className="hover:text-yellow-400 duration-300">  Register</Link>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-5"> Contact Info </h2>
            <div className="space-y-4 text-gray-300 text-sm">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-yellow-400" /><p>Dhaka, Bangladesh</p>
              </div>
              <div className="flex items-center gap-3">
                <MdEmail className="text-yellow-400 text-lg" /><p>support@qurbanihat.com</p>
              </div>
              <div className="flex items-center gap-3"> <FaPhoneAlt className="text-yellow-400 text-sm" /><p>+880 1700-000000</p> </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-5"> Follow Us</h2>
            <p className="text-sm text-gray-300 leading-6 mb-5"> Follow our social platforms to get updates about featured  livestock and Qurbani offers. </p>
            <div className="flex items-center gap-4">
              <a  href="https://www.facebook.com/shantodey4672"  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-yellow-400 hover:text-black duration-300" > <FaFacebookF /></a>
              <a href="https://www.instagram.com/shanto_dey_/" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-yellow-400 hover:text-black duration-300"> <FaInstagram /></a>
              <a href="https://www.youtube.com/@ShantoDey4672" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-yellow-400 hover:text-black duration-300"> <FaYoutube /> </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-gray-400">
          <p>  © 2026 QurbaniHat. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;