import type { Metadata } from "next";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { ProviderCard } from "@/components/provider-card";
import { providers } from "@/data/providers";

export const metadata: Metadata = {
  title: "Providers",
  description: "All curated free AI providers.",
};

export default function ProvidersPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-28 pt-20 md:px-10 md:pb-36 md:pt-28">
      <Reveal>
        <h1 className="display-lg mb-14 text-black md:mb-16">Providers</h1>
      </Reveal>

      {providers.length === 0 ? (
        <Reveal>
          <div className="rounded-[1.75rem] border border-dashed border-black/15 bg-white px-10 py-20 text-center">
            <p className="display-md text-black">No providers yet</p>
            <p className="body-lg mt-4 text-black/50">Check back soon.</p>
          </div>
        </Reveal>
      ) : (
        <Stagger
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.045}
        >
          {providers.map((provider) => (
            <StaggerItem key={provider.id}>
              <ProviderCard provider={provider} className="h-full" />
            </StaggerItem>
          ))}
        </Stagger>
      )}
    </div>
  );
}
