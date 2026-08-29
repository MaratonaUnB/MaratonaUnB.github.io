// Quadro de Medalhas da OBI — Modalidade Programação, Nível Sênior
// (alunos cursando pela primeira vez o 1º ano de graduação).
// Tabela completa, recuperada de maratona.unb.br/quadro-de-medalhas/.
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
  { classificacao: 3, nome: "Wilson Oliveira Guimarães Neto", nota: 459, ano: 2022 },
  { classificacao: 3, nome: "Yogi Nam de Souza Barbosa", nota: 379, ano: 2024 },
  { classificacao: 10, nome: "Victor Manuel Brito Santos", nota: 428, ano: 2021 },
  { classificacao: 15, nome: "Wallace Ben Teng Lin Wu", nota: 398, ano: 2021 },
  { classificacao: 15, nome: "Thalisson Alves Gonçalves de Jesus", nota: 300, ano: 2020 },
  { classificacao: 22, nome: "Caleb Martim de Oliveira", nota: 242, ano: 2023 },
  { classificacao: 23, nome: "Victor Manuel Brito Santos", nota: 290, ano: 2020 },
  { classificacao: 26, nome: "Lucas Sala Cruz", nota: 386, ano: 2022 },
  { classificacao: 29, nome: "Luiz Felipe Ducat", nota: 216, ano: 2023 },
  { classificacao: 30, nome: "Tiago de Souza Fernandes", nota: 290, ano: 2019 },
  { classificacao: 31, nome: "Guilherme da Rocha Cunha", nota: 198, ano: 2023 },
  { classificacao: 32, nome: "Pedro de Carvalho Gallo Pereira", nota: 308, ano: 2021 },
  { classificacao: 37, nome: "Henrique de Oliveira Ramos", nota: 344, ano: 2022 },
  { classificacao: 42, nome: "Iago Rocha Santos Marques", nota: 330, ano: 2022 },
  { classificacao: 53, nome: "Henrique Morcelles Salum", nota: 167, ano: 2024 },
];
