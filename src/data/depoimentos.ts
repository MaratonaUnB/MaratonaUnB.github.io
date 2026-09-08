// Depoimentos reais de ex-competidores/alunos.

export interface Depoimento {
  nome: string;
  papel: string; // ex.: "Maratonista, edição 2023" ou "Ex-aluno, hoje na empresa X"
  texto: string;
  url: string; // url para contato direto
  foto?: string; // caminho em public/depoimentos/
}

export const depoimentos: Depoimento[] = [
  {
    nome: "Daniel Saad",
    papel: "Ex-competidor, professor, voluntário no grupo Maratonas-DF",
    texto:
      "Durante a graduação, por volta do 6° semestre, a programação competitiva abriu meus olhos sobre a importância e beleza dos algoritmos e estruturas de dados. Nesse momento eu me interessei bastante por esses assuntos e comecei a me aprofundar nos estudos. Fiz o Mestrado e Doutorado na linha de estruturas de dados e índices compactos. Essas estruturas permitem representar textos em um espaço extremamente reduzido e ainda possibilitam que operações sejam feitas sobre elas, o que é imprescindível no cenário atual de grande volume de dados. Hoje, além de continuar pesquisando sobre essas estruturas compactas, leciono no Instituto Federal de Brasília,  onde procuro incentivar os meus alunos  sobre a importância de saber projetar e analisar soluções eficientes. Atuo, junto ao grupo Maratonas DF, na organização de competições de programação no Distrito Federal e também colaborei com a Maratona SBC de programação junto à comissão de sistemas. Sou um incentivador dessa linha de conhecimento. Percebo a programação competitiva como uma porta de entrada muito atrativa para os estudantes que são apaixonados em resolver problemas, habilidade essa que é fundamental na atuação profissional e pessoal.",
    url: "https://danielsaad.com/",
  },
  {
    nome: "Matheus Pimenta",
    papel: "Final Nacional 2015",
    texto:
      "Foi só no meu décimo primeiro semestre que eu sofri uma frustração de perder pro time rival do Gama, o que me fez acordar e começar a treinar de verdade. E foi aí que eu entendi o quão profundo realmente é o estudo sobre Algoritmos e Estruturas de Dados e como esses assuntos formam a base da Ciência da Computação. Gostaria de ter sofrido essa frustração muito antes e ter gasto toda a faculdade treinando para a Maratona! Foi ela que me trouxe onde estou hoje, sou Core Maintainer de um projeto open source super respeitado, um dos primeiros a se graduar na Cloud-Native Computing Foundation: CNCF Flux. Trabalho full time neste projeto e quero continuar fazendo isso pro resto da vida!",
    url: "https://fluxcd.io/blog/2026/07/flux-turns-10/",
  },
];
