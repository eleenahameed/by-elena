// firebase-config.js — shared setup for By Elena store
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  query,
  orderBy,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCvYfkCrYl5hlgL0wEF0KJNKSfgA6nXlrk",
  authDomain: "by-elena.firebaseapp.com",
  projectId: "by-elena",
  storageBucket: "by-elena.firebasestorage.app",
  messagingSenderId: "526280129314",
  appId: "1:526280129314:web:5d6a2a5b1e4c7f8d9e0abc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth, db,
  signInWithEmailAndPassword, onAuthStateChanged, signOut,
  collection, addDoc, getDocs, doc, updateDoc, query, orderBy, serverTimestamp
};
