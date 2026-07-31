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
