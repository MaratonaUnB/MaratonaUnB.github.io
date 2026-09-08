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
    titulo: "Notícias da UnB sobre a Maratona UnB de Programação",
    veiculo: "UnB Notícias",
    url: "https://noticias.unb.br/component/search/?searchword=maratona%20de%20programa%C3%A7%C3%A3o&ordering=newest&searchphrase=exact&limit=0",
  },
  {
    titulo: "Notícias do google sobre a Maratona de programação da UnB",
    veiculo: "Google Notícias",
    url: "https://www.google.com/search?q=maratona+de+programa%C3%A7%C3%A3o+UnB&client=firefox-b-d&hs=J2aq&sca_esv=f48afa79f283a7e3&biw=1463&bih=909&tbm=nws&sxsrf=APpeQntj30M8-KRdXO0-UFGa0zcNPbpiXQ%3A1788890805743&ei=tU6gapP_LL_P1sQPzM2U2A4&ved=0ahUKEwjTrZLIyd-WAxW_p5UCHcwmBesQ4dUDCA0&uact=5&oq=maratona+de+programa%C3%A7%C3%A3o+UnB&gs_lp=Egxnd3Mtd2l6LW5ld3MiHW1hcmF0b25hIGRlIHByb2dyYW1hw6fDo28gVW5CMgYQABgWGB4yBRAAGO8FMgUQABjvBTIFEAAY7wUyBRAAGO8FSNQeUNEPWLsccAB4AJABAJgBxQGgAeYGqgEDMC41uAEDyAEA-AEBmAIFoAL9BsICChAAGIAEGIoFGEPCAgUQABiABJgDAIgGAZIHBTAuNC4xoAeBG7IHBTAuNC4xuAf9BsIHBTAuMy4yyAcRgAgB&sclient=gws-wiz-news",
  },
];
