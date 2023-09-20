import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Insert Your Firebase Config
const firebaseConfig = {
  // CONFIG
};

const app = initializeApp(firebaseConfig);
export const db: any = getFirestore(app);
