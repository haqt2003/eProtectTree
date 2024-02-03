import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);

export { analytics };
