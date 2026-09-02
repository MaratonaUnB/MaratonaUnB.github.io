# Maratona de Programação — UnB

Site institucional da Maratona de Programação da UnB (`maratona.unb.br`),
construído com **[Astro](https://astro.build/) + [Tailwind CSS v4](https://tailwindcss.com/)**,
a partir do template [astro-starter-pro](https://github.com/devgelo-labs/astro-starter-pro).

Para o contexto completo do projeto (por que migramos, decisões de design,
integrações, limitações conhecidas), veja o [`CLAUDE.md`](../CLAUDE.md) no
nível acima deste diretório. Para saber **como editar conteúdo** (notícias,
eventos, quadro de medalhas etc.) sem tocar em código, veja o
[`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Tech stack

- **[Astro](https://astro.build/)** — gera HTML estático, sem runtime de
  servidor.
- **[Tailwind CSS v4](https://tailwindcss.com/)** — estilização utilitária.
- **[TypeScript](https://www.typescriptlang.org/)**.

## Estrutura do projeto

```text
Codigo/
├── public/                # Assets estáticos (favicon, imagens, CNAME)
├── src/
│   ├── assets/            # Imagens processadas pelo Astro
│   ├── components/        # Componentes de UI (Navbar, Footer, SEO, widgets)
│   ├── config/            # Configuração central do site (site.ts)
│   ├── content/           # Posts do blog e eventos (Markdown)
│   ├── data/              # Arrays de conteúdo editáveis (medalhas, hall da
│   │                         fama, calendário, depoimentos, imprensa etc.)
│   ├── layouts/           # Layouts base das páginas
│   ├── pages/             # Rotas do site (roteamento por arquivo)
│   ├── styles/            # CSS global e tokens de tema
│   ├── types/             # Definições de tipos TypeScript
│   └── content.config.ts  # Schema das Content Collections
├── astro.config.mjs       # Configuração do Astro
└── tailwind.config.mjs    # Configuração do Tailwind
```

## Rodando localmente

```bash
npm install
npm run dev      # servidor local em localhost:4321
npm run build    # build de produção em dist/
npm run preview  # serve o build de produção localmente
npm run check    # typecheck do Astro
```

## Deploy

Automático via GitHub Actions (`.github/workflows/deploy.yml`): todo push em
`main` builda e publica no GitHub Pages. Não há preview de PR — para conferir
uma mudança antes do merge, rode `npm run dev` ou
`npm run build && npm run preview` localmente.

## Licença

O código-base deste projeto parte do template `astro-starter-pro`, licenciado
sob MIT — veja [`LICENSE`](./LICENSE) para a atribuição original.
