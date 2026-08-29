// Depoimentos reais de ex-competidores/alunos. Deixado vazio de propósito —
// preencha apenas com falas reais e autorizadas pela pessoa citada (nome e,
// se possível, foto). Não invente depoimentos.
export interface Depoimento {
  nome: string;
  papel: string; // ex.: "Maratonista, edição 2023" ou "Ex-aluno, hoje na empresa X"
  texto: string;
  foto?: string; // caminho em public/depoimentos/
}

export const depoimentos: Depoimento[] = [];
