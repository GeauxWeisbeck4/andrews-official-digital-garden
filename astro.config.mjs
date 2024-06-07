import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://andrews-digital-garden.netlify.app",
  integrations: [
      tailwind(),
      sitemap(),
      react(),
      partytown(),
      icon()]
});