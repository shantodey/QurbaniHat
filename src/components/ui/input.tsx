import { cn } from "@/lib/utils";
import { type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-[var(--radius)] border border-[var(--border)]",
        "bg-[var(--input-bg)] px-4 py-2.5 text-sm text-[var(--foreground)]",
        "placeholder:text-[var(--muted-foreground)]",
        "transition-colors duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3B2E] focus-visible:ring-offset-1",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "invalid:border-[#C0392B] invalid:focus-visible:ring-[#C0392B]",
        className
      )}
      {...props}
    />
  );
}
