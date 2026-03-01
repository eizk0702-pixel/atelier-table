// firebase-config.js
// Versão correta para GitHub Pages + Firestore sem Storage

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, serverTimestamp, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD4m_9oQsokn9O-WlUBik4sMT2JHXIRSjA",
  authDomain: "atelier-table.firebaseapp.com",
  projectId: "atelier-table",
  appId: "1:389068990319:web:c0a9febebd522dd25d6a9a",
  messagingSenderId: "389068990319"
};

const placeholders = new Set([
  "COLE_AQUI",
  "SEU_PROJETO.firebaseapp.com",
  "SEU_PROJECT_ID",
  "SEU_APP_ID",
  "SEU_MESSAGING_SENDER_ID"
]);

const firebaseEnabled = Object.values(firebaseConfig).every(
  value => value && !placeholders.has(value)
);

let app = null;
let auth = null;
let db = null;

if (firebaseEnabled) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
}

async function ensureSignedIn() {
  if (!firebaseEnabled || !auth) throw new Error("Firebase não configurado.");
  if (auth.currentUser) return auth.currentUser;
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
