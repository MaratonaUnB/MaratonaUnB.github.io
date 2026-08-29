// Calendário consolidado de eventos de programação competitiva ligados à UnB.
// Tabela completa, recuperada de maratona.unb.br/calendario-de-eventos/
// (fontes originais: Maratona SBC de Programação, gnramos.github.io/maratona-site,
// e registros internos da organização).
// Datas em ISO (AAAA-MM-DD) para poder agrupar por ano e ordenar corretamente;
// a exibição em dd/mm é formatada na página. `dataFim` é opcional, só para
// eventos de múltiplos dias.
// Status: "realizado" | "confirmado" | "a-confirmar" | "adiado"
// Para atualizar, edite esta lista e faça um Pull Request.
export interface EventoCalendario {
  dataInicio: string;
  dataFim?: string;
  evento: string;
  status: "realizado" | "confirmado" | "a-confirmar" | "adiado";
}

export const calendarioEventos: EventoCalendario[] = [
  // 2025
  { dataInicio: "2025-02-21", evento: "III Maratona APC", status: "realizado" },
  { dataInicio: "2025-03-16", evento: "ICPC — Fase 3 (Latin America)", status: "realizado" },
  { dataInicio: "2025-04-05", evento: "Maratona do Cerrado", status: "realizado" },
  { dataInicio: "2025-05-10", evento: "X Maratona de Programação do IFB", status: "realizado" },
  { dataInicio: "2025-05-17", evento: "Maratona UnBalloon", status: "realizado" },
  { dataInicio: "2025-05-24", evento: "ICPC — Fase 0 (Virtual)", status: "realizado" },
  { dataInicio: "2025-06-12", evento: "OBI — Fase 1", status: "realizado" },
  { dataInicio: "2025-06-28", evento: "Maratona Feminina — UnB 1", status: "realizado" },
  { dataInicio: "2025-07-05", evento: "IV Maratona APC 25.1", status: "realizado" },
  { dataInicio: "2025-07-05", evento: "Maratona Feminina Brasil — Unicamp", status: "realizado" },
  { dataInicio: "2025-07-19", evento: "Seletiva da UnB", status: "realizado" },
  { dataInicio: "2025-08-15", evento: "OBI — Fase 2", status: "realizado" },
  { dataInicio: "2025-08-31", dataFim: "2025-09-05", evento: "ICPC — Fase 4 (World Finals)", status: "realizado" },
  { dataInicio: "2025-09-12", evento: "OBI Feminina — Fase única", status: "realizado" },
  { dataInicio: "2025-09-13", evento: "ICPC — Fase 1, Subregional Centro-Oeste", status: "realizado" },
  { dataInicio: "2025-09-27", evento: "OBI — Fase 3", status: "realizado" },
  { dataInicio: "2025-10-24", dataFim: "2025-10-25", evento: "IEEExtreme 2025", status: "realizado" },
  { dataInicio: "2025-11-03", dataFim: "2025-11-08", evento: "Maratona UnB — SEMUNI", status: "realizado" },
  { dataInicio: "2025-11-05", evento: "Mesa Redonda de Programação", status: "realizado" },
  { dataInicio: "2025-11-06", dataFim: "2025-11-09", evento: "ICPC — Fase 2 (Brazil Finals)", status: "realizado" },
  { dataInicio: "2025-11-29", evento: "Maratona Feminina — UnB 2", status: "realizado" },
  { dataInicio: "2025-12-01", dataFim: "2025-12-31", evento: "V Maratona APC 25.2", status: "realizado" },
  // 2026
  { dataInicio: "2026-01-31", evento: "Escola de Verão 2026", status: "realizado" },
  { dataInicio: "2026-03-04", evento: "LatAm (Fase Continental) — Santiago", status: "realizado" },
  { dataInicio: "2026-04-25", evento: "Maratona do Cerrado", status: "realizado" },
  { dataInicio: "2026-05-16", evento: "Maratona UnBalloon", status: "realizado" },
  { dataInicio: "2026-05-23", evento: "Primeira fase MFP", status: "realizado" },
  { dataInicio: "2026-05-30", evento: "Maratona do Pink Balloon 26.1", status: "realizado" },
  { dataInicio: "2026-06-13", evento: "VIII Competição Feminina de Programação da UnB", status: "realizado" },
  { dataInicio: "2026-06-20", evento: "Maratona IFB", status: "realizado" },
  { dataInicio: "2026-06-27", evento: "Seletiva UnB", status: "realizado" },
  { dataInicio: "2026-07-04", evento: "Maratona UnBalloon APC 26.1", status: "realizado" },
  { dataInicio: "2026-08-01", evento: "Maratona Feminina Nacional", status: "realizado" },
  { dataInicio: "2026-08-29", evento: "Sub-regional — Fase 1", status: "realizado" },
  { dataInicio: "2026-09-25", evento: "XIV Maratona UnB de Programação (8h, no LINF)", status: "confirmado" },
  { dataInicio: "2026-10-30", evento: "IEEExtreme", status: "a-confirmar" },
  { dataInicio: "2026-11-07", evento: "Final Nacional — Uberlândia", status: "confirmado" },
  { dataInicio: "2026-11-15", evento: "Maratona do Pink Balloon 26.2", status: "a-confirmar" },
  { dataInicio: "2026-11-15", dataFim: "2026-11-20", evento: "Final Mundial ICPC — Dubai", status: "adiado" },
  { dataInicio: "2026-11-21", evento: "Maratona UnBalloon APC 26.2", status: "a-confirmar" },
  { dataInicio: "2026-12-05", evento: "IX Competição Feminina de Programação da UnB", status: "a-confirmar" },
];
