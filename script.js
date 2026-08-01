import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  query,
  where,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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
spinBtn.addEventListener("click", async () => {

  const name = nameInput.value.trim();
  const mobile = mobileInput.value.trim();

  // Validate Name
  if (name === "") {
    alert("Please enter your name");
    return;
  }

  // Validate Mobile
  if (!/^[0-9]{10}$/.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number");
    return;
  }

  // Prevent multiple clicks
  if (spinning) return;

  spinning = true;
  spinBtn.disabled = true;

  // Check duplicate mobile
  const q = query(
    collection(db, "customers"),
    where("mobile", "==", mobile)
  );

  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    alert("❌ This mobile number has already used Lucky Spin.");
    spinning = false;
    spinBtn.disabled = false;
    return;
  }

  // Random Prize
  const random = Math.floor(Math.random() * prizes.length);
  const prize = prizes[random];

  // Rotate Wheel
  const rotation = (360 * 5) + (random * 60);

  wheel.style.transform = `rotate(${rotation}deg)`;
    setTimeout(async () => {

    // Show Result
    result.innerHTML = `
      <h2>🎉 Congratulations!</h2>
      <p>${prize}</p>
    `;

    // Save to Firestore
    try {
      await addDoc(collection(db, "customers"), {
        name: name,
        mobile: mobile,
        prize: prize,
        createdAt: new Date()
      });

      console.log("Winner saved successfully.");

    } catch (error) {
      console.error("Firestore Error:", error);
      alert("❌ Failed to save data: " + error.message);
    }

    // Reset Button
    spinning = false;
    spinBtn.disabled = false;

  }, 5000);

});