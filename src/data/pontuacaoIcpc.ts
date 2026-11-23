// Regra de pontuação do Hall da Fama do ICPC. O total de cada aluno é a soma
// de (quantidade × pontos) de cada conquista, nos três níveis; o ranking
// ordena pelo total e, no empate, pelo nome.
//
// Para mudar a regra, edite só os números de `pontos`. Uma conquista sem
// pontos num nível (ex.: melhorBrasileiro na Final Brasileira) não existe
// naquele nível.

export type Nivel = "mundial" | "latam" | "brasil";
export type Conquista = "campeao" | "campeaoRegional" | "melhorBrasileiro" | "ouro" | "prata" | "bronze" | "participacoes";

export interface AlunoHallDaFama {
  nome: string;
  mundial?: Partial<Record<Conquista, number>>;
  latam?: Partial<Record<Conquista, number>>;
  brasil?: Partial<Record<Conquista, number>>;
}

export const pontos: Record<Nivel, Partial<Record<Conquista, number>>> = {
  mundial: { campeao: 736, campeaoRegional: 120, melhorBrasileiro: 40, ouro: 184, prata: 88, bronze: 40, participacoes: 8 },
  latam: { campeao: 184, campeaoRegional: 30, melhorBrasileiro: 10, ouro: 46, prata: 22, bronze: 10, participacoes: 2 },
  brasil: { campeao: 92, campeaoRegional: 5, ouro: 23, prata: 11, bronze: 5, participacoes: 1 },
};

export const NIVEIS: { id: Nivel; nome: string; sufixo: string }[] = [
  { id: "mundial", nome: "Mundial", sufixo: "Mundial" },
  { id: "latam", nome: "LatAm", sufixo: "Latam" },
  { id: "brasil", nome: "Brasileira", sufixo: "Brasil" },
];

// Ordem das colunas dentro de cada nível, com rótulo e ícone (public/fama/).
// `{nivel}` no caminho vira o sufixo do nível (Mundial, Latam, Brasil).
export const CONQUISTAS: { id: Conquista; rotulo: string; imagem: string }[] = [
  { id: "campeao", rotulo: "Campeão geral", imagem: "/fama/trofeu-{nivel}.png" },
  { id: "campeaoRegional", rotulo: "Campeão regional", imagem: "/fama/certificacao-{nivel}.png" },
  { id: "melhorBrasileiro", rotulo: "Melhor brasileiro", imagem: "/fama/melhor-brasileiro.svg" },
  { id: "ouro", rotulo: "Medalha de ouro", imagem: "/fama/medalha-de-ouro.png" },
  { id: "prata", rotulo: "Medalha de prata", imagem: "/fama/medalha-de-prata.png" },
  { id: "bronze", rotulo: "Medalha de bronze", imagem: "/fama/medalha-de-bronze.png" },
  { id: "participacoes", rotulo: "Participação", imagem: "/fama/ticket.png" },
];

export function totalDoAluno(aluno: AlunoHallDaFama): number {
  let total = 0;
  for (const { id: nivel } of NIVEIS) {
    for (const [conquista, qtd] of Object.entries(aluno[nivel] ?? {})) {
      total += (qtd ?? 0) * (pontos[nivel][conquista as Conquista] ?? 0);
    }
  }
  return total;
}

export function imagemDaConquista(conquista: { imagem: string }, sufixoDoNivel: string): string {
  return conquista.imagem.replace("{nivel}", sufixoDoNivel);
}
