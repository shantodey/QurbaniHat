"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "@/lib/auth-client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  LogOut,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import logo from "@/assets/og.png";

export default function Navbar() {
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0B3B2E]/95 shadow-lg backdrop-blur-md" : "bg-[#0B3B2E]"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image src={logo} alt="QurbaniHat" height={48} width={160} priority />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/all-animal">All Animals</NavLink>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger aschild>
                  <Button variant="ghost" className="text-white hover:bg-white/10 gap-1.5">
                    <span className="max-w-[120px] truncate capitalize">{user.name}</span>
                    <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem aschild>
                    <Link href="/dashboard" className="flex items-center gap-2">
                      <LayoutDashboard className="h-4 w-4 text-[#0B3B2E]" />
                      Dashboard
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleSignOut}
                    className="text-[#C0392B] focus:text-[#C0392B] focus:bg-red-50"
                  >
                    <LogOut className="h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" className="text-white hover:bg-white/10" aschild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button variant="accent" aschild>
                  <Link href="/register">Register</Link>
                </Button>
              </>
            )}
          </div>

          <button
            className="rounded-lg p-2 text-white lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#082e23] lg:hidden">
          <div className="container mx-auto flex flex-col gap-1 px-4 py-4">
            <MobileNavLink href="/" onClick={() => setMobileOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="/all-animal" onClick={() => setMobileOpen(false)}>All Animals</MobileNavLink>
            {user ? (
              <>
                <MobileNavLink href="/dashboard" onClick={() => setMobileOpen(false)}>Dashboard</MobileNavLink>
                <button
                  onClick={() => { handleSignOut(); setMobileOpen(false); }}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-red-400 hover:bg-white/5"
                >
                  <LogOut className="h-4 w-4" /> Sign Out
                </button>
              </>
            ) : (
              <div className="flex gap-2 pt-2">
                <Button variant="ghost" className="flex-1 text-white hover:bg-white/10" aschild>
                  <Link href="/login" onClick={() => setMobileOpen(false)}>Login</Link>
                </Button>
                <Button variant="accent" className="flex-1" aschild>
                  <Link href="/register" onClick={() => setMobileOpen(false)}>Register</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="rounded-lg px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
    >
      {children}
    </Link>
  );
}