import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAjyeX3ilpSRyyCUtIGo6nHgoGJhYNw7Yo",
  authDomain: "onlyou2023-409f5.firebaseapp.com",
  projectId: "onlyou2023-409f5",
  storageBucket: "onlyou2023-409f5.appspot.com",
  messagingSenderId: "442228808651",
  appId: "1:442228808651:web:1aac944e93bba50247b44e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db =  getFirestore();

export { auth, db };


// ios: 442228808651-mutb1mqkiltng0ults573k1hodpc64bl.apps.googleusercontent.com
// android preview: 442228808651-qe1shf55tqhstchggam6pe9pa8rpa9bq.apps.googleusercontent.com