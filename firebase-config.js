// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8jBvQK98gFTxoGuBtLw4I50zkgBfAuI8",
  authDomain: "submissions-7939c.firebaseapp.com",
  projectId: "submissions-7939c",
  storageBucket: "submissions-7939c.appspot.com", // Fixed incorrect storage bucket domain
  messagingSenderId: "80384898240",
  appId: "1:80384898240:web:46058c06d5089bab822925",
  measurementId: "G-FNJ6D1S33V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

// Export Firestore functions
export { db, collection, addDoc };