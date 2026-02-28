# Atelier Table • GitHub Pages + Firebase

Este pacote pega a base do HTML da mesa e coloca no formato mais simples para subir no **GitHub Pages** com sincronização via **Firebase**.

## O que já vem pronto
- `index.html` com a mesa
- `firebase-config.js` para você colar a config do Firebase
- criação de sala como **mestre**
- entrada por código como **player**
- sincronização da campanha/cena/tokens/portas/paredes em tempo real
- upload de **mapas** e **assets** para o Firebase Storage
- GitHub Pages funciona sem servidor Node

## Limites honestos
- sem login tradicional, usa **Auth anônimo**
- regras estão simples para reduzir atrito
- é um **MVP prático**, não uma fortaleza de segurança
- Firestore tem limite de tamanho por documento, então **não enfie 2000 assets** e espere poesia

---

## PASSO A PASSO

### 1) Criar o repositório no GitHub
Crie um repositório, por exemplo:
- `atelier-table`

Envie estes arquivos para a raiz do repositório:
- `index.html`
- `firebase-config.js`
- `firestore.rules`
- `storage.rules`
- `.nojekyll`

---

### 2) Criar o projeto no Firebase
No Firebase Console:

1. Crie um projeto
2. Ative **Authentication**
   - método: **Anônimo**
3. Ative **Firestore Database**
4. Ative **Storage**
5. Em **Configurações do projeto > Seus apps > Web**, registre um app web
6. Copie a configuração exibida

---

### 3) Preencher o arquivo `firebase-config.js`
Abra `firebase-config.js` e substitua:

- `COLE_AQUI`
- `SEU_PROJETO.firebaseapp.com`
- `SEU_PROJECT_ID`
- `SEU_BUCKET.appspot.com`
- `SEU_MESSAGING_SENDER_ID`
- `SEU_APP_ID`

Salve.

---

### 4) Aplicar as regras do Firebase
No **Firestore Rules**, cole o conteúdo de `firestore.rules`.

No **Storage Rules**, cole o conteúdo de `storage.rules`.

Se preferir usar Firebase CLI:

```bash
npm install -g firebase-tools
firebase login
firebase init firestore
firebase init storage
firebase deploy --only firestore:rules,storage
```

---

### 5) Publicar no GitHub Pages
No repositório do GitHub:

1. Vá em **Settings**
2. Vá em **Pages**
3. Em **Source**, escolha:
   - **Deploy from a branch**
4. Escolha:
   - branch `main`
   - pasta `/ (root)`
5. Salve

Depois o GitHub vai te dar uma URL como:

```text
https://SEU-USUARIO.github.io/SEU-REPO/
```

---

### 6) Testar
1. Abra a URL
2. Como mestre:
   - escreva seu nome
   - nome da campanha
   - clique em **Criar sala**
3. Pegue o código da sala no topo da interface
4. Os players:
   - entram na mesma URL
   - digitam o nome
   - digitam o código
   - clicam em **Entrar**

---

## Como usar na prática
### Mestre
- sobe mapa
- sobe assets
- adiciona tokens
- desenha paredes e portas
- vincula cada token ao player certo no inspector

### Player
- entra com o código
- controla apenas o token cujo `Controlado por` esteja com o ID dele
- no modo player, a interface já fica mais enxuta

---

## Dica importante
Quando um player entrar, o mestre precisa:
1. selecionar o token
2. em **Controlado por**, escolher o player correto

Sem isso, o player entra e só contempla a vida.

---

## Estrutura de dados
O projeto salva a campanha compartilhada em:

- `rooms/{ROOM_ID}`

Os mapas e tokens vão para:

- `rooms/{ROOM_ID}/maps/...`
- `rooms/{ROOM_ID}/assets/...`

---

## Segurança
As regras estão simples para você conseguir publicar sem dor de cabeça.

Se depois quiser endurecer:
- restringir quem escreve em cada sala
- validar mestre vs player
- separar documentos por tokens/barreiras/cena
- colocar backend

Mas para colocar no ar rápido, isso aqui já funciona sem te jogar numa caverna de configuração.

