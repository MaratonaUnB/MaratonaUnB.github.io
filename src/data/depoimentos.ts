// Depoimentos reais de ex-competidores/alunos.

export interface Depoimento {
  nome: string;
  papel: string; // ex.: "Maratonista, edição 2023" ou "Ex-aluno, hoje na empresa X"
  texto: string;
  link: string; // link para contato direto
  foto?: string; // caminho em public/depoimentos/
}

export const depoimentos: Depoimento[] = [
  {
    nome: "Matheus Pimenta",
    papel: "Ex-aluno",
    texto:
      "Foi só no meu décimo primeiro semestre que eu sofri uma frustração de perder pro time rival do Gama, o que me fez acordar e começar a treinar de verdade. E foi aí que eu entendi o quão profundo realmente é o estudo sobre Algoritmos e Estruturas de Dados e como esses assuntos formam a base da Ciência da Computação. Gostaria de ter sofrido essa frustração muito antes e ter gasto toda a faculdade treinando para a Maratona! Foi ela que me trouxe onde estou hoje, sou Core Maintainer de um projeto open source super respeitado, um dos primeiros a se graduar na Cloud-Native Computing Foundation: CNCF Flux. Trabalho full time no projeto e quero continuar pro resto da vida!",
    link: "https://fluxcd.io/blog/2026/07/flux-turns-10/",
  },
];
