import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Insert Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAQyAueuwXC2eOM0hXeBDx8msbKUUP6Lxg",
  authDomain: "moviroom-a3663.firebaseapp.com",
  projectId: "moviroom-a3663",
  storageBucket: "moviroom-a3663.appspot.com",
  messagingSenderId: "539481957305",
  appId: "1:539481957305:web:8d36e92cce80f1ffb28c"
};

const app = initializeApp(firebaseConfig);
export const db: any = getFirestore(app);
