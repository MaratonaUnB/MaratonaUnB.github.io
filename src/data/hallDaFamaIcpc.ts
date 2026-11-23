// Hall da Fama do ICPC — conquistas de cada aluno da UnB, por nível
// (Mundial, LatAm, Final Brasileira). A pontuação e a ordem do ranking são
// calculadas a partir disto (ver src/data/pontuacaoIcpc.ts): a ordem dos
// alunos neste arquivo não importa.
//
// Só escreva o que a pessoa conquistou — o que ficar de fora conta como 0:
//   { nome: "Fulana", latam: { participacoes: 1 }, brasil: { participacoes: 2, prata: 1 } }
//
// Conquistas possíveis em cada nível: campeao (campeão geral), campeaoRegional,
// melhorBrasileiro (só Mundial e LatAm), ouro, prata, bronze, participacoes.
//
import type { AlunoHallDaFama } from "./pontuacaoIcpc";

export const hallDaFamaIcpc: AlunoHallDaFama[] = [
  { nome: "José Marcos Leite", mundial: { campeaoRegional: 1, melhorBrasileiro: 1, participacoes: 2 }, brasil: { campeaoRegional: 2, prata: 2, participacoes: 5 } },
  { nome: "Luis Felipe Gebrim", mundial: { campeaoRegional: 1, melhorBrasileiro: 1, participacoes: 2 }, brasil: { campeaoRegional: 2, prata: 2, participacoes: 2 } },
  { nome: "Eduardo Quirino de Oliveira", mundial: { participacoes: 2 }, latam: { prata: 1, participacoes: 2 }, brasil: { campeao: 1, campeaoRegional: 3, ouro: 1, prata: 2, participacoes: 3 } },
  { nome: "Wilson Guimarães", mundial: { participacoes: 2 }, latam: { prata: 1, participacoes: 2 }, brasil: { campeao: 1, campeaoRegional: 3, ouro: 1, prata: 2, participacoes: 3 } },
  { nome: "Rafael Chehab", mundial: { campeaoRegional: 1, participacoes: 1 }, brasil: { campeaoRegional: 1, prata: 1, participacoes: 1 } },
  { nome: "Lucas Cruz", latam: { prata: 1, participacoes: 3 }, brasil: { campeao: 1, campeaoRegional: 3, ouro: 1, prata: 1, bronze: 2, participacoes: 4 } },
  { nome: "Thiago Veras Machado", mundial: { melhorBrasileiro: 1, participacoes: 1 }, brasil: { campeaoRegional: 1, prata: 1, participacoes: 2 } },
  { nome: "Arthur Botelho", mundial: { participacoes: 1 }, latam: { prata: 1, participacoes: 1 }, brasil: { prata: 1, participacoes: 2 } },
  { nome: "Eduardo Freire dos Santos", mundial: { participacoes: 1 }, latam: { prata: 1, participacoes: 1 }, brasil: { prata: 1, participacoes: 2 } },
  { nome: "Ruan Petrus Leite", mundial: { participacoes: 1 }, latam: { prata: 1, participacoes: 1 }, brasil: { prata: 1, participacoes: 2 } },
  { nome: "Edans Flávius de Oliveira Sandes", brasil: { prata: 2, bronze: 1, participacoes: 3 } },
  { nome: "Iasmim Freitas", latam: { participacoes: 2 }, brasil: { ouro: 1, participacoes: 3 } },
  { nome: "Alberto Neto", latam: { participacoes: 1 }, brasil: { campeaoRegional: 2, bronze: 3, participacoes: 3 } },
  { nome: "Tiago Fernandes", latam: { participacoes: 1 }, brasil: { campeaoRegional: 2, bronze: 3, participacoes: 3 } },
  { nome: "Emerson Luiz Cruz Junior", latam: { participacoes: 1 }, brasil: { ouro: 1, participacoes: 1 } },
  { nome: "Pedro Beneveli", latam: { participacoes: 1 }, brasil: { ouro: 1, participacoes: 1 } },
  { nome: "Enzo Niho", mundial: { participacoes: 1 }, brasil: { campeaoRegional: 1, prata: 1, participacoes: 1 } },
  { nome: "Luciano da Silva Coelho", brasil: { ouro: 1, participacoes: 1 } },
  { nome: "Marcelo Santiago Guedes", brasil: { ouro: 1, participacoes: 1 } },
  { nome: "Rodrigo Rossi Fernandes Lima", brasil: { ouro: 1, participacoes: 1 } },
  { nome: "Diego Aranha", brasil: { prata: 1, bronze: 1, participacoes: 2 } },
  { nome: "Leonardo Riether", brasil: { campeaoRegional: 1, bronze: 2, participacoes: 3 } },
  { nome: "Thiago Chaves de Oliveira Horta", brasil: { prata: 1, participacoes: 1 } },
  { nome: "Victor Ribeiro", brasil: { prata: 1, participacoes: 1 } },
  { nome: "Daniel Arruda Santos Anjos", brasil: { prata: 1, participacoes: 1 } },
  { nome: "Michael Onishi", brasil: { bronze: 1, participacoes: 1 } },
  { nome: "Rommel Novaes Carvalho", brasil: { bronze: 1, participacoes: 1 } },
  { nome: "Adrielly Medeiros", latam: { participacoes: 1 }, brasil: { participacoes: 1 } },
  { nome: "Gabrielly Batista", latam: { participacoes: 1 }, brasil: { participacoes: 1 } },
  { nome: "Henrique Ramos", latam: { participacoes: 1 }, brasil: { participacoes: 1 } },
  { nome: "Isabela Souza", latam: { participacoes: 1 }, brasil: { participacoes: 1 } },
  { nome: "Maria Eduarda Carvalho Santos", latam: { participacoes: 1 }, brasil: { participacoes: 1 } },
  { nome: "Maria Eduarda Machado de Holanda", latam: { participacoes: 1 }, brasil: { participacoes: 1 } },
  { nome: "Nathália Pereira", latam: { participacoes: 1 }, brasil: { participacoes: 1 } },
  { nome: "Tarsila Alves", latam: { participacoes: 1 }, brasil: { participacoes: 1 } },
];
