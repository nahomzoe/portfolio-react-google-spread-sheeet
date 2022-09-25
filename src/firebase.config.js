import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAng9--RlYkJI8gh5MlE0uIHySYPqtthI",
  authDomain: "myportfolio-9d733.firebaseapp.com",
  projectId: "myportfolio-9d733",
  storageBucket: "myportfolio-9d733.appspot.com",
  messagingSenderId: "429659382992",
  appId: "1:429659382992:web:9c27c59aab108ecbea2ad5",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
