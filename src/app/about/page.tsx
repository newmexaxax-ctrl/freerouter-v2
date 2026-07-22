import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: "What FreeRouter is.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col px-6 pb-28 pt-24 md:px-10 md:pb-36 md:pt-32">
      <Reveal>
        <h1 className="display-lg text-black">
          FreeRouter is a curated gateway to free AI tools.
        </h1>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="body-lg mt-10 text-black/50">
          Find providers. Sign up. Create — without the noise.
        </p>
      </Reveal>

      <Reveal delay={0.14}>
        <div className="mt-14">
          <Link
            href="/providers"
            className={cn(buttonVariants({ size: "lg" }))}
          >
            See providers
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
