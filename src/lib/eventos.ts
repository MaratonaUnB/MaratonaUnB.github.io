import { getCollection, type CollectionEntry } from "astro:content";

export type Evento = CollectionEntry<"eventos">;

export async function getEventosOrdenados(): Promise<Evento[]> {
  const eventos = await getCollection("eventos");
  return eventos.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/**
 * O "próximo evento" é o mais próximo cuja data ainda não passou.
 * Se todos já passaram, cai de volta para o mais recente já realizado.
 */
export function getProximoEvento(eventosOrdenadosDesc: Evento[]): {
  evento: Evento | undefined;
  isFuturo: boolean;
} {
  const now = new Date();
  const futuros = eventosOrdenadosDesc
    .filter((e) => e.data.date.valueOf() >= now.valueOf())
    .sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf());

  if (futuros.length > 0) {
    return { evento: futuros[0], isFuturo: true };
  }
  return { evento: eventosOrdenadosDesc[0], isFuturo: false };
}

export function agruparPorAno(eventos: Evento[]): Map<number, Evento[]> {
  const porAno = new Map<number, Evento[]>();
  for (const evento of eventos) {
    const ano = evento.data.date.getUTCFullYear();
    if (!porAno.has(ano)) porAno.set(ano, []);
    porAno.get(ano)!.push(evento);
  }
  return porAno;
}
