
# Atelier Table • GitHub Pages + Firebase (sem Storage)

Este pacote foi ajustado para rodar com:
- **GitHub Pages** hospedando o site e os arquivos da pasta `assets/`
- **Firebase Authentication (anônimo)**
- **Firestore** para sincronizar mestre e players

## O que mudou
- **não usa Firebase Storage**
- mapas e tokens vêm por **URL**
- a forma mais simples de mexer é editar a pasta `assets/` no GitHub
- a biblioteca inicial é carregada de `assets/manifest.json`

## Estrutura do pacote
- `index.html` → a mesa online
- `firebase-config.js` → cole sua config do Firebase aqui
- `firestore.rules` → regras simples para o MVP
- `.nojekyll` → evita frescura do GitHub Pages
- `assets/manifest.json` → define mapa padrão e assets iniciais
- `assets/maps/` → coloque seus mapas aqui
- `assets/tokens/` → coloque seus tokens aqui

## Como adicionar mapas e tokens
1. Suba as imagens na pasta certa:
   - mapas em `assets/maps/`
   - tokens em `assets/tokens/`
2. Edite `assets/manifest.json`
3. Troque os caminhos e nomes
4. Faça commit
5. Aguarde o GitHub Pages publicar

### Exemplo de `assets/manifest.json`
```json
{
  "defaultMap": "./assets/maps/exemplo-taverna.svg",
  "assets": [
    { "name": "Coelho Branco", "src": "./assets/tokens/coelho-branco.svg" },
    { "name": "Cultista", "src": "./assets/tokens/cultista.svg" }
  ]
}
```

## Controles no site
- **Mapa URL** → cola a URL de um mapa publicado
- **Asset URL** → cola a URL de um token/asset publicado
- o site também tenta carregar a biblioteca de `assets/manifest.json` automaticamente

## Firebase que você precisa ativar
- **Authentication** → método **Anônimo**
- **Firestore Database**

**Não precisa ativar Storage.**

## Publicação rápida
1. Envie todos os arquivos para a raiz do repositório no GitHub
2. Ative **GitHub Pages** em `Settings > Pages > Deploy from a branch > main / (root)`
3. No Firebase, crie um app web e copie a config para `firebase-config.js`
4. No Firestore, publique as regras de `firestore.rules`
5. Abra o link do GitHub Pages

## Limites honestos
- assets gigantes ainda vão pesar no navegador, porque milagre não roda em PNG de 20 MB
- a sincronização da campanha fica em documento de Firestore, então não trate isso como CDN de imagens
- se você mudar `assets/manifest.json`, dê um refresh forte no navegador (`Ctrl+F5`) para matar cache teimoso
