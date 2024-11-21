// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDJD4bro5sx3kKVHfVaRjQQatiUrD2yGc",
  authDomain: "web-sp-g4.firebaseapp.com",
  projectId: "web-sp-g4",
  storageBucket: "web-sp-g4.firebasestorage.app",
  messagingSenderId: "117383641282",
  appId: "1:117383641282:web:1f612f27f0fa16b25be35b",
  measurementId: "G-Z2R7ZPPLZX",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
