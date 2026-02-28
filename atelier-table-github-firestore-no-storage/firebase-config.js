
// Preencha este arquivo com a configuração do seu projeto Firebase.
// Não precisa esconder essas chaves no frontend. O que protege seu projeto são as regras.
// Esta versão usa apenas Auth anônimo + Firestore. Os mapas e tokens vêm do GitHub Pages pela pasta assets/.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, serverTimestamp, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "COLE_AQUI",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJECT_ID",
  appId: "SEU_APP_ID",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID"
};

const placeholders = new Set([
  "COLE_AQUI",
  "SEU_PROJETO.firebaseapp.com",
  "SEU_PROJECT_ID",
  "SEU_APP_ID",
  "SEU_MESSAGING_SENDER_ID"
]);

const firebaseEnabled = Object.values(firebaseConfig).every(value => value && !placeholders.has(value));

let app = null;
let auth = null;
let db = null;

if(firebaseEnabled){
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
}

async function ensureSignedIn(){
  if(!firebaseEnabled || !auth) throw new Error("Firebase não configurado.");
  if(auth.currentUser) return auth.currentUser;
  const result = await signInAnonymously(auth);
  return result.user;
}

export {
  firebaseEnabled,
  app,
  auth,
  db,
  ensureSignedIn,
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
  onSnapshot
};
