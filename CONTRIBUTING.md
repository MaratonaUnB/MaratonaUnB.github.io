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
   - `image` é opcional — se tiver uma foto **específica dessa notícia**,
     suba o arquivo em `public/blog/` e referencie o caminho, ex.:
     `image: "/blog/minha-foto.jpg"`. Não reaproveite fotos de
     `public/eventos/` ou `public/galeria/` aqui — veja "Onde colocar cada
     imagem" abaixo.

5. Role até o final da página, escreva uma mensagem de commit curta (ex.:
   "Adiciona notícia sobre X") e escolha **"Create a new branch for this
   commit and start a pull request"**.
6. Clique em **Propose changes** e depois em **Create pull request**.

Alguém com acesso de aprovação revisa e faz o merge. Depois disso o site
publica sozinho em alguns minutos.

## Adicionar/editar um evento (calendário e edições da Maratona UnB)

Todo o calendário de eventos — fases de OBI/ICPC, competições parceiras e as
edições da própria Maratona UnB — vem de arquivos em
[`src/content/eventos`](src/content/eventos), **um arquivo por evento**. A
tabela em `/eventos` (agrupada por ano) e o destaque "🏆 Próximo Evento" da
home são montados **automaticamente** a partir desses arquivos — não existe
mais nenhuma lista para editar à parte.

1. Abra `src/content/eventos/<ano>/` (crie a pasta do ano se ainda não
   existir — é só uma forma de organizar os arquivos, não afeta nada no
   site: o agrupamento por ano na tabela vem da data, não da pasta).
2. Clique em **Add file → Create new file** e nomeie o arquivo em minúsculas
   e com hífen, ex. `xv-maratona-unb-2027.md` ou `obi-fase-1-2027-06-10.md`.
3. Cole o conteúdo mínimo (só um evento de calendário, sem página própria):

   ```md
   ---
   title: "Nome do evento"
   date: 2027-06-10
   status: "confirmado" # "realizado" | "confirmado" | "a-confirmar" | "adiado"
   ---
   ```

   - `status` é opcional (padrão `"confirmado"`) — atualize conforme o
     evento evolui (`a-confirmar` → `confirmado` → `realizado`, ou `adiado`
     se for o caso).
   - `endDate` é opcional, só para eventos de múltiplos dias
     (ex. `endDate: 2027-06-12`).

4. Se o evento também merece uma **página própria** (como as edições da
   Maratona UnB), acrescente `temPagina: true` e escreva o conteúdo em
   Markdown depois do segundo `---`:

   ```md
   ---
   title: "XV Maratona UnB de Programação"
   date: 2027-09-20
   local: "LINF — Laboratório de Informática, Campus Darcy Ribeiro"
   status: "confirmado"
   temPagina: true
   destaque: true # disputa o "🏆 Próximo Evento" da home
   cover: "/eventos/2027/xv-maratona-unb.jpg" # opcional
   coverAlt: "Descrição da imagem" # opcional
   inscricoesUrl: "https://..." # opcional, vira botão "Inscreva-se"
   ---

   Detalhes do evento em Markdown.
   ```

   Sem `temPagina: true`, o evento aparece só como linha na tabela (é o caso
   da maioria — fases de OBI, ICPC, competições externas). `destaque: true`
   é reservado para as edições da própria Maratona UnB: é o que decide o que
   aparece no bloco da home, então normalmente **não marque** eventos de
   calendário comuns com `destaque: true`.

5. Se tiver uma imagem de capa, suba o arquivo em `public/eventos/<ano>/`
   (Add file → Upload files) **antes** de referenciá-lo no `cover:`. Uma
   imagem que se repete em vários eventos (ex.: o logo genérico da Maratona
   SBC, usado em várias fases nacionais) pode ficar direto em
   `public/eventos/` (sem subpasta de ano), já que não é exclusiva de uma
   edição.

