// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAUdMxxX0t2fMf_oKJWoU4iOTquChympyo",
  authDomain: "tn49-gadgetz.firebaseapp.com",
  projectId: "tn49-gadgetz",
  storageBucket: "tn49-gadgetz.firebasestorage.app",
  messagingSenderId: "106034304493",
  appId: "1:106034304493:web:698b06a1202f0d4bd043e4",
  measurementId: "G-DQYGWKYL3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore Database
const db = getFirestore(app);
// Export
export { db };

