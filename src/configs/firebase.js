import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { getDatabase, ref, onValue, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA4yiTkCSj1XY1ISjbTmX-X9jaDcoyTzdY",
  authDomain: "eprotecttree-8a002.firebaseapp.com",
  databaseURL:
    "https://eprotecttree-8a002-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "eprotecttree-8a002",
  storageBucket: "eprotecttree-8a002.appspot.com",
  messagingSenderId: "493967977430",
  appId: "1:493967977430:web:7e5881c636bacc5bdb9277",
  measurementId: "G-JVZ5HHYYPM",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();

export { auth, db, doc, getDoc, ref, onValue, push };
