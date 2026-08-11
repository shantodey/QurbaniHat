"use client";

import { useState, useEffect } from "react";
import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import logo from "@/assets/og.png";
import toast from "react-hot-toast";
import { ShoppingCart, User, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { addOrder } from "@/api/products";

const BookAnimal = ({ animal }) => {
  const { data: session } = useSession();
  const user = session?.user;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const displayName = animal.title || animal.name;
  
  // animal Object-এর Primary Key হলো `id`
  const { id: productid, title, breed, price, weight } = animal;

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      userid: user?.id || "",
      phone: "",
      address: "",
      productid: productid || "",
      title: title || "",
      breed: breed || "",
      price: price || "",
      weight: weight || "",
    },
  });

  useEffect(() => {
    if (open) {
      reset({
        name: user?.name || "",
        email: user?.email || "",
        userid: user?.id || "",
        phone: "",
        address: "",
        productid: productid || "",
        title: title || "",
        breed: breed || "",
        price: Number(price) || 0,
        weight: Number(weight) || 0,
      });
    }
  }, [open, user, animal, reset]);

  const onSubmit = async (data) => {
    console.log(data);
    
    setLoading(true);
    try {
      await addOrder(data);
      toast.success("Booking confirmed!");
      setOpen(false);
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button size="lg" className="w-full gap-2" onClick={() => setOpen(true)}>
        <ShoppingCart className="h-5 w-5" />
        Book This Animal
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 overflow-hidden max-w-md">
          <div className="bg-[#0B3B2E] px-6 py-8 text-center">
            <Image src={logo} alt="logo" height={48} width={160} priority className="mx-auto mb-4" />
            <DialogTitle className="text-white text-lg font-semibold"> Confirm Your Booking </DialogTitle>
            <DialogDescription className="mt-1.5 text-white/70 text-sm"> Complete the form to reserve{" "} <span className="font-semibold text-[#D4AF37]">{displayName}</span></DialogDescription>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-[var(--muted-foreground)]">
                  <User className="h-3.5 w-3.5 text-[#0B3B2E]" /> Full Name
                </label>
                <Input {...register("name", { required: "Name is required" })} placeholder="Your name" />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-1.5">
                <label className="flex items-center gap-1.5 text-xs font-semibold text-[var(--muted-foreground)]"> <Mail className="h-3.5 w-3.5 text-[#0B3B2E]" /> Email</label>
                <Input type="email" disabled {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email", }, })} placeholder="Email" />
                {errors.email && (<p className="text-red-500 text-xs">{errors.email.message}</p>)}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs font-semibold text-[var(--muted-foreground)]">
                <Phone className="h-3.5 w-3.5 text-[#0B3B2E]" /> Phone
              </label>
              <Input type="tel" {...register("phone", { required: "Phone number is required" })} placeholder="+880 1XXX XXXXXX" />
              {errors.phone && (<p className="text-red-500 text-xs">{errors.phone.message}</p>)}
            </div>

            <div className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-xs font-semibold text-[var(--muted-foreground)]">
                <MapPin className="h-3.5 w-3.5 text-[#0B3B2E]" /> Delivery Address
              </label>
              <textarea  {...register("address", { required: "Delivery address is required" })} placeholder="Your full delivery address..." rows={3}
                className="w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--input-bg)] px-4 py-2.5 text-sm resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3B2E]" />
              {errors.address && (<p className="text-red-500 text-xs">{errors.address.message}</p>)}
            </div>

            <div className="flex items-center justify-between rounded-xl bg-[var(--muted)] px-5 py-3">
              <span className="text-sm text-[var(--muted-foreground)]">Total Amount</span>
              <span className="text-2xl font-black text-[#032B22]">৳{Number(animal.price).toLocaleString()} </span>
            </div>

            <Button type="submit" size="lg" className="w-full gap-2" disabled={loading} >
              <CheckCircle className="h-5 w-5" />
              {loading ? "Processing..." : "Confirm Booking"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookAnimal;