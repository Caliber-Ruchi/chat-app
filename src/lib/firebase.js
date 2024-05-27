import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-ce492.firebaseapp.com",
  projectId: "chatapp-ce492",
  storageBucket: "chatapp-ce492.appspot.com",
  messagingSenderId: "587248492886",
  appId: "1:587248492886:web:e95302b98d2f3e7df636f7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()