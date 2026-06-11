import type { CollectionEntry } from "astro:content";

export type LandingPage = CollectionEntry<"pages">;
export type LandingPageData = LandingPage["data"];
