import { cn } from "@/lib/utils";

const variants = {
  default: "bg-[#0B3B2E] text-[#F0F7F4]",
  accent: "bg-[#D4AF37] text-[#0F172A]",
  secondary: "bg-[#F1F5F0] text-[#0B3B2E]",
  outline: "border border-[#0B3B2E] text-[#0B3B2E] bg-transparent",
  success: "bg-emerald-100 text-emerald-800",
  warning: "bg-amber-100 text-amber-800",
  destructive: "bg-red-100 text-red-700",
} as const;

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof variants;
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
