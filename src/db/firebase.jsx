import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhluyHxfm-uZY3or7u9XGhk9tn_mvCXnE",
  authDomain: "production-55-a9043.firebaseapp.com",
  projectId: "production-55-a9043",
  storageBucket: "production-55-a9043.firebasestorage.app",
  messagingSenderId: "350520412890",
  appId: "1:350520412890:web:78f12d8a285710eaf7b3e3",
  measurementId: "G-7G0HTEPZE3",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);

export { app, auth };
