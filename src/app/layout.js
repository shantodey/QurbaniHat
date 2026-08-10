import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navber from "@/component/shared/Navber";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata = {
  title: "QurbaniHat — Trusted Qurbani Livestock Marketplace",
  description: "Explore verified cows, goats, bulls and livestock for Eid-ul-Adha. Book your Qurbani animal online with confidence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`min-h-full flex flex-col ${poppins.variable} ${playfair.variable} ${poppins.className}`}>
        <Navber />
        <main className="flex-1">{children}</main>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              borderRadius: "var(--radius)",
              background: "#0B3B2E",
              color: "#F0F7F4",
              fontSize: "14px",
            },
          }}
        />
      </body>
    </html>
  );
}
