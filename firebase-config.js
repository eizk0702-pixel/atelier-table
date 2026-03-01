// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4m_9oQsokn9O-WlUBik4sMT2JHXIRSjA",
  authDomain: "atelier-table.firebaseapp.com",
  projectId: "atelier-table",
  storageBucket: "atelier-table.firebasestorage.app",
  messagingSenderId: "389068990319",
  appId: "1:389068990319:web:c0a9febebd522dd25d6a9a",
  measurementId: "G-CPMMBLEF8V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
