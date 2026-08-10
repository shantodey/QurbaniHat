import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes } from "react";

const variants = {
  default:
    "bg-[#0B3B2E] text-[#F0F7F4] hover:bg-[#0d4a38] active:bg-[#082e23] focus-visible:ring-[#0B3B2E]",
  outline:
    "border border-[#0B3B2E] text-[#0B3B2E] bg-transparent hover:bg-[#0B3B2E] hover:text-[#F0F7F4] focus-visible:ring-[#0B3B2E]",
  accent:
    "bg-[#D4AF37] text-[#0F172A] hover:bg-[#c4a030] active:bg-[#b8952c] focus-visible:ring-[#D4AF37]",
  ghost:
    "text-[#0B3B2E] bg-transparent hover:bg-[#F1F5F0] focus-visible:ring-[#0B3B2E]",
  destructive:
    "bg-[#C0392B] text-white hover:bg-[#a93226] focus-visible:ring-[#C0392B]",
  link: "text-[#0B3B2E] underline-offset-4 hover:underline bg-transparent",
} as const;

const sizes = {
  default: "h-10 px-5 py-2 text-sm",
  sm: "h-8 px-3 text-xs",
  lg: "h-12 px-8 text-base",
  icon: "h-10 w-10",
} as const;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}

export function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[var(--radius)] font-semibold",
        "transition-colors duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
