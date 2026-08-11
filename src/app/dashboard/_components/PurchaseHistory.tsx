"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { ShoppingBag, Loader2 } from "lucide-react";

interface OrderItem {
  _id?: string;
  id?: string;
  ordertitel?: string;
  title?: string;
  orderprice?: number;
  price?: number;
  orderweight?: number;
  weight?: number;
  date?: string;
  createdAt?: string;
}

interface PurchaseHistoryProps {
  orders: OrderItem[];
  loading: boolean;
}

export default function PurchaseHistory({ orders, loading }: PurchaseHistoryProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <ShoppingBag className="h-5 w-5 text-[#0B3B2E]" />
          <CardTitle>Purchase History</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center justify-center gap-2 py-8 text-sm text-[var(--muted-foreground)]">
            <Loader2 className="h-4 w-4 animate-spin text-[#0B3B2E]" />
            Loading purchase data...
          </div>
        ) : orders.length === 0 ? (
          <div className="py-8 text-center text-sm text-[var(--muted-foreground)]">
            No purchases found.
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Animal</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Weight</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((item, index) => {
                const title = item.ordertitel || item.title || "N/A";
                const price = item.orderprice ?? item.price ?? 0;
                const weight = item.orderweight;
                const dateStr = item.createdAt
                  ? new Date(item.createdAt).toLocaleDateString()
                  : item.date || "N/A";

                return (
                  <TableRow key={item._id || item.id || index}>
                    <TableCell className="font-semibold">{title}</TableCell>
                    <TableCell>৳{Number(price).toLocaleString()}</TableCell>
                    <TableCell>{dateStr}</TableCell>
                    <TableCell>{weight}</TableCell>
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
