import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "Maratona de Programação — UnB",
  shortName: "Maratona de Programação",
  description:
    "As atividades da Maratona de Programação na UnB capacitam estudantes de Ensino Médio e Superior em programação, utilizando uma abordagem competitiva.",
  url: "https://maratona.unb.br",
  lang: "pt-BR",
  locale: "pt_BR",
  author: "Maratona de Programação — UnB",
  email: "maratona@unb.br",
  ogImage: ogImage,
  socialLinks: {
    telegram: "https://t.me/unballoon",
    discord: "https://discord.com/invite/9AETUBmJJd",
    instagram: "https://www.instagram.com/unballooon/",
    youtube: "https://www.youtube.com/playlist?list=PLHOnuxlEMZkqKSbMn4UIFEl3O8vyo9lCV",
    github: "https://github.com/UnBalloon/",
    codeforcesGroup: "https://codeforces.com/group/btcK4I5D5f/blog",
    codeforcesContests: "https://codeforces.com/group/nituVTsHQX/contests",
    unballoonSite: "https://unballoon.github.io/",
  },
  supporters: [
    { name: "Giga Candanga", url: "https://gigacandanga.net.br/" },
  ],
  navLinks: [
    {
      text: "Sobre",
      href: "/organizacao",
      links: [
        { text: "Organização", href: "/organizacao" },
        { text: "Por que competir?", href: "/por-que-competir" },
      ],
    },
    {
      text: "Atividades",
      href: "/obi",
      links: [
        { text: "OBI", href: "/obi" },
        { text: "Quadro de Medalhas (OBI)", href: "/quadro-de-medalhas" },
        { text: "ICPC", href: "/icpc" },
        { text: "Hall da Fama (ICPC)", href: "/hall-da-fama" },
        { text: "Extensão", href: "/blog/category/extensao" },
        { text: "Galeria", href: "/galeria" },
      ],
    },
    {
      text: "Eventos",
      href: "/xiv-maratona-unb-de-programacao",
      links: [
        { text: "Próximo evento", href: "/xiv-maratona-unb-de-programacao" },
        { text: "Histórico", href: "/blog/category/eventos-anteriores" },
        { text: "Calendário de Eventos", href: "/calendario-de-eventos" },
      ],
    },
    { text: "UnBalloon", href: "/unballoon" },
  ],
};
