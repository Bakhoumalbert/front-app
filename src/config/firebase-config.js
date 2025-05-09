// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBnIRRl0UXZxu5LDodvzyuAyIb_7KSHN0",
  // apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "coderapp-99e22.firebaseapp.com",
  projectId: "coderapp-99e22",
  storageBucket: "coderapp-99e22.appspot.com",
  messagingSenderId: "912927723104",
  appId: "1:912927723104:web:a1054c640f9a113e4bfd05"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
