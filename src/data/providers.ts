export type Provider = {
  id: string;
  name: string;
  url: string;
  tagline: string;
  rating?: number;
  models: string[];
  note?: string;
};

/** Full list from providers.txt — all referral destinations */
export const providers: Provider[] = [
  {
    id: "subaxis",
    name: "subaxis.dev",
    url: "https://subaxis.dev/portal/login?mode=sign-up&ref=QABY77RESBQ7",
    tagline: "1M tokens daily · GLM 5.2",
    rating: 10,
    models: ["glm 5.2"],
  },
  {
    id: "freemodel",
    name: "freemodel.dev",
    url: "https://freemodel.dev/invite/FRE-d5d25671",
    tagline: "66/week · ChatGPT models",
    rating: 10,
    models: ["chatgpt 5.5", "chatgpt 5.4", "chatgpt 5.4 mini"],
  },
  {
    id: "freetokenfaucet",
    name: "freetokenfaucet.com",
    url: "https://freetokenfaucet.com/?ref=J4HWLNWC",
    tagline: "1M tokens every day",
    rating: 9,
    models: ["gpt 5.6 luna", "gpt 5.6 terra", "mimo v2.5", "qwen 3.6 plus"],
  },
  {
    id: "moon-ai",
    name: "moon-ai.pl",
    url: "https://www.moon-ai.pl/auth/login?ref=amdgreiq",
    tagline: "Fable 5 · GPT 5.6 family",
    rating: 9,
    models: ["fable 5", "gpt 5.6 sol", "gpt 5.6 terra", "gpt 5.6 luna"],
  },
  {
    id: "aerolink",
    name: "aerolink.lat",
    url: "https://aerolink.lat/register?ref=EWVEWBE",
    tagline: "Fable 5 · GPT 5.6 family",
    rating: 9,
    models: ["fable 5", "gpt 5.6 sol", "gpt 5.6 terra", "gpt 5.6 luna"],
  },
  {
    id: "diro",
    name: "diro.eu.cc",
    url: "https://diro.eu.cc/chat",
    tagline: "No API key needed",
    rating: 7,
    models: ["glm 5.2 fast", "kimi k.2.7"],
  },
  {
    id: "livrouter",
    name: "livrouter",
    url: "https://livrouter.com/login?aff=Wb20",
    tagline: "Flash models · paid options",
    rating: 8,
    models: ["DeepSeek-V4-Flash", "sensenova-6.7-flash-lite"],
    note: "Paid models available; quota spends fast",
  },
  {
    id: "heyroute",
    name: "heyroute.ai",
    url: "https://heyroute.ai",
    tagline: "GPT 5.6 · Opus 4.8",
    rating: 7,
    models: ["gpt 5.6 sol", "gpt 5.6 terra", "gpt 5.6 luna", "opus 4.8"],
  },
  {
    id: "logfare",
    name: "logfare.ai",
    url: "https://heyroute.ai",
    tagline: "GLM · DeepSeek flash",
    rating: 7,
    models: ["glm 5.2", "deepseek-v4-flash"],
    note: "Disable SSE streaming",
  },
  {
    id: "helpcoder",
    name: "helpcoder.cc",
    url: "https://helpcoder.cc/register?aff=XA7N",
    tagline: "ChatGPT 5.4 access",
    rating: 7,
    models: ["chatgpt 5.4"],
  },
  {
    id: "tokenbay",
    name: "tokenbay.com",
    url: "https://www.tokenbay.com/login?inviterCode=tijoygld",
    tagline: "150 credit bonus · video",
    rating: 8,
    models: ["top models", "video generation"],
  },
  {
    id: "bluesminds",
    name: "bluesminds.com",
    url: "https://api.bluesminds.com/sign-up?aff=H35A",
    tagline: "Grok 4.5 · DeepSeek V4",
    models: ["grok 4.5", "deepseek v4 flash"],
    note: "Many models listed; currently Grok 4.5 and DeepSeek V4 Flash",
  },
];
