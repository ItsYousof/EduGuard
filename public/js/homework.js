// sk-6aPcTq6OfSahNmqVaK7ZCPD8eu7kXmPXHNf8N9yiCvT3BlbkFJuaDFmQ_n23k1Y-hXS0Yig2XlFDgwEsk5L1xnQFg5QA
if (localStorage.getItem("homework") === null) {
    localStorage.setItem("homework", JSON.stringify([]));
}

function showPopup() {
    document.getElementById("popup").style.display = "flex";
}

function hidePopup() {
    document.getElementById("popup").style.display = "none";
}

function addHomework() {
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

    const homework = JSON.parse(localStorage.getItem("homework"));
    homework.push({ title, description, link });
    localStorage.setItem("homework", JSON.stringify(homework));
    document.getElementById("homework-cards").appendChild(card);
    hidePopup();

    const trash = card.querySelector("i.bx-trash");
    trash.addEventListener("click", function() {
        card.remove();
        const updatedHomework = JSON.parse(localStorage.getItem("homework"));
        const index = updatedHomework.findIndex(item => item.title === title && item.description === description && item.link === link);
        if (index > -1) {
            updatedHomework.splice(index, 1);
            localStorage.setItem("homework", JSON.stringify(updatedHomework));
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const homework = JSON.parse(localStorage.getItem("homework"));
    homework.forEach(function(homeworkItem) {
        plainAdd(homeworkItem.title, homeworkItem.description, homeworkItem.link);
    });
});

function plainAdd(title, description, link) {
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
    document.getElementById("homework-cards").appendChild(card);

    const trash = card.querySelector("i.bx-trash");
    trash.addEventListener("click", function() {
        card.remove();
        const updatedHomework = JSON.parse(localStorage.getItem("homework"));
        const index = updatedHomework.findIndex(item => item.title === title && item.description === description && item.link === link);
        if (index > -1) {
            updatedHomework.splice(index, 1);
            localStorage.setItem("homework", JSON.stringify(updatedHomework));
        }
    });
}
