if (localStorage.getItem("notes") === null) {
    localStorage.setItem("notes", JSON.stringify([]));
}
let currentEditIndex = null;


document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.hamburger').addEventListener('click', () => {
        document.querySelector('.menu').classList.toggle('active');
    });
    
    document.addEventListener('click', function(event) {
        if (!document.querySelector('.menu').contains(event.target) && !document.querySelector('.hamburger').contains(event.target)) {
            document.querySelector('.menu').classList.remove('active');
        }

        if (!document.querySelector('.dropdown').contains(event.target) && !document.querySelector('.navbar .menu li.dropdown-parent').contains(event.target)) {
            document.querySelector('.dropdown').style.display = 'none';
        }

        if (!document.querySelector('.navbar .menu li.dropdown-parent').contains(event.target)) {
            document.querySelector('.dropdown').style.display = 'none';
        }
    });

    document.querySelector('.navbar .menu li.dropdown-parent').addEventListener('click', function(event) {
        event.preventDefault();
        if (document.querySelector('.dropdown').style.display == 'flex') {
            console.log('here');
            document.querySelector('.dropdown').style.display = 'none';
        }else {
            document.querySelector('.dropdown').style.display = 'flex';
            console.log('there');
        }
    });

    document.getElementById("save-notes-btn").addEventListener("click", function() {
        createNotes();
    });

});

function showOthers() {
    document.querySelector('.dropdown').style.display = 'flex';
    document.getElementById("others").style.display = "flex";
    setTimeout(function() {
        show();
    }, 1);
}

function show() {
    document.querySelector('.dropdown').style.display = 'flex';
}

let currentSong = null;

function playMusic(url) {
    // Stop the currently playing song if there is one
    if (currentSong) {
        currentSong.pause();
        currentSong.currentTime = 0; // Reset the current time
    }

    // Create and play the new song
    currentSong = new Audio(url);
    currentSong.loop = true;
    currentSong.volume = 1.0;
    currentSong.play().catch(error => {
        console.error("Failed to play audio:", error);
    });
}

// Functions to play specific songs
function playMusic1() {
    playMusic('https://data-sable.vercel.app/music1.mp3');
}

function playMusic2() {
    playMusic('https://data-sable.vercel.app/music2.mp3');
}

function playMusic3() {
    playMusic('https://data-sable.vercel.app/music3.mp3');
}

function playMusic4() {
    playMusic('https://data-sable.vercel.app/music4.mp3');
}

function showOther1s() {
    document.getElementById("others").style.display = "none";
    document.getElementById("other1").style.display = "flex";
    setTimeout(function() {
        show();
    }, 1);
}

// Check if `shift` + `n` is pressed
document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.key === 'N') {
        event.preventDefault();
        if (document.getElementById("notes-popup").style.display == "flex") {
            document.getElementById("notes-popup").style.display = "none";
        } else {
            document.getElementById("notes-popup").style.display = "flex";
        }
    }
});

function closeNotesPopup() {
    document.getElementById("notes-popup").style.display = "none";
}

function createNotes() {
    let notes = document.getElementById("notes-textarea").value;
    if (notes === "") {
        alert("Please enter some notes.");
        return;
    }
    document.getElementById("notes-textarea").value = "";

    let date = new Date();
    let dateString = date.toLocaleDateString();
    let firstTwoWords = notes.split(' ').slice(0, 2).join(' ');
    let data = {
        title: firstTwoWords,
        notes: notes,
        date: dateString
    };

    let notesArray = JSON.parse(localStorage.getItem("notes")) || [];

    if (currentEditIndex !== null) {
        // Update the existing note
        notesArray[currentEditIndex] = data;
        localStorage.setItem("notes", JSON.stringify(notesArray));
        currentEditIndex = null; // Reset the edit index
    } else {
        // Create a new note
        notesArray.push(data);
        localStorage.setItem("notes", JSON.stringify(notesArray));
    }

    // Reload notes
    loadNotes();
}


function addNotes(title, date, notes, index) {
    let notesContainer = document.getElementById("p-notes");
    let note = document.createElement("div");
    note.classList.add("note");

    let titleElement = document.createElement("p");
    titleElement.classList.add("note-title");
    titleElement.textContent = title;

    let dateElement = document.createElement("p");
    dateElement.classList.add("note-date");
    dateElement.textContent = date;

    note.appendChild(titleElement);
    note.appendChild(dateElement);
    notesContainer.appendChild(note);

    note.addEventListener("click", function() {
        document.getElementById("notes-textarea").value = notes;
        currentEditIndex = index; // Set the index of the note being edited
    });
}

function loadNotes() {
    let notesArray = JSON.parse(localStorage.getItem("notes")) || [];
    let notesContainer = document.getElementById("p-notes");
    notesContainer.innerHTML = ""; // Clear existing notes

    notesArray.forEach((note, index) => {
        addNotes(note.title, note.date, note.notes, index);
    });
}

document.addEventListener("DOMContentLoaded", loadNotes);

document.addEventListener("DOMContentLoaded", function() {
    let authentication = sessionStorage.getItem("auth");

    if (authentication !== "true" && window.location.pathname !== "/login" &&
        window.location.pathname !== '/home' && window.location.pathname !== '/') {
        window.location.href = "/login";
    }
});
