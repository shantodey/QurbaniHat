import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navber from "@/component/shared/Navber";
import { Toaster } from "react-hot-toast";



const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight:["400","500","600","700","800"]
})
export const metadata = {
  title: "QurbaniHat",
  description: "Livestock Booking Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme='light'
      className={` h-full antialiased`}
    >
      <body className={`min-h-full flex flex-col ${poppins.className}`}>
        <Navber></Navber>
        {children}
        <Toaster
          position="top-center"
          reverseOrder={false}
        />

      </body>

    </html>
  );
}
