"use client";

import { useEffect, useState } from "react";
import { getOrderData } from "@/api/products";
import DashboardHeader from "./_components/DashboardHeader";
import PurchaseHistory from "./_components/PurchaseHistory";
import SalesHistory from "./_components/SalesHistory";
import AddProductForm from "./_components/AddProductForm";

type Tab = "purchases" | "sales" | "post";

interface OrderItem {
  _id?: string;
  id?: string;
  useremail?: string;
  userid?: string;
  username?: string;
  userphone?: number;
  useraddress?: string;
  productid?: string;
  ordertitel?: string;
  title?: string;
  orderbreed?: string;
  breed?: string;
  orderprice?: number;
  price?: number;
  orderweight?: number;
  weight?: number;
  date?: string;
  createdAt?: string;
}

export default function DashboardPage() {
  const [tab, setTab] = useState<Tab>("purchases");
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const data = await getOrderData();
        setOrders(data || []);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)] px-4 py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <DashboardHeader activeTab={tab} onTabChange={setTab} />

        {tab === "purchases" && (
          <PurchaseHistory orders={orders} loading={loading} />
        )}

        {tab === "sales" && (
          <SalesHistory orders={orders} loading={loading} />
        )}

        {tab === "post" && <AddProductForm />}
      </div>
    </div>
  );
}
