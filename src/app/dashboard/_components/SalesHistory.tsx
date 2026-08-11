"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Users, Loader2 } from "lucide-react";

interface OrderItem {
  _id?: string;
  id?: string;
  username?: string;
  useremail?: string;
  ordertitel?: string;
  title?: string;
  orderprice?: number;
  price?: number;
  date?: string;
  createdAt?: string;
}

interface SalesHistoryProps {
  orders: OrderItem[];
  loading: boolean;
}

export default function SalesHistory({ orders, loading }: SalesHistoryProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-[#0B3B2E]" />
          <CardTitle>Your Buyers</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center justify-center gap-2 py-8 text-sm text-[var(--muted-foreground)]">
            <Loader2 className="h-4 w-4 animate-spin text-[#0B3B2E]" />
            Loading buyer data...
          </div>
        ) : orders.length === 0 ? (
          <div className="py-8 text-center text-sm text-[var(--muted-foreground)]">
            No buyers found yet.
          </div>
        ) : (
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
              {orders.map((item, index) => {
                const buyerName = item.username || item.useremail || "N/A";
                const productTitle = item.ordertitel || item.title || "N/A";
                const price = item.orderprice ?? item.price ?? 0;
                const dateStr = item.createdAt
                  ? new Date(item.createdAt).toLocaleDateString()
                  : item.date || "N/A";

                return (
                  <TableRow key={item._id || item.id || index}>
                    <TableCell className="font-semibold">{buyerName}</TableCell>
                    <TableCell>{productTitle}</TableCell>
                    <TableCell>৳{Number(price).toLocaleString()}</TableCell>
                    <TableCell>{dateStr}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}
