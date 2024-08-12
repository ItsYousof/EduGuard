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

    let auth = sessionStorage.getItem('auth');
    if (!auth == 'true') {
        window.location.href = 'login.html';
    }

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
    document.getElementById("other1s").style.display = "flex";
    setTimeout(function() {
        show();
    }, 1);
}
