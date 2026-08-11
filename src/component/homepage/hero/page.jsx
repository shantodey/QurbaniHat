"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, BadgeCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero.png";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F7F8F3]">
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-emerald-100/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-100/50 blur-3xl"
      />

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#0B3B2E]/10 px-5 py-2"
            >
              <span className="h-2 w-2 rounded-full bg-[#0B3B2E]" />
              <span className="text-sm font-semibold text-[#0B3B2E]">
                Trusted Qurbani Marketplace in Bangladesh
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="max-w-xl text-4xl font-black leading-tight text-[#032B22] sm:text-5xl lg:text-6xl"
            >
              Find Healthy Qurbani Animals From Trusted Farms
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="mt-6 max-w-lg text-lg leading-8 text-[var(--muted-foreground)]"
            >
              Explore verified cows, goats, bulls, and livestock for Eid-ul-Adha.
              Compare prices and book your Qurbani animal online with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button size="lg" className="gap-2">
                <Link href="/all-animal">
                  Browse Animals <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href="/all-animal">Qurbani Tips</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-10"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B3B2E]/10">
                  <BadgeCheck className="h-5 w-5 text-[#0B3B2E]" />
                </div>
                <div>
                  <p className="font-bold text-[#032B22]">Verified Animals</p>
                  <p className="text-xs text-[var(--muted-foreground)]">Healthy and farm checked</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37]/15">
                  <Star className="h-5 w-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="font-bold text-[#032B22]">Fair Pricing</p>
                  <p className="text-xs text-[var(--muted-foreground)]">Directly from trusted sellers</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-3xl bg-white p-4 shadow-2xl"
            >
              <Image
                src={hero}
                className="h-[480px] w-full max-w-lg rounded-2xl object-cover"
                alt="Qurbani animal"
                priority
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
                className="absolute left-8 top-8 rounded-2xl bg-white/95 px-5 py-4 shadow-xl backdrop-blur"
              >
                <p className="text-3xl font-black text-[#0B3B2E]">1000+</p>
                <p className="text-sm text-[var(--muted-foreground)]">Animals Available</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 }}
                className="absolute bottom-8 right-8 rounded-2xl bg-[#0B3B2E] px-6 py-4 text-white shadow-xl"
              >
                <p className="text-lg font-bold">Trusted Farms</p>
                <p className="mt-0.5 text-xs text-white/70">Healthy & Verified Livestock</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;