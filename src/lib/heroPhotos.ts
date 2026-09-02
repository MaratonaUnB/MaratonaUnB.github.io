import { readdirSync } from "node:fs";
import { join } from "node:path";

const EXTENSOES_VALIDAS = [".jpg", ".jpeg", ".png", ".webp"];

/**
 * Lê tudo que tiver em public/site/hero/ no momento do build e devolve os
 * caminhos públicos das imagens (ex.: "/site/hero/foto.jpg"). Para adicionar
 * uma nova foto ao hero da home, basta subir o arquivo nessa pasta — não
 * precisa editar nenhum código, o site pega a lista automaticamente.
 *
 * Usa process.cwd() (raiz do projeto, de onde `astro build`/`astro dev` são
 * executados) em vez de um caminho relativo a este arquivo, porque o build
 * empacota este módulo em outro lugar (dist/.prerender/...) e um caminho
 * relativo quebraria nessa etapa.
 */
export function getHeroPhotos(): string[] {
  const dir = join(process.cwd(), "public/site/hero");
  const arquivos = readdirSync(dir)
    .filter((nome) =>
      EXTENSOES_VALIDAS.includes(
        nome.slice(nome.lastIndexOf(".")).toLowerCase(),
      ),
    )
    .sort();
  return arquivos.map((nome) => `/site/hero/${nome}`);
}
