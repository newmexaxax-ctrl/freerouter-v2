import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-14 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="text-base tracking-[-0.01em] text-black/40">FreeRouter</p>
        <div className="flex flex-wrap gap-6 text-base tracking-[-0.01em]">
          <Link
            href="/providers"
            className="text-black/45 transition-colors duration-[var(--duration-ui)] ease-[var(--ease-out)] hover:text-black cursor-pointer"
          >
            Providers
          </Link>
          <Link
            href="/about"
            className="text-black/45 transition-colors duration-[var(--duration-ui)] ease-[var(--ease-out)] hover:text-black cursor-pointer"
          >
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
