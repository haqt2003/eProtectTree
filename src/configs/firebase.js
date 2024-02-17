import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDPfiZLWw_l0tkNh63ofupqpNH_Ir5B-x0",
  authDomain: "eprotecttree.firebaseapp.com",
  databaseURL:
    "https://eprotecttree-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "eprotecttree",
  storageBucket: "eprotecttree.appspot.com",
  messagingSenderId: "702828974326",
  appId: "1:702828974326:web:c0b0d737ee8077dd229cd7",
  measurementId: "G-P17P7L5NHP",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase();

export { auth, db, ref, onValue };
