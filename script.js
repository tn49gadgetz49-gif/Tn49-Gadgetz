import { db } from "./firebase.js";
import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

window.testFirebase = async function () {
  try {
    await addDoc(collection(db, "customers"), {
      name: "Test Customer",
      mobile: "9999999999",
      prize: "Testing",
      createdAt: new Date()
    });

    alert("✅ Firestore Connected Successfully!");
  } catch (e) {
    console.error(e);
    alert("❌ Error: " + e.message);
  }
};
// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUdMxxX0t2fMf_oKJWoU4iOTquChympyo",
  authDomain: "tn49-gadgetz.firebaseapp.com",
  projectId: "tn49-gadgetz",
  storageBucket: "tn49-gadgetz.firebasestorage.app",
  messagingSenderId: "106034304493",
  appId: "1:106034304493:web:698b06a1202f0d4bd043e4",
  measurementId: "G-DQYGWKYL3Q"
};

// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Lucky Spin Button
const spinBtn = document.getElementById("spinBtn");

if (spinBtn) {
  spinBtn.addEventListener("click", async () => {

    const prizes = [
      "Bluetooth Neckband",
      "USB Cable",
      "Tempered Glass",
      "Mobile Stand",
      "Wireless Earbuds",
      "Better Luck Next Time"
    ];

    const prize = prizes[Math.floor(Math.random() * prizes.length)];

    alert("🎉 You Won: " + prize);

    // Save to Firestore
    await addDoc(collection(db, "spin_results"), {
      prize: prize,
      time: new Date().toISOString()
    });

  });
}
