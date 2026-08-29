// Calendário consolidado de eventos de programação competitiva ligados à UnB.
// Status: "realizado" | "confirmado" | "a-confirmar"
// Para atualizar, edite esta lista e faça um Pull Request.
export interface EventoCalendario {
  data: string;
  evento: string;
  status: "realizado" | "confirmado" | "a-confirmar";
}

export const calendarioEventos: EventoCalendario[] = [
  { data: "13/set/2025", evento: "Fase Regional ICPC / Maratona SBC 2025", status: "realizado" },
  { data: "15/nov/2025", evento: "Final Brasileira ICPC / Maratona SBC 2025 (São Paulo)", status: "realizado" },
  { data: "dez/2025", evento: "VII Competição Feminina de Programação da UnB", status: "realizado" },
  { data: "mar/2026", evento: "Fase Latino-Americana (LatAm) — Chile", status: "confirmado" },
  { data: "25/set/2026", evento: "XIV Maratona UnB de Programação", status: "confirmado" },
  { data: "mai/2026", evento: "Final Mundial ICPC 2026", status: "a-confirmar" },
  { data: "set–out/2026", evento: "OBI 2026 — Fase Nacional", status: "a-confirmar" },
];
