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
    // Texto alternativo da capa. Sem isso o <img> cai no título do post,
    // que descreve a notícia mas não a imagem.
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
    // Destaque editorial. Ainda não é lido por nenhuma página; existe aqui
    // porque a automação do Notion já o preenche.
    featured: z.boolean().optional().default(false),

    // --- Campos gravados pela automação Notion -> site (workflow do n8n).
    // Um post escrito à mão não precisa de nenhum deles.
    //
    // `slug` é informativo: a URL da notícia vem do NOME DO ARQUIVO (via
    // post.id em src/pages/blog/[...slug].astro), não deste campo. Ele fica
    // registrado para quem lê o arquivo entender de onde saiu o nome.
    slug: z.string().optional(),
    source: z.literal("notion").optional(),
    // Identidade forte da notícia: é por ele que o fluxo reconhece uma
    // republicação e reescreve ESTE arquivo em vez de criar um post novo.
    // Não editar à mão.
    notionId: z.string().optional(),
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
    // Horário de início (ex.: "8h"), exibido no card de informações da
    // página do evento (só relevante com temPagina: true).
    horario: z.string().optional(),
    // Link para o mapa do local (ex.: Google Maps), exibido junto ao
    // endereço no card de informações.
    mapaUrl: z.string().optional(),
    status: z.enum(["realizado", "confirmado", "a-confirmar", "adiado"]).optional().default("confirmado"),
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
