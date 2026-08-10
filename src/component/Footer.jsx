import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/og.png";
import { MapPin, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B3B2E] text-white">
      <div className="container mx-auto px-5 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src={Logo} alt="QurbaniHat Logo" width={180} height={80} priority />
            <p className="mt-4 text-sm leading-7 text-white/60">
              QurbaniHat is a trusted livestock booking platform where users can explore
              healthy cows, goats, and other Qurbani animals from across Bangladesh.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-[#D4AF37]">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/all-animal", label: "All Animals" },
                { href: "/login", label: "Login" },
                { href: "/register", label: "Register" },
              ].map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm text-white/60 transition-colors duration-200 hover:text-[#D4AF37]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-[#D4AF37]">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 flex-shrink-0 text-[#D4AF37]" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 flex-shrink-0 text-[#D4AF37]" />
                <span>support@qurbanihat.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 flex-shrink-0 text-[#D4AF37]" />
                <span>+880 1700-000000</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-[#D4AF37]">
              Follow Us
            </h3>
            <p className="mb-5 text-sm leading-6 text-white/60">
              Follow our social platforms for featured livestock and Qurbani offers.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: "https://www.facebook.com/shantodey4672", Icon: FaFacebookF },
                { href: "https://www.instagram.com/shanto_dey_/", Icon: FaInstagram },
                { href: "https://www.youtube.com/@ShantoDey4672", Icon: FaYoutube },
              ].map(({ href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-200 hover:border-[#D4AF37] hover:text-[#D4AF37]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © 2026 QurbaniHat. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;