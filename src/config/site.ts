import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "Maratona UnB de Programação",
  shortName: "Maratona UnB de Programação",
  description:
    "As atividades da Maratona UnB de Programação capacitam estudantes de Ensino Médio e Superior em programação, utilizando uma abordagem competitiva.",
  url: "https://maratona.unb.br",
  lang: "pt-BR",
  locale: "pt_BR",
  author: "Maratona UnB de Programação",
  email: "maratona@unb.br",
  ogImage: ogImage,
  logo: "/site/marcas/MaratonaUnB.svg",
  socialLinks: {
    telegram: "https://t.me/unballoon",
    discord: "https://discord.com/invite/9AETUBmJJd",
    instagram: "https://www.instagram.com/maratona.unb/",
    youtube: "https://www.youtube.com/playlist?list=PLHOnuxlEMZkqKSbMn4UIFEl3O8vyo9lCV",
    github: "https://github.com/UnBalloon/",
    codeforcesGroup: "https://codeforces.com/group/btcK4I5D5f/blog",
    codeforcesContests: "https://codeforces.com/group/nituVTsHQX/contests",
    unballoonSite: "https://unballoon.github.io/",
  },
  // Ícones exibidos no header/footer (subconjunto de socialLinks acima).
  headerSocialLinks: [
    { text: "Instagram", href: "https://www.instagram.com/maratona.unb/", icon: "lucide:instagram" },
    { text: "Telegram", href: "https://t.me/unballoon", icon: "lucide:send" },
  ],
  supporters: [
    {
      name: "Giga Candanga",
      url: "https://gigacandanga.net.br/",
      logo: "/site/marcas/GigaCandanga.png",
    },
  ],
  navLinks: [
    {
      text: "Sobre",
      href: "/organizacao",
      links: [
        { text: "Organização", href: "/organizacao" },
        { text: "Por que competir?", href: "/por-que-competir" },
        { text: "Depoimentos", href: "/depoimentos" },
        { text: "Perguntas frequentes", href: "/faq" },
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
        { text: "Extensão", href: "/extensao" },
        { text: "Galeria", href: "/galeria" },
      ],
    },
    {
      text: "Eventos",
      href: "/eventos",
      links: [
        { text: "Calendário de Eventos", href: "/eventos" },
        { text: "Notícias", href: "/blog" },
        { text: "Imprensa", href: "/imprensa" },
      ],
    },
    { text: "UnBalloon", href: "/unballoon" },
    { text: "Patrocinadores", href: "/patrocinadores" },
  ],
};
