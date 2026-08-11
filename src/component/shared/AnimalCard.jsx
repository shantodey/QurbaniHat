"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const AnimalCard = ({ animal }) => {
  const { name, price, type, weight, breed, image, location, id, title } = animal;
  const displayName = name || title;
  const isLarge = type === "Cow" || type === "Bull";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <Card className="group flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
        <div className="relative h-56 overflow-hidden">
          <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.4 }} className="h-full w-full">
            <Image src={image} alt={displayName} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw" />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <div className="absolute left-3 top-3">
            <Badge variant={isLarge ? "default" : "accent"}>
              {isLarge ? "Large Animal" : "Small Animal"}
            </Badge>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h2 className="mb-3 text-xl font-bold leading-tight text-[#032B22]">
            {displayName}
          </h2>

          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-[var(--muted-foreground)]">Type</span>
              <span className="font-semibold text-[#032B22]">{type}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[var(--muted-foreground)]">Breed</span>
              <span className="font-semibold text-[#032B22]">{breed}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[var(--muted-foreground)]">Weight</span>
              <span className="font-semibold text-[#032B22]">{weight} kg</span>
            </div>
            {location && (
              <div className="flex items-center gap-1.5 pt-1 text-[var(--muted-foreground)]">
                <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                <span className="truncate text-xs">{location}</span>
              </div>
            )}
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-[var(--border)] pt-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--muted-foreground)]">
                Price
              </p>
              <p className="text-2xl font-black text-[#032B22]">
                ৳{Number(price).toLocaleString()}
              </p>
            </div>
            <Button variant="outline" size="sm">
              <Link href={`/all-animal/${id}`}>View Details</Link>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default AnimalCard;