import type { EventoCalendario } from "@/data/calendarioEventos";

/** "2026-09-25" -> "25/09/2026" */
function formatarDataCurta(iso: string, comAno = true): string {
  const [ano, mes, dia] = iso.split("-");
  return comAno ? `${dia}/${mes}/${ano}` : `${dia}/${mes}`;
}

/** Formata data única ou intervalo, sempre numérico (dd/mm/aaaa). */
export function formatarDataEvento(evento: EventoCalendario): string {
  if (!evento.dataFim || evento.dataFim === evento.dataInicio) {
    return formatarDataCurta(evento.dataInicio);
  }
  const mesInicio = evento.dataInicio.slice(0, 7);
  const mesFim = evento.dataFim.slice(0, 7);
  const inicio = formatarDataCurta(evento.dataInicio, mesInicio !== mesFim);
  const fim = formatarDataCurta(evento.dataFim);
  return `${inicio} a ${fim}`;
}

export interface GrupoAnoCalendario {
  ano: number;
  naoRealizados: EventoCalendario[];
  realizados: EventoCalendario[];
}

/**
 * Agrupa por ano (do dataInicio), decrescente. Dentro de cada ano, separa
 * o que ainda não aconteceu (confirmado/a-confirmar/adiado) — ordenado do
 * mais próximo pro mais distante — do que já foi realizado — ordenado do
 * mais recente pro mais antigo.
 */
export function agruparCalendarioPorAno(
  eventos: EventoCalendario[],
): GrupoAnoCalendario[] {
  const porAno = new Map<number, EventoCalendario[]>();
  for (const evento of eventos) {
    const ano = Number(evento.dataInicio.slice(0, 4));
    if (!porAno.has(ano)) porAno.set(ano, []);
    porAno.get(ano)!.push(evento);
  }

  return Array.from(porAno.entries())
    .sort((a, b) => b[0] - a[0])
    .map(([ano, eventosDoAno]) => {
      const naoRealizados = eventosDoAno
        .filter((e) => e.status !== "realizado")
        .sort((a, b) => a.dataInicio.localeCompare(b.dataInicio));
      const realizados = eventosDoAno
        .filter((e) => e.status === "realizado")
        .sort((a, b) => b.dataInicio.localeCompare(a.dataInicio));
      return { ano, naoRealizados, realizados };
    });
}
