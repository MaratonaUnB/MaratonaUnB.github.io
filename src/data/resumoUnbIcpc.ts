// Resumo da UnB no ICPC, contado por TIME (não por aluno): é o bloco de
// números no topo de /hall-da-fama. Não dá para calcular a partir de
// hallDaFamaIcpc.ts, que conta cada aluno — um time tem 3 e a composição
// muda de um ano para outro.
//
// Zeros não aparecem na página: um nível sem medalhas mostra só as
// participações. As imagens de cada conquista ficam em public/fama/.

export type Conquista = "participacoes" | "melhorDaRegiao" | "melhorBrasileiro" | "campeao" | "ouro" | "prata" | "bronze";

export interface ResumoNivel {
  participacoes: number;
  melhorDaRegiao: number;
  melhorBrasileiro: number;
  campeao: number;
  ouro: number;
  prata: number;
  bronze: number;
  // Observações que viram asterisco no número e nota de rodapé no bloco.
  // Ex.: { participacoes: "A fase LatAm só teve 3 edições." }
  notas?: Partial<Record<Conquista, string>>;
}

// PROPOSTA — valores copiados da imagem de referência; conferir antes de publicar.
export const resumoUnbIcpc: Record<"mundial" | "latam" | "brasil", ResumoNivel> = {
  mundial: { participacoes: 4, melhorDaRegiao: 0, melhorBrasileiro: 1, campeao: 0, ouro: 0, prata: 0, bronze: 0 },
  latam: {
    participacoes: 2,
    melhorDaRegiao: 0,
    melhorBrasileiro: 0,
    campeao: 0,
    ouro: 0,
    prata: 2,
    bronze: 0,
    notas: { participacoes: "A fase LatAm teve sua primeira edição em 2024." },
  },
  brasil: {
    participacoes: 20,
    melhorDaRegiao: 4,
    melhorBrasileiro: 0,
    campeao: 1,
    ouro: 3,
    prata: 7,
    bronze: 4,
    notas: { melhorDaRegiao: "A premiação de melhor time da região passou a acontecer a partir de 2022." },
  },
};
