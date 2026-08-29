// Hall da Fama do ICPC — participações e medalhas de alunos da UnB.
// Para atualizar, edite esta lista e faça um Pull Request.
export interface HallDaFamaEntry {
  nome: string;
  mundialParticipacoes: number;
  latamParticipacoes: number;
  finalBrasileiraOuro: number;
  finalBrasileiraPrata: number;
  finalBrasileiraBronze: number;
}

export const hallDaFamaIcpc: HallDaFamaEntry[] = [
  {
    nome: "José Marcos Leite",
    mundialParticipacoes: 2,
    latamParticipacoes: 0,
    finalBrasileiraOuro: 0,
    finalBrasileiraPrata: 2,
    finalBrasileiraBronze: 0,
  },
  {
    nome: "Luis Felipe Gebrim",
    mundialParticipacoes: 2,
    latamParticipacoes: 0,
    finalBrasileiraOuro: 0,
    finalBrasileiraPrata: 2,
    finalBrasileiraBronze: 0,
  },
];
