// Tags de evento: viram pílulas coloridas na tabela de /eventos e na página
// de cada evento. Para criar uma tag nova, acrescente uma entrada aqui — o
// schema de src/content.config.ts aceita automaticamente os ids desta lista.
//
// `texto` é a cor da letra, escolhida pelo contraste com o fundo (mínimo
// 4,5:1): branco nos fundos escuros, azul-escuro do site no amarelo.

export const TAG_IDS = ["unb", "icpc", "ieee", "sbc", "meninas"] as const;
export type TagEvento = (typeof TAG_IDS)[number];

export const tagsEvento: Record<TagEvento, { rotulo: string; fundo: string; texto: string }> = {
  // Verde institucional da UnB. Branco: 7,1:1.
  unb: { rotulo: "UnB", fundo: "#006633", texto: "#ffffff" },
  // Amarelo da lâmpada do logo, medido em public/site/marcas/icpc.png. Branco
  // daria 1,7:1 (ilegível); com o azul-escuro do site: 9,7:1.
  icpc: { rotulo: "ICPC", fundo: "#feba12", texto: "#0d1f33" },
  // Azul da marca IEEE. Branco: 6,5:1.
  ieee: { rotulo: "IEEE", fundo: "#00629b", texto: "#ffffff" },
  // Azul da tela do logo da Maratona SBC, medido em
  // public/eventos/maratona-sbc-logo.jpg. Branco: 8,9:1.
  sbc: { rotulo: "SBC", fundo: "#2f4a75", texto: "#ffffff" },
  // Competições femininas. Rosa escuro o bastante para o branco: 4,6:1.
  meninas: { rotulo: "Meninas", fundo: "#db2777", texto: "#ffffff" },
};
