"use client";

import { motion } from "motion/react";
import { ShieldCheck, BadgeCheck, MapPin, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: BadgeCheck,
    title: "Verified Animals",
    description: "All animals are verified healthy and meet Qurbani standards.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Pricing",
    description: "Clear pricing with no hidden charges. What you see is what you pay.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Farm Locations",
    description: "Partner with verified farms across Bangladesh with proven quality.",
  },
  {
    icon: Smartphone,
    title: "Simple Online Booking",
    description: "Easy booking process with secure confirmation in minutes.",
  },
];

const ExtraSections = () => {
  return (
    <section className="bg-[var(--background)] px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full bg-[#F1F5F0] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#0B3B2E]">
            Why QurbaniHat
          </span>
          <h2 className="mt-4 text-4xl font-bold text-[#032B22] lg:text-5xl">
            Your Trusted Qurbani Partner
          </h2>
          <p className="mt-4 text-lg text-[var(--muted-foreground)]">
            Halal livestock booking, simplified.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              custom={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <Card className="h-full border-t-2 border-t-[#0B3B2E] transition-shadow duration-300 hover:shadow-lg">
                <CardContent className="flex flex-col items-center py-10 text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0B3B2E]">
                    <feat.icon className="h-8 w-8 text-[#D4AF37]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-[#032B22]">{feat.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {feat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraSections;