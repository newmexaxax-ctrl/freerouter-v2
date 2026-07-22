# Deployment

#freerouter #deployment

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Recommended host

Vercel (or any Node host that supports Next.js). No env vars required for the static referral hub.

## Checklist before ship

- [ ] All provider URLs are live referral links
- [ ] `npm run build` succeeds
- [ ] Mobile: 375px nav + cards readable
- [ ] Reduced motion: no broken layouts
- [ ] Lint clean (`npm run lint`)

## Related

- [[Architecture]]
- [[Providers-Data]]
