# Como contribuir com o site da Maratona de Programação — UnB

Este site é gerado a partir de arquivos deste repositório. Publicar uma
notícia, adicionar um evento ou corrigir um texto é **editar um arquivo e
abrir um Pull Request (PR)** — o site publica sozinho depois que o PR é
aceito (veja [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).

Você **não precisa instalar nada nem saber Git de verdade** para as tarefas
mais comuns — dá para editar tudo pelo navegador, direto no site do GitHub.
As instruções abaixo assumem esse caminho; se você já usa Git localmente,
siga o fluxo que preferir.

## Publicar uma notícia

1. Abra a pasta [`src/content/blog`](src/content/blog).
2. Clique em **Add file → Create new file**.
3. Nomeie o arquivo em minúsculas e com hífen, terminando em `.md` — por
   exemplo `unb-campea-regional-2027.md`.
4. Cole o conteúdo neste formato (o bloco entre `---` é obrigatório):

   ```md
   ---
   title: "Título da notícia"
   description: "Um resumo de uma frase, usado nos cards e no compartilhamento."
   pubDate: 2027-03-10
   author: "Seu Nome"
   category: "noticias"
   tags: ["icpc", "resultado"]
   ---

   Corpo da notícia em Markdown. Pode usar **negrito**, [links](https://exemplo.com),
   listas, etc.
   ```

   - `category` aceita: `noticias`, `extensao`, `eventos-anteriores`.
   - `image` é opcional — se tiver uma foto, coloque o arquivo em
     `public/eventos/` (ou outra subpasta de `public/`) e referencie o
     caminho, ex.: `image: "/eventos/minha-foto.jpg"`.
5. Role até o final da página, escreva uma mensagem de commit curta (ex.:
   "Adiciona notícia sobre X") e escolha **"Create a new branch for this
   commit and start a pull request"**.
6. Clique em **Propose changes** e depois em **Create pull request**.

Alguém com acesso de aprovação revisa e faz o merge. Depois disso o site
publica sozinho em alguns minutos.

## Adicionar/editar um evento (edição da Maratona UnB)

1. Abra [`src/content/eventos`](src/content/eventos).
2. Crie um arquivo novo (mesmo processo acima), ex. `xv-maratona-unb-2027.md`:

   ```md
   ---
   title: "XV Maratona UnB de Programação"
   date: 2027-09-20
   local: "LINF — Laboratório de Informática, Campus Darcy Ribeiro"
   cover: "/eventos/xv-maratona-unb.jpg"   # opcional
   coverAlt: "Descrição da imagem"          # opcional
   inscricoesUrl: "https://..."             # opcional, vira botão "Inscreva-se"
   ---

   Detalhes do evento em Markdown.
   ```

3. Se tiver uma imagem de capa, suba o arquivo em `public/eventos/` (Add
   file → Upload files) **antes** de referenciá-lo no `cover:`.

O bloco "🏆 Próximo Evento" da home se atualiza sozinho: ele sempre mostra o
evento cadastrado com a data mais próxima que ainda não passou. Não existe
mais um link fixo para trocar todo ano — só é preciso manter os eventos
futuros cadastrados com a data certa.

## Outros conteúdos editáveis sem tocar em código

| O que editar | Onde |
|---|---|
| Quadro de Medalhas (OBI) | `src/data/quadroMedalhasObi.ts` |
| Hall da Fama (ICPC) | `src/data/hallDaFamaIcpc.ts` |
| Calendário de Eventos (tabela) | `src/data/calendarioEventos.ts` |
| Posts do Instagram na Galeria | `src/data/instagramPosts.ts` (cole a URL do post) |
| Depoimentos | `src/data/depoimentos.ts` — só publicar falas reais e autorizadas por quem as deu |
| Links de imprensa | `src/data/imprensa.ts` |
| Menu, e-mail, redes sociais, apoiadores | `src/config/site.ts` |

Esses arquivos são arrays/objetos TypeScript simples — dá para editar
seguindo o padrão dos itens já existentes, mesmo sem saber programar.

## O que acontece se eu errar alguma coisa?

Cada conteúdo tem um "schema" (uma lista de campos obrigatórios) definido em
[`src/content.config.ts`](src/content.config.ts). Se faltar um campo
obrigatório ou a data estiver num formato inválido, o **build falha** — o
GitHub mostra um X vermelho no PR em vez de publicar algo quebrado. Nesse
caso, abra a aba **Checks** do PR, veja a mensagem de erro (costuma apontar
o campo e o arquivo exatos) e corrija.

## Rodando o site localmente (opcional, para quem já usa Git)

```bash
npm install
npm run dev       # http://localhost:4321, com hot-reload
npm run build     # build de produção em dist/
npm run check     # typecheck do Astro
```

## Publicação

O deploy é automático via GitHub Actions
([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)): todo push
na branch `main` gera o build e publica no GitHub Pages. Não existe preview
automático de PR (limitação do GitHub Pages) — para conferir como o
resultado fica antes do merge, rode `npm run dev` ou `npm run build && npm run preview`
localmente, ou peça para quem for revisar o PR fazer isso.

## Dúvidas

Fale com <maratona@unb.br> ou abra uma issue neste repositório.
