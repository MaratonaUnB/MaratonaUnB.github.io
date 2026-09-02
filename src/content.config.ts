import { defineCollection } from "astro:content";
import { z } from "astro:schema";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
  }),
});

// Calendário consolidado de eventos de programação competitiva ligados à
// UnB (Maratona UnB, fases de OBI/ICPC, competições parceiras etc). Cada
// arquivo é um evento; organize-os em subpastas por ano dentro de
// src/content/eventos/ (a subpasta é só para organização — o agrupamento
// por ano na página vem da data, não da pasta). A URL da página (quando
// `temPagina: true`) usa só o nome do arquivo, não o caminho da subpasta.
const eventos = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/eventos" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    local: z.string().optional(),
    status: z
      .enum(["realizado", "confirmado", "a-confirmar", "adiado"])
      .optional()
      .default("confirmado"),
    // Se true, o corpo em Markdown do arquivo vira uma página própria em
    // /eventos/<slug>. Se false (padrão), o evento só aparece como linha
    // na tabela do calendário.
    temPagina: z.boolean().optional().default(false),
    // Marca o evento a ser destacado no bloco "🏆 Próximo Evento" da home
    // (normalmente só as edições da própria Maratona UnB).
    destaque: z.boolean().optional().default(false),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    inscricoesUrl: z.string().optional(),
  }),
});

export const collections = { blog, eventos };
