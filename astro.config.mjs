import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import remarkReadingTime from "remark-reading-time";

export default defineConfig({
  site: "https://maratona.unb.br/",
  integrations: [sitemap(), icon(), mdx()],
  redirects: {
    // A página "Todos os eventos" e o "Calendário de Eventos" foram unidos
    // em /eventos — mantém o link antigo funcionando (gera uma página HTML
    // com meta refresh, já que o GitHub Pages não faz redirect 301 real).
    "/calendario-de-eventos": "/eventos",
  },
  markdown: {
    remarkPlugins: [
      remarkReadingTime,
      () => {
        return function (_tree, file) {
          file.data.astro.frontmatter.minutesRead =
            file.data.readingTime.minutes;
        };
      },
    ],
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
