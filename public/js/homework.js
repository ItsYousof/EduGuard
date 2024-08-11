import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getDatabase, ref, set, onValue, remove, push } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyC3RuGeo6dCnSljaUbyAns9Gq79vD8jeRo",
    authDomain: "eduguard-e0c86.firebaseapp.com",
    databaseURL: "https://eduguard-e0c86-default-rtdb.firebaseio.com",
    projectId: "eduguard-e0c86",
    storageBucket: "eduguard-e0c86.appspot.com",
    messagingSenderId: "760038084932",
    appId: "1:760038084932:web:92aab577bf287776b0c711",
    measurementId: "G-LM8YXKCK4H"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const userID = localStorage.getItem("userID");

if (userID === null) {
    const newUserID = Math.random().toString(36).substring(7);
    localStorage.setItem("userID", newUserID);
    const userRef = ref(db, "users/" + newUserID);
    set(userRef, {
        name: localStorage.getItem("userID"),
        homework: [
            { title: "This is an example", description: "Press the add button on the bottom right", link: "https://www.google.com" }
        ]
    });
}

function showPopup() {
    document.getElementById("popup").style.display = "flex";
}

function hidePopup() {
    document.getElementById("popup").style.display = "none";
}

async function addHomework() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const link = document.getElementById("link").value;
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <h1>${title}</h1>
        <p>${description}</p>
        <div class="bottom">
            <a href="${link}">Link</a>
            <i class='bx bx-trash'></i>
        </div>
    `;

    hidePopup();

    const homeworkRef = ref(db, "users/" + userID + "/homework");
    const newHomeworkRef = push(homeworkRef);

    await set(newHomeworkRef, {
        title: title,
        description: description,
        link: link
    });

    let homeworkList = document.getElementById("homework-cards");
    homeworkList.appendChild(card);

    const trash = card.querySelector("i.bx-trash");
    trash.addEventListener("click", async function() {
        await remove(newHomeworkRef);
        card.remove();
    });

    location.reload();
}

document.addEventListener("DOMContentLoaded", function() {
    displayHomework();

    document.getElementById("add-btn").addEventListener("click", showPopup);
    document.getElementById("add-c").addEventListener("click", addHomework);
});

function displayHomework() {
    const homeworkRef = ref(db, "users/" + userID + "/homework");
    onValue(homeworkRef, function(snapshot) {
        const homeworkList = document.getElementById("homework-cards");
        homeworkList.innerHTML = ""; // Clear existing list

        snapshot.forEach(function(childSnapshot) {
            const homework = childSnapshot.val();
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <h1>${homework.title}</h1>
                <p>${homework.description}</p>
                <div class="bottom">
                    <a href="${homework.link}">Link</a>
                    <i class='bx bx-trash' data-id="${childSnapshot.key}"></i>
                </div>
            `;

            // Add delete functionality
            const trash = card.querySelector("i.bx-trash");
            trash.addEventListener("click", async function() {
                const homeworkKey = trash.getAttribute("data-id");
                const homeworkToDeleteRef = ref(db, `users/${userID}/homework/${homeworkKey}`);
                await remove(homeworkToDeleteRef);
                card.remove();
            });

            homeworkList.appendChild(card); // Add card to the list
        });
    });
}
