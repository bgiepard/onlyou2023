import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyADSPGCWyehR9oOjIkrs51ftjkKM57xvEg",
  authDomain: "onlyou-ac6e7.firebaseapp.com",
  projectId: "onlyou-ac6e7",
  storageBucket: "onlyou-ac6e7.appspot.com",
  messagingSenderId: "549343734336",
  appId: "1:549343734336:web:1c931862dd5c0a4b078da5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db =  getFirestore();

export { auth, db };