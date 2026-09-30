import { type CollectionEntry, getCollection } from "astro:content";

export type Evento = CollectionEntry<"eventos">;

export async function getEventosOrdenados(): Promise<Evento[]> {
  const eventos = await getCollection("eventos");
  return eventos.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

// As datas do frontmatter chegam como meia-noite UTC do dia. Somar 24h + 3h
// leva à meia-noite seguinte no horário de Brasília (UTC-3): o evento vale
// até o fim do seu último dia aqui. Só com +24h ele "terminaria" às 21h.
const ATE_O_FIM_DO_DIA_EM_BRASILIA_MS = 27 * 60 * 60 * 1000;

/** Instante (ms) em que o evento termina: fim do último dia, em Brasília. */
export function fimDoEvento(evento: Evento): number {
  return (evento.data.endDate ?? evento.data.date).valueOf() + ATE_O_FIM_DO_DIA_EM_BRASILIA_MS;
}

/**
 * Candidatos a "próximo evento": status "confirmado" e ainda não terminados,
 * do mais cedo para o mais tarde. Considera todos os eventos do calendário.
 */
export function getProximosConfirmados(eventos: Evento[], agora = Date.now()): Evento[] {
  return eventos.filter((e) => e.data.status === "confirmado" && fimDoEvento(e) > agora).sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf());
}

/**
 * Último evento com status "realizado" (o status é editorial: um evento só
 * vira "último" quando alguém o marca como realizado) e o próximo evento
 * confirmado ainda não terminado. Qualquer um dos dois pode não existir.
 */
export function getUltimoEProximo(eventos: Evento[], agora = Date.now()): { ultimo: Evento | undefined; proximo: Evento | undefined } {
  const ultimo = eventos.filter((e) => e.data.status === "realizado").sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())[0];
  return { ultimo, proximo: getProximosConfirmados(eventos, agora)[0] };
}

/** Slug "de URL" de um evento: só o nome do arquivo, sem a subpasta de ano. */
export function slugDoEvento(evento: Evento): string {
  return evento.id.split("/").pop()!;
}

export interface GrupoAnoEventos {
  ano: number;
  naoRealizados: Evento[];
  realizados: Evento[];
}

/**
 * Agrupa os eventos por ano (da data), decrescente. Dentro de cada ano,
 * separa o que ainda não aconteceu (confirmado/a-confirmar/adiado) — do
 * mais próximo pro mais distante — do que já foi realizado — do mais
 * recente pro mais antigo. O agrupamento vem da data de cada evento, não
 * da subpasta onde o arquivo está guardado (que é só organização).
 */
export function agruparEventosPorAno(eventos: Evento[]): GrupoAnoEventos[] {
  const porAno = new Map<number, Evento[]>();
  for (const evento of eventos) {
    const ano = evento.data.date.getUTCFullYear();
    if (!porAno.has(ano)) porAno.set(ano, []);
    porAno.get(ano)!.push(evento);
  }

  return Array.from(porAno.entries())
    .sort((a, b) => b[0] - a[0])
    .map(([ano, eventosDoAno]) => {
      const naoRealizados = eventosDoAno.filter((e) => e.data.status !== "realizado").sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf());
      const realizados = eventosDoAno.filter((e) => e.data.status === "realizado").sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
      return { ano, naoRealizados, realizados };
    });
}

/** "2026-09-25" -> "25/09/2026" (ou "25/09 a 30/09/2026" com endDate). */
export function formatarDataEvento(evento: Evento): string {
  const formatar = (d: Date, comAno = true) =>
    d.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: comAno ? "numeric" : undefined,
      timeZone: "UTC",
    });

  const { date, endDate } = evento.data;
  if (!endDate || endDate.valueOf() === date.valueOf()) {
    return formatar(date);
  }
  const mesmoMes = date.getUTCFullYear() === endDate.getUTCFullYear() && date.getUTCMonth() === endDate.getUTCMonth();
  return `${formatar(date, !mesmoMes)} a ${formatar(endDate)}`;
}
