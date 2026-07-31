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
const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");

const prizes = [
  "🎧 Bluetooth Neckband",
  "🔌 USB Cable",
  "🛡️ Tempered Glass",
  "📱 Mobile Stand",
  "🎧 Wireless Earbuds",
  "😔 Better Luck Next Time"
];

let spinning = false;

spinBtn.addEventListener("click", () => {

  if (spinning) return;

  spinning = true;

  const random = Math.floor(Math.random() * prizes.length);

  const angle = (360 * 6) + (random * 60);

  wheel.style.transform = `rotate(${angle}deg)`;

  setTimeout(() => {
    alert("🎉 Congratulations!\n\n" + prizes[random]);
    spinning = false;
  }, 5000);

});
const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");
const result = document.getElementById("result");

const nameInput = document.getElementById("customerName");
const mobileInput = document.getElementById("customerMobile");

const prizes = [
  "🎧 Bluetooth Neckband",
  "🔌 USB Charging Cable",
  "🛡️ Tempered Glass",
  "📱 Mobile Stand",
  "🎧 Wireless Earbuds",
  "😔 Better Luck Next Time"
];

let spinning = false;

spinBtn.addEventListener("click", () => {

  const name = nameInput.value.trim();
  const mobile = mobileInput.value.trim();

  if (name === "") {
    alert("Please enter your name");
    return;
  }

  if (mobile.length !== 10) {
    alert("Please enter a valid 10 digit mobile number");
    return;
  }

  if (spinning) return;

  spinning = true;

  spinBtn.disabled = true;

  const random = Math.floor(Math.random() * prizes.length);

  const rotation = 360 * 5 + random * 60;

  wheel.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {

    result.innerHTML =
      `<h2>🎉 Congratulations!</h2><br>${prizes[random]}`;

    spinBtn.disabled = false;
    spinning = false;

  }, 5000);

});
import { db } from "./firebase.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
spinBtn.addEventListener("click", async () => {

  const name = nameInput.value.trim();
  const mobile = mobileInput.value.trim();

  if (name === "") {
    alert("Please enter your name");
    return;
  }

  if (mobile.length !== 10) {
    alert("Please enter a valid 10 digit mobile number");
    return;
  }

  // 👇 இந்த இடத்தில்தான் Validation Code-ஐ Paste செய்ய வேண்டும்

  const q = query(
    collection(db, "customers"),
    where("mobile", "==", mobile)
  );

  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    alert("❌ This mobile number has already used its Lucky Spin.");
    return;
  }

  // 👇 இதற்குப் பிறகுதான் Wheel Spin ஆக வேண்டும்

  if (spinning) return;

  spinning = true;

  // ... உங்கள் Spin Code ...

});
const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spinBtn");

// ... மீதமுள்ள code ...
