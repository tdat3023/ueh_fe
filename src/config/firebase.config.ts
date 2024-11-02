import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBPZB3wEN_v8J6QujvBLRldSipOIbGvi0A",
  authDomain: "qltv-c2380.firebaseapp.com",
  projectId: "qltv-c2380",
  storageBucket: "qltv-c2380.appspot.com",
  messagingSenderId: "422558800289",
  appId: "1:422558800289:web:d2e66abcb4d1dd9c5493e0",
  measurementId: "G-CJF6CJBPHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };