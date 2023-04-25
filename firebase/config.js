import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBkVAJPEyQNK1np8dsnkFJLxOjkdNG7heQ",
  authDomain: "publications-400c7.firebaseapp.com",
  projectId: "publications-400c7",
  storageBucket: "publications-400c7.appspot.com",
  messagingSenderId: "218825242257",
  appId: "1:218825242257:web:f7f376ed11de00165db130",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
