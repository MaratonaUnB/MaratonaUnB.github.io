import { getCollection, type CollectionEntry } from "astro:content";

export type Evento = CollectionEntry<"eventos">;

export async function getEventosOrdenados(): Promise<Evento[]> {
  const eventos = await getCollection("eventos");
  return eventos.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/**
 * O "próximo evento" (destaque da home) considera só eventos marcados com
 * `destaque: true` (normalmente as edições da própria Maratona UnB) — os
 * demais eventos do calendário (fases de OBI/ICPC etc.) não disputam esse
 * bloco. É o mais próximo cuja data ainda não passou; se todos já
 * passaram, cai de volta para o mais recente já realizado.
 */
export function getProximoEvento(eventosOrdenadosDesc: Evento[]): {
  evento: Evento | undefined;
  isFuturo: boolean;
} {
  const destaques = eventosOrdenadosDesc.filter((e) => e.data.destaque);
  const now = new Date();
  const futuros = destaques
    .filter((e) => e.data.date.valueOf() >= now.valueOf())
    .sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf());

  if (futuros.length > 0) {
    return { evento: futuros[0], isFuturo: true };
  }
  return { evento: destaques[0], isFuturo: false };
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
      const naoRealizados = eventosDoAno
        .filter((e) => e.data.status !== "realizado")
        .sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf());
      const realizados = eventosDoAno
        .filter((e) => e.data.status === "realizado")
        .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
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
  const mesmoMes =
    date.getUTCFullYear() === endDate.getUTCFullYear() &&
    date.getUTCMonth() === endDate.getUTCMonth();
  return `${formatar(date, !mesmoMes)} a ${formatar(endDate)}`;
}
