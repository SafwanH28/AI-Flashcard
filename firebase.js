// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCAyayLy_7pgeckcJXt_pEzYoE7GldFYtM",
  authDomain: "flashcardsaas-124de.firebaseapp.com",
  projectId: "flashcardsaas-124de",
  storageBucket: "flashcardsaas-124de.appspot.com",
  messagingSenderId: "177632441459",
  appId: "1:177632441459:web:1212feaab5198d0e552606",
  measurementId: "G-5R0V5SY3PY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};