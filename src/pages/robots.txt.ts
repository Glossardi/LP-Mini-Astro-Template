// robots.txt.ts — Generates /robots.txt at build time
import type { APIRoute } from "astro";
import brand from "@data/brand";

export const GET: APIRoute = () => {
  const content = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${brand.landingUrl}/sitemap-index.xml`,
  ].join("\n");

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
