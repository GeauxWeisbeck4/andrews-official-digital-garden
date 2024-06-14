import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import markdownConfig from "./markdown.config.mjs";
import db from "@astrojs/db";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://geauxcode.dev",
  markdown: markdownConfig,
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), sitemap(), react(), partytown(), icon(), mdx({
    ...markdownConfig,
    extendedPlugins: false
  }), db(), svelte()]
});