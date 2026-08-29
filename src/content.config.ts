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

// Edições da Maratona UnB de Programação (e demais eventos de destaque).
// Cada arquivo é uma edição; a "próxima" é calculada automaticamente pela
// data (o primeiro evento cuja data ainda não passou). Para adicionar uma
// nova edição, crie um arquivo em src/content/eventos/ com uma capa em
// public/eventos/.
const eventos = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/eventos" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    local: z.string().optional(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    inscricoesUrl: z.string().optional(),
    // Marca manualmente um evento como "confirmado" mesmo sem inscrições
    // abertas ainda (ex.: data anunciada, detalhes a confirmar).
    confirmado: z.boolean().optional().default(true),
  }),
});

export const collections = { blog, eventos };
