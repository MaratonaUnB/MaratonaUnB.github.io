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
    youtube:
      "https://www.youtube.com/playlist?list=PLHOnuxlEMZkqKSbMn4UIFEl3O8vyo9lCV",
    github: "https://github.com/UnBalloon/",
    codeforcesGroup: "https://codeforces.com/group/btcK4I5D5f/blog",
    codeforcesContests: "https://codeforces.com/group/nituVTsHQX/contests",
    unballoonSite: "https://unballoon.github.io/",
  },
  // Ícones exibidos no header/footer (subconjunto de socialLinks acima).
  headerSocialLinks: [
    {
      text: "Instagram",
      href: "https://www.instagram.com/maratona.unb/",
      icon: "lucide:instagram",
    },
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
      href: "/sobre",
      icon: "lucide:info",
      links: [
        { text: "Organização", href: "/organizacao", icon: "lucide:users" },
        {
          text: "Depoimentos",
          href: "/depoimentos",
          icon: "lucide:message-square-quote",
        },
        {
          text: "Perguntas frequentes",
          href: "/faq",
          icon: "lucide:help-circle",
        },
        {
          text: "Imprensa",
          href: "/imprensa",
          icon: "lucide:newspaper",
          links: [
            {
              text: "Kit de Imprensa",
              href: "/imprensa#kit-de-imprensa",
              icon: "lucide:folder-down",
            },
            { text: "Notícias", href: "/blog", icon: "lucide:rss" },
          ],
        },
      ],
    },
    {
      text: "Participe!",
      href: "/por-que-competir",
      icon: "lucide:rocket",
      links: [
        { text: "OBI", href: "/obi", icon: "lucide:graduation-cap" },
        { text: "ICPC", href: "/icpc", icon: "lucide:trophy" },
        {
          text: "Extensão Universitária",
          href: "/extensao",
          icon: "lucide:sprout",
        },
        {
          text: "Patrocínio",
          href: "/patrocinadores",
          icon: "lucide:handshake",
        },
      ],
    },
    {
      text: "Eventos",
      href: "/eventos",
      icon: "lucide:calendar",
      links: [{ text: "Resultados", href: "/galeria", icon: "lucide:image" }],
    },
    { text: "UnBalloon", href: "/unballoon", icon: "lucide:balloon" },
  ],
};
