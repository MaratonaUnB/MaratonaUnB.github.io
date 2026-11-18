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
    nome: "Arthur Botelho",
    papel: "Final Mundial 2025",
    texto:
      "Quando eu entrei pela primeira vez no Laboratório de Informática da UnB, eu estava convencido de que programação competitiva não era algo pra mim. Eu estava indo participar da Maratona APC, uma competição para calouros, que havia sido compartilhada em um grupo com pessoas que entrariam no semestre seguinte na UnB, como eu. Esse dia transformou totalmente a minha trajetória: adquiri o gosto por competir, conheci a UnBalloon e formei o time com quem posteriormente iria até o mundial. Desde o início da graduação, já estive focado na maratona de programação, o que foi um diferencial na minha formação, aprimorando minhas habilidades de aprendizagem, raciocínio, trabalho em equipe e persistência. Esse foco me trouxe facilidade nas matérias ao longo da graduação, me colocou em contato com pessoas também focadas em se desenvolver, e também abriu oportunidades profissionais valiosas, uma delas que se tornou o meu trabalho atual. Além disso, ao longo do tempo, comecei a também me envolver mais com a organização das maratonas e treinamentos, o que me fez adquirir habilidades de liderança e comunicação essenciais para outras áreas da minha vida. Posso dizer que a programação competitiva transformou a minha vida, foi o lugar onde me encontrei e onde pretendo continuar presente mesmo depois que meu dias de competição oficial terminarem.",
    url: "https://github.com/arthur9548",
  },
  {
    nome: "Lucas Mattiolli",
    papel: "Final Nacional 2016",
    texto:
      "A maratona de programação foi uma divisora de águas na minha formação profissional e pessoal. Foi o que me manteve motivado para passar pelo curso, foi o que me trouxe a minha primeira experiência profissional e também foi algo que me ensinou o valor da dedicação a uma prática específica. Além disso, fiz muitos amigos durante o percurso, que levo até hoje, incluindo o professor Edson, que foi o maior motivador nessa jornada. Também acredito que a habilidade analítica adquirida enquanto treinamos para os problemas é muito útil para decisões de vida. Percebi que meu pensamento ficou mais claro, mais estruturado, e isso ajuda muito tanto profissionalmente quanto pessoalmente. Se eu pudesse, faria tudo de novo. Mesmo nessa era de IA. Acredito que ter um cérebro “afiado” pode ser um diferencial nesse momento em que todos conseguem dar prompts para um agente de IA.",
    url: "https://www.linkedin.com/in/lucas-mattioli-07848012a/",
  },
  {
    nome: "Ruan Petrus",
    papel: "Final Mundial 2025",
    texto:
      "Participar da Maratona de Programação teve um impacto muito importante na minha formação. Além de desenvolver bastante minha capacidade de resolver problemas e pensar de forma lógica sob pressão, a competição me colocou em contato com pessoas extremamente talentosas, com quem pude aprender e trocar experiências. A Maratona também abriu portas para conhecer grandes empresas e profissionais da área de tecnologia, além de proporcionar oportunidades de viajar, conhecer novos lugares e participar de experiências que dificilmente teria fora desse ambiente.",
    url: "https://www.linkedin.com/in/ruanpetrus",
  },
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
