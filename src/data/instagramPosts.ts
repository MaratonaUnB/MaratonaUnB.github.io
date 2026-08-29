// Posts do Instagram exibidos na Galeria (embed oficial do Instagram —
// não precisa de token de API, só da URL pública do post).
//
// Conta usada: https://www.instagram.com/maratona.unb/
//
// Para adicionar um post novo:
// 1. Abra o post em instagram.com/maratona.unb
// 2. Copie a URL (ex.: https://www.instagram.com/maratona.unb/p/XXXXXXXXXXX/)
// 3. Adicione uma linha abaixo com essa URL (a mais nova primeiro).
// 4. Remova a mais antiga se quiser manter a grade sempre com o mesmo tamanho.
//
// Isso é uma curadoria manual, não uma sincronização automática: não existe
// forma de "puxar" os últimos posts sem uma credencial da Meta Graph API
// (exigiria uma conta de desenvolvedor Meta e um token, configurados por
// quem administra a conta do Instagram). Mesmo sendo uma conta Business, o
// embed oficial (usado aqui) não precisa desse token — só a Graph API para
// automação precisaria.
export const instagramPosts: string[] = [
  "https://www.instagram.com/maratona.unb/p/DclbbqzsUZ0/",
  "https://www.instagram.com/maratona.unb/p/DbypoHAD675/",
  "https://www.instagram.com/maratona.unb/p/DbDeWhMHAHz/",
  "https://www.instagram.com/maratona.unb/p/DXnNax6Dcvu/",
  "https://www.instagram.com/maratona.unb/p/DXjQqJbDvN0/",
  "https://www.instagram.com/maratona.unb/p/DXjQREgDlvy/",
  "https://www.instagram.com/maratona.unb/p/DXhTR6pAEv_/",
];
