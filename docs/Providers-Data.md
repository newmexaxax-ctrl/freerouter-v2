# Providers Data

#freerouter #data

## Source of truth

`src/data/providers.ts`

Original scrape notes live in the desktop `providers.txt` used at project kickoff. Edit the TypeScript module for production changes.

## Shape

```ts
type Provider = {
  id: string;
  name: string;
  url: string;       // referral link
  tagline: string;   // 3–8 words
  rating: number;    // /10
  models: string[];
  note?: string;
};
```

## Adding a provider

1. Append an object to `providers` with a unique `id`.
2. Keep `tagline` short — cards stay airy.
3. Put the full referral URL in `url`.
4. Optional `note` is for docs/ops; not shown as a wall of text on cards.

## Business model

Users click referral links → sign up on third-party sites → rewards accrue to the link owner. FreeRouter does not host models.

## Related

- [[Architecture]]
- [[Components]]
