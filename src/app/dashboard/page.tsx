"use client";

import { useState } from "react";
import { useSession } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import {
  ShoppingBag,
  Store,
  Users,
  PackagePlus,
  LayoutDashboard,
} from "lucide-react";

interface ProductFormInput {
  title: string;
  price: number;
  breed: string;
  weight: number;
  description: string;
}

interface Purchase {
  id: string;
  title: string;
  price: number;
  date: string;
  status: "Delivered" | "Pending" | "Cancelled";
}

interface Buyer {
  id: string;
  buyerName: string;
  productTitle: string;
  price: number;
  date: string;
}

const demoPurchases: Purchase[] = [
  { id: "1", title: "Black Bengal Goat", price: 25000, date: "2026-08-01", status: "Delivered" },
  { id: "2", title: "Australian Bull", price: 180000, date: "2026-08-05", status: "Pending" },
];

const demoBuyers: Buyer[] = [
  { id: "101", buyerName: "Rahim Uddin", productTitle: "Deshi Red Bull", price: 150000, date: "2026-08-02" },
  { id: "102", buyerName: "Karim Chowdhury", productTitle: "Jamunapari Goat", price: 32000, date: "2026-08-04" },
];

const statusBadge = (status: Purchase["status"]) => {
  const map: Record<Purchase["status"], "success" | "warning" | "destructive"> = {
    Delivered: "success",
    Pending: "warning",
    Cancelled: "destructive",
  };
  return <Badge variant={map[status]}>{status}</Badge>;
};

export default function DashboardPage() {
  const { data: session } = useSession();
  const user = session?.user;
  const [tab, setTab] = useState<"buyer" | "seller">("buyer");
  const [showForm, setShowForm] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormInput>();

  const onAddProductSubmit = (data: ProductFormInput) => {
    toast.success("Product saved successfully!");
    reset();
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-[var(--background)] px-4 py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Header */}
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0B3B2E]">
              <LayoutDashboard className="h-5 w-5 text-[#D4AF37]" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#032B22]">
                {user?.name || "Dashboard"}
              </h1>
              <p className="text-xs text-[var(--muted-foreground)]">{user?.email}</p>
            </div>
          </div>

          {/* Tab toggle */}
          <div className="flex rounded-xl border border-[var(--border)] bg-[var(--muted)] p-1">
            <button
              onClick={() => setTab("buyer")}
              aria-selected={tab === "buyer"}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-150 ${
                tab === "buyer"
                  ? "bg-white shadow text-[#0B3B2E]"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              }`}
            >
              <ShoppingBag className="h-3.5 w-3.5" /> Buyer
            </button>
            <button
              onClick={() => setTab("seller")}
              aria-selected={tab === "seller"}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-150 ${
                tab === "seller"
                  ? "bg-white shadow text-[#0B3B2E]"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              }`}
            >
              <Store className="h-3.5 w-3.5" /> Seller
            </button>
          </div>
        </div>

        {/* Buyer view */}
        {tab === "buyer" && (
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-[#0B3B2E]" />
                <CardTitle>Purchase History</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Animal</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {demoPurchases.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-semibold">{item.title}</TableCell>
                      <TableCell>৳{item.price.toLocaleString()}</TableCell>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>{statusBadge(item.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {/* Seller view */}
        {tab === "seller" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <PackagePlus className="h-5 w-5 text-[#0B3B2E]" />
                <h2 className="text-lg font-bold text-[#032B22]">Seller Panel</h2>
              </div>
              <Button onClick={() => setShowForm(!showForm)} variant={showForm ? "ghost" : "default"}>
                {showForm ? "Close Form" : "Add New Product"}
              </Button>
            </div>

            {showForm && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Add New Animal</CardTitle>
                </CardHeader>
                <CardContent>
                  <form
                    onSubmit={handleSubmit(onAddProductSubmit)}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium">Title / Name</label>
                        <Input
                          {...register("title", { required: "Title is required" })}
                          placeholder="e.g. Deshi Red Bull"
                        />
                        {errors.title && (
                          <p className="text-red-500 text-xs">{errors.title.message}</p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium">Price (৳)</label>
                        <Input
                          type="number"
                          {...register("price", {
                            required: "Price is required",
                            min: { value: 1, message: "Price must be greater than 0" },
                          })}
                          placeholder="e.g. 150000"
                        />
                        {errors.price && (
                          <p className="text-red-500 text-xs">{errors.price.message}</p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium">Breed</label>
                        <Input
                          {...register("breed", { required: "Breed is required" })}
                          placeholder="e.g. Sahiwal"
                        />
                        {errors.breed && (
                          <p className="text-red-500 text-xs">{errors.breed.message}</p>
                        )}
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium">Weight (kg)</label>
                        <Input
                          type="number"
                          {...register("weight", {
                            required: "Weight is required",
                            min: { value: 1, message: "Weight must be greater than 0" },
                          })}
                          placeholder="e.g. 280"
                        />
                        {errors.weight && (
                          <p className="text-red-500 text-xs">{errors.weight.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium">Description</label>
                      <textarea
                        {...register("description", { required: "Description is required" })}
                        placeholder="Describe the animal..."
                        rows={3}
                        className="w-full rounded-[var(--radius)] border border-[var(--border)] bg-[var(--input-bg)] px-4 py-2.5 text-sm resize-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3B2E]"
                      />
                      {errors.description && (
                        <p className="text-red-500 text-xs">{errors.description.message}</p>
                      )}
                    </div>
                    <Button type="submit" className="w-full">Save Product (Demo)</Button>
                  </form>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#0B3B2E]" />
                  <CardTitle>Your Buyers</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Buyer</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {demoBuyers.map((buyer) => (
                      <TableRow key={buyer.id}>
                        <TableCell className="font-semibold">{buyer.buyerName}</TableCell>
                        <TableCell>{buyer.productTitle}</TableCell>
                        <TableCell>৳{buyer.price.toLocaleString()}</TableCell>
                        <TableCell>{buyer.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
