"use client";

import { useSession } from "@/lib/auth-client";
import { LayoutDashboard, ShoppingBag, Store, PackagePlus } from "lucide-react";

type Tab = "purchases" | "sales" | "post";

interface DashboardHeaderProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export default function DashboardHeader({ activeTab, onTabChange }: DashboardHeaderProps) {
  const { data: session } = useSession();
  const user = session?.user;

  const tabs: { key: Tab; label: string; icon: React.ReactNode }[] = [
    { key: "purchases", label: "Purchases", icon: <ShoppingBag className="h-3.5 w-3.5" /> },
    { key: "sales", label: "Sales", icon: <Store className="h-3.5 w-3.5" /> },
    { key: "post", label: "Post Product", icon: <PackagePlus className="h-3.5 w-3.5" /> },
  ];

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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

      <div className="flex rounded-xl border border-[var(--border)] bg-[var(--muted)] p-1">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => onTabChange(t.key)}
            aria-selected={activeTab === t.key}
            className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-150 ${
              activeTab === t.key
                ? "bg-white shadow text-[#0B3B2E]"
                : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            }`}
          >
            {t.icon} {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}
