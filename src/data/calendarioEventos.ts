// Calendário consolidado de eventos de programação competitiva ligados à UnB.
// Tabela completa, recuperada de maratona.unb.br/calendario-de-eventos/
// (fontes originais: Maratona SBC de Programação, gnramos.github.io/maratona-site,
// e registros internos da organização).
// Status: "realizado" | "confirmado" | "a-confirmar" | "adiado"
// Para atualizar, edite esta lista e faça um Pull Request.
export interface EventoCalendario {
  data: string;
  evento: string;
  status: "realizado" | "confirmado" | "a-confirmar" | "adiado";
}

export const calendarioEventos: EventoCalendario[] = [
  // 2025
  { data: "21/fev/2025", evento: "III Maratona APC", status: "realizado" },
  { data: "16/mar/2025", evento: "ICPC — Fase 3 (Latin America)", status: "realizado" },
  { data: "05/abr/2025", evento: "Maratona do Cerrado", status: "realizado" },
  { data: "10/mai/2025", evento: "X Maratona de Programação do IFB", status: "realizado" },
  { data: "17/mai/2025", evento: "Maratona UnBalloon", status: "realizado" },
  { data: "24/mai/2025", evento: "ICPC — Fase 0 (Virtual)", status: "realizado" },
  { data: "12/jun/2025", evento: "OBI — Fase 1", status: "realizado" },
  { data: "28/jun/2025", evento: "Maratona Feminina — UnB 1", status: "realizado" },
  { data: "05/jul/2025", evento: "IV Maratona APC 25.1", status: "realizado" },
  { data: "05/jul/2025", evento: "Maratona Feminina Brasil — Unicamp", status: "realizado" },
  { data: "19/jul/2025", evento: "Seletiva da UnB", status: "realizado" },
  { data: "15/ago/2025", evento: "OBI — Fase 2", status: "realizado" },
  { data: "31/ago a 05/set/2025", evento: "ICPC — Fase 4 (World Finals)", status: "realizado" },
  { data: "12/set/2025", evento: "OBI Feminina — Fase única", status: "realizado" },
  { data: "13/set/2025", evento: "ICPC — Fase 1, Subregional Centro-Oeste", status: "realizado" },
  { data: "27/set/2025", evento: "OBI — Fase 3", status: "realizado" },
  { data: "24 a 25/out/2025", evento: "IEEExtreme 2025", status: "realizado" },
  { data: "03 a 08/nov/2025", evento: "Maratona UnB — SEMUNI", status: "realizado" },
  { data: "05/nov/2025", evento: "Mesa Redonda de Programação", status: "realizado" },
  { data: "06 a 09/nov/2025", evento: "ICPC — Fase 2 (Brazil Finals)", status: "realizado" },
  { data: "29/nov/2025", evento: "Maratona Feminina — UnB 2", status: "realizado" },
  { data: "01 a 31/dez/2025", evento: "V Maratona APC 25.2", status: "realizado" },
  // 2026
  { data: "31/jan/2026", evento: "Escola de Verão 2026", status: "realizado" },
  { data: "04/mar/2026", evento: "LatAm (Fase Continental) — Santiago", status: "realizado" },
  { data: "25/abr/2026", evento: "Maratona do Cerrado", status: "realizado" },
  { data: "16/mai/2026", evento: "Maratona UnBalloon", status: "realizado" },
  { data: "23/mai/2026", evento: "Primeira fase MFP", status: "realizado" },
  { data: "30/mai/2026", evento: "Maratona do Pink Balloon 26.1", status: "realizado" },
  { data: "13/jun/2026", evento: "VIII Competição Feminina de Programação da UnB", status: "realizado" },
  { data: "20/jun/2026", evento: "Maratona IFB", status: "realizado" },
  { data: "27/jun/2026", evento: "Seletiva UnB", status: "realizado" },
  { data: "04/jul/2026", evento: "Maratona UnBalloon APC 26.1", status: "realizado" },
  { data: "01/ago/2026", evento: "Maratona Feminina Nacional", status: "realizado" },
  { data: "29/ago/2026", evento: "Sub-regional — Fase 1", status: "realizado" },
  { data: "25/set/2026", evento: "XIV Maratona UnB de Programação (8h, no LINF)", status: "confirmado" },
  { data: "30/out/2026", evento: "IEEExtreme", status: "a-confirmar" },
  { data: "07/nov/2026", evento: "Final Nacional — Uberlândia", status: "confirmado" },
  { data: "15/nov/2026", evento: "Maratona do Pink Balloon 26.2", status: "a-confirmar" },
  { data: "15 a 20/nov/2026", evento: "Final Mundial ICPC — Dubai", status: "adiado" },
  { data: "21/nov/2026", evento: "Maratona UnBalloon APC 26.2", status: "a-confirmar" },
  { data: "05/dez/2026", evento: "IX Competição Feminina de Programação da UnB", status: "a-confirmar" },
];
