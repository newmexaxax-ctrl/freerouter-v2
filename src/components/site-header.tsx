"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/providers", label: "Providers" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="glass-header sticky top-0 z-50 bg-white/60 backdrop-blur-[20px] backdrop-saturate-[180%]">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="text-[1.2rem] font-semibold tracking-[-0.03em] text-black cursor-pointer transition-opacity duration-[var(--duration-ui)] ease-[var(--ease-out)] hover:opacity-60 active:opacity-50"
        >
          FreeRouter
        </Link>

        <nav className="flex items-center gap-0.5 sm:gap-1" aria-label="Main">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3.5 py-2 text-[1.05rem] font-medium tracking-[-0.015em] cursor-pointer",
                  "transition-colors duration-[var(--duration-ui)] ease-[var(--ease-out)]",
                  "active:scale-[0.97]",
                  active ? "text-black" : "text-black/40 hover:text-black",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
