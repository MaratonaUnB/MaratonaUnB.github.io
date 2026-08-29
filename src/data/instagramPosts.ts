// Posts do Instagram exibidos na Galeria (embed oficial do Instagram —
// não precisa de token de API, só da URL pública do post).
//
// Para adicionar um post novo:
// 1. Abra o post em instagram.com/unballooon
// 2. Copie a URL (ex.: https://www.instagram.com/p/XXXXXXXXXXX/)
// 3. Adicione uma linha abaixo com essa URL.
//
// Isso é uma curadoria manual, não uma sincronização automática: não existe
// forma de "puxar" os últimos posts sem uma credencial da Meta Graph API
// (exigiria uma conta de desenvolvedor Meta e um token, que precisam ser
// configurados por quem administra a conta do Instagram).
export const instagramPosts: string[] = [
  // "https://www.instagram.com/p/XXXXXXXXXXX/",
];
