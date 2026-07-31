import { db } from "./firebase.js";

import {
  collection,
  getDocs,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Save Next Prize
const savePrizeBtn = document.getElementById("savePrizeBtn");

if (savePrizeBtn) {
  savePrizeBtn.addEventListener("click", async () => {

    const prize =
      document.getElementById("prize").value;

    await setDoc(doc(db, "settings", "nextPrize"), {
      prize: prize
    });

    alert("✅ Next prize saved successfully.");

  });
}

// Load Winner History
async function loadHistory() {

  const table =
    document.getElementById("history");

  const snapshot =
    await getDocs(collection(db, "customers"));

  table.innerHTML = "";

  snapshot.forEach((doc) => {

    const data = doc.data();

    table.innerHTML += `
      <tr>
        <td>${data.name || "-"}</td>
        <td>${data.mobile || "-"}</td>
        <td>${data.prize || "-"}</td>
      </tr>
    `;

  });

}

loadHistory();
