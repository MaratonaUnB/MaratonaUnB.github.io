// Quadro de Medalhas da OBI — Modalidade Programação, Nível Sênior.
// Para atualizar, edite esta lista (ordenada por classificação) e faça um Pull Request.
export interface MedalhaObi {
  classificacao: number;
  nome: string;
  nota: number;
  ano: number;
}

export const quadroMedalhasObi: MedalhaObi[] = [
  { classificacao: 1, nome: "Eduardo Quirino de Oliveira", nota: 500, ano: 2022 },
  { classificacao: 1, nome: "Leonardo Alves Riether", nota: 500, ano: 2019 },
  { classificacao: 53, nome: "Henrique Morcelles Salum", nota: 167, ano: 2024 },
];
