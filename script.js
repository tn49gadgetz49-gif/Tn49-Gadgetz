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