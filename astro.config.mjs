// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import node from "@astrojs/node";

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  server: {
    host: "0.0.0.0",
  },
  vite: {
    server: {
      allowedHosts: ["forjandi.com"],
    },
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
