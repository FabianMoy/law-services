import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const buttonBase = "inline-flex min-h-11 items-center justify-center rounded-full px-6 text-sm font-medium transition duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60";
const variants = {
  primary: "bg-gold text-petrol-950 hover:bg-[#c4a466] shadow-sm hover:shadow-md",
  outline: "border border-white/30 text-white hover:bg-white/10",
  dark: "bg-petrol-900 text-white hover:bg-petrol-800",
};

export function ButtonLink({ href, variant = "primary", children, className }: { href: string; variant?: keyof typeof variants; children: ReactNode; className?: string }) {
  return <a href={href} className={cn(buttonBase, variants[variant], className)}>{children}</a>;
}
