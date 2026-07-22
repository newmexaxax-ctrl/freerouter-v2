# Components

#freerouter #component

## UI primitives

| Component | Path | Notes |
|-----------|------|-------|
| `FancyText` | `src/components/ui/fancy-text.tsx` | Clip-path letter reveal; respects reduced motion |
| `Button` / `buttonVariants` | `src/components/ui/button.tsx` | CVA variants; use variants with `Link` |
| `Reveal` / `Stagger` / `StaggerItem` | `src/components/ui/reveal.tsx` | Scroll entrance wrappers |

## Site chrome

| Component | Path |
|-----------|------|
| `SiteHeader` | `src/components/site-header.tsx` |
| `SiteFooter` | `src/components/site-footer.tsx` |
| `ProviderCard` | `src/components/provider-card.tsx` |

## Patterns

- **Link + button styles:** `className={cn(buttonVariants({ size: "lg" }))}` on `next/link`.
- **Cards are anchors** — whole card clickable; no nested buttons.
- **Empty state** on Providers if the list is empty.

## Related

- [[Animations]]
- [[Design-System]]
- [[Architecture]]