O bloco "🏆 Próximo Evento" da home se atualiza sozinho: ele sempre mostra o
evento com `destaque: true` cuja data mais próxima ainda não passou. Não
existe mais um link fixo para trocar todo ano — só é preciso manter as
edições futuras cadastradas com a data certa.

## Onde colocar cada imagem

O site tem três pastas de imagens em `public/` com propósitos diferentes —
usar a errada é o motivo mais comum de imagem "estranha" aparecendo no lugar
errado:

| Pasta                   | Serve para                                                                                                                                                            | Referenciada por                                  |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| `public/blog/`          | Foto **exclusiva de uma notícia**                                                                                                                                     | `image:` em `src/content/blog/*.md`               |
| `public/eventos/<ano>/` | Capa/cartaz **de um evento específico** (ou a raiz `public/eventos/`, sem ano, para uma imagem genérica reaproveitada em vários eventos, como o logo da Maratona SBC) | `cover:` em `src/content/eventos/<ano>/*.md`      |
| `public/galeria/`       | Fotos **soltas** da página `/galeria` (não pertencem a nenhum arquivo de conteúdo específico)                                                                         | array `fotos` direto em `src/pages/galeria.astro` |
| `public/site/hero/`     | Fotos do **hero da home** (a faixa grande no topo, com o título por cima)                                                                                             | nenhuma — lidas automaticamente, ver abaixo       |

### Fotos do hero da home

Diferente das outras, essa pasta **não precisa editar nenhum arquivo de
código nem apontar caminho em lugar nenhum**: toda imagem (`.jpg`, `.jpeg`,
`.png` ou `.webp`) colocada em `public/site/hero/` entra automaticamente no
sorteio — a cada carregamento da home, o site escolhe uma aleatoriamente
para mostrar. Para adicionar uma foto nova, é só subir o arquivo nessa pasta
(Add file → Upload files) e abrir o PR; para remover uma foto do sorteio,
basta apagar o arquivo. Prefira fotos horizontais e com boa iluminação no
centro, já que o texto do título fica sobreposto por cima com um degradê
escuro.

Regra prática: **cada imagem tem um dono só**. Não aponte o `image:` de uma
notícia para uma foto que já é a `cover:` de um evento (nem vice-versa) —
mesmo que pareçam relacionadas, são coisas editadas em momentos diferentes e
um PR que troca a capa do evento acaba mudando a foto da notícia sem querer.
Se a mesma imagem faz sentido em dois lugares, duplique o arquivo.

## Outros conteúdos editáveis sem tocar em código

| O que editar                            | Onde                                                                              |
| --------------------------------------- | --------------------------------------------------------------------------------- |
| Quadro de Medalhas (OBI)                | `src/data/quadroMedalhasObi.ts`                                                   |
| Hall da Fama (ICPC)                     | `src/data/hallDaFamaIcpc.ts`                                                      |
| Posts do Instagram na Galeria           | `src/data/instagramPosts.ts` (cole a URL do post)                                 |
| Depoimentos                             | `src/data/depoimentos.ts` — só publicar falas reais e autorizadas por quem as deu |
| Links de imprensa                       | `src/data/imprensa.ts`                                                            |
| Menu, e-mail, redes sociais, apoiadores | `src/config/site.ts`                                                              |

Esses arquivos são arrays/objetos TypeScript simples — dá para editar
seguindo o padrão dos itens já existentes, mesmo sem saber programar. Preste
atenção especial à vírgula entre um item e outro do array e às aspas ao
redor de cada texto — um JSON/TypeScript mal formatado quebra o build (veja
a seção abaixo).

### Formato de um depoimento

Cada item de `depoimentos.ts` segue esta forma:

```ts
{
  nome: "Nome da pessoa",
  papel: "Ex-aluno, edição 2023",   // ou similar
  texto: "O depoimento em si, entre aspas.",
  link: "https://...",              // link para contato/perfil da pessoa
  foto: "/depoimentos/nome.jpg",    // opcional — coloque o arquivo em public/depoimentos/
},
```

`foto` é opcional: sem ela, o card aparece só com nome, papel e texto (sem
avatar).

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
