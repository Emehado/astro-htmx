import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import htmx from "astro-htmx";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://emehado.github.io",
  base: "/astro-htmx",
  integrations: [tailwind(), htmx()],
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
