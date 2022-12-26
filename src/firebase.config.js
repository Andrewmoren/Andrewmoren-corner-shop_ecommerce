import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCUicGJ1b3SJdHl3u_y5D5MXZ6AnpzhCVo",
  authDomain: "cornershop-bab94.firebaseapp.com",
  projectId: "cornershop-bab94",
  storageBucket: "cornershop-bab94.appspot.com",
  messagingSenderId: "788586197934",
  appId: "1:788586197934:web:9e192a3a34868795700e3f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
