// Cobertura de imprensa sobre a Maratona/UnBalloon. Curadoria manual — para
// adicionar uma matéria, inclua o link direto para a publicação (não apenas
// a home do veículo) sempre que tiver a URL exata.
export interface MateriaImprensa {
  titulo: string;
  veiculo: string;
  url: string;
  data?: string;
}

export const materiasImprensa: MateriaImprensa[] = [
  {
    titulo: "Notícias da UnB sobre a Maratona de Programação",
    veiculo: "UnB Notícias",
    url: "https://noticias.unb.br/?s=maratona+de+programa%C3%A7%C3%A3o",
  },
  {
    titulo: "Cobertura do Correio Braziliense sobre a UnB",
    veiculo: "Correio Braziliense",
    url: "https://www.correiobraziliense.com.br/busca/?q=maratona%20de%20programa%C3%A7%C3%A3o%20unb",
  },
];
