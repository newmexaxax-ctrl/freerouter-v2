"use client";

import { ArrowUpRight } from "lucide-react";
import type { Provider } from "@/data/providers";
import { cn } from "@/lib/utils";

type ProviderCardProps = {
  provider: Provider;
  className?: string;
};

export function ProviderCard({ provider, className }: ProviderCardProps) {
  return (
    <a
      href={provider.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "hover-lift group flex flex-col justify-between gap-8 rounded-[1.75rem] border border-black/[0.08] bg-white p-8 md:p-10",
        "cursor-pointer select-none",
        "transition-[transform,border-color,box-shadow] duration-[var(--duration-ui)] ease-[var(--ease-out)]",
        "active:scale-[0.985] active:duration-[var(--duration-press)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAFA]",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3 min-w-0">
          {provider.rating != null && (
            <p className="text-base font-medium text-black/40 tracking-[-0.01em]">
              {provider.rating}/10
            </p>
          )}
          <h3 className="display-md text-black">{provider.name}</h3>
          <p className="body-lg text-black/55">{provider.tagline}</p>
        </div>
        <span
          className={cn(
            "hover-arrow flex h-12 w-12 shrink-0 items-center justify-center rounded-full",
            "bg-black text-white",
            "transition-transform duration-[var(--duration-ui)] ease-[var(--ease-out)]",
          )}
          aria-hidden
        >
          <ArrowUpRight className="h-5 w-5" strokeWidth={2.25} />
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {provider.models.slice(0, 4).map((model) => (
          <span
            key={model}
            className="rounded-full bg-black/[0.04] px-3.5 py-1.5 text-base tracking-[-0.01em] text-black/60"
          >
            {model}
          </span>
        ))}
      </div>
    </a>
  );
}
