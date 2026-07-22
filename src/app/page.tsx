import Link from "next/link";
import { FancyText } from "@/components/ui/fancy-text";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/reveal";
import { ProviderCard } from "@/components/provider-card";
import { buttonVariants } from "@/components/ui/button";
import { providers } from "@/data/providers";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-28 text-center md:px-10 md:pb-32 md:pt-36">
        <h1>
          <FancyText
            className="display-xl text-black/10"
            fillClassName="text-black"
            stagger={0.04}
            duration={0.9}
          >
            FreeRouter
          </FancyText>
        </h1>

        <Reveal delay={0.12}>
          <p className="body-lg mt-10 max-w-lg text-black/50">
            Curated free AI tools.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12">
            <Link
              href="/providers"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Browse providers
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28 md:px-10 md:pb-36">
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
      </section>
    </div>
  );
}
