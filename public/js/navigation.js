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

async function playMusic() {
    let audio = new Audio('https://data-sable.vercel.app/music1.mp3');
    audio.play();
    audio.loop = true;
    audio.volume = 1.0;
}

async function playMusic1() {
    let audio = new Audio('https://data-sable.vercel.app/music2.mp3');
    audio.play();
    audio.loop = true;
    audio.volume = 1.0;
}

async function playMusic2() {
    let audio = new Audio('https://data-sable.vercel.app/music3.mp3');
    audio.play();
    audio.loop = true;
    audio.volume = 1.0;
}

async function playMusic3() {
    let audio = new Audio('https://data-sable.vercel.app/music4.mp3');
    audio.play();
    audio.loop = true;
    audio.volume = 1.0;
}

function showOther1s() {
    document.getElementById("others").style.display = "none";
    document.getElementById("other1s").style.display = "flex";
    setTimeout(function() {
        show();
    }, 1);
}