// Preencha este arquivo com a configuração do seu projeto Firebase.
// Não precisa esconder essas chaves no frontend. O que protege seu projeto são as regras.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, serverTimestamp, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "COLE_AQUI",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_BUCKET.appspot.com",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID"
};

const placeholders = new Set([
  "COLE_AQUI",
  "SEU_PROJETO.firebaseapp.com",
  "SEU_PROJECT_ID",
  "SEU_BUCKET.appspot.com",
  "SEU_MESSAGING_SENDER_ID",
  "SEU_APP_ID"
]);

const firebaseEnabled = Object.values(firebaseConfig).every(value => value && !placeholders.has(value));

let app = null;
let auth = null;
let db = null;
let storage = null;

if(firebaseEnabled){
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
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
  storage,
  ensureSignedIn,
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
  onSnapshot,
  storageRef,
  uploadBytes,
  getDownloadURL
};
