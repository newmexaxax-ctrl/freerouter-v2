# Animations

#freerouter #animation

Goal: polished, not flashy. Prefer opacity + transform. Respect `prefers-reduced-motion`.

## Implemented

| Type | Where | How |
|------|-------|-----|
| FancyText fill | Home hero | Per-character clip-path via Motion |
| Scroll reveal | All pages | `Reveal` + `whileInView` |
| Staggered grid | Home / Providers | `Stagger` + `StaggerItem` |
| Hover micro | Cards, buttons | CSS `transition` 150–200ms, scale on arrow |

## Reduced motion

- FancyText renders plain filled text when reduced motion is preferred.
- Reveal/Stagger skip animation wrappers.
- Global CSS short-circuits transitions under `prefers-reduced-motion`.

## Rules

- Micro-interactions: **150–300ms**
- Entering UI: ease-out / custom cubic bezier `[0.25, 0.1, 0.25, 1]`
- No infinite decorative loops
- Do not animate layout geometry (width/height/top/left)

## Related

- [[Components]]
- [[Design-System]]
