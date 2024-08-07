function showPopup() {
    document.getElementById("create-popup").style.display = "flex";
}

function hidePopup() {
    document.getElementById("create-popup").style.display = "none";
}

function createColab() {
    hidePopup();
    document.getElementById("loading-wrapper").style.display = "block";
    setTimeout(function() {
        document.getElementById("loading-wrapper").style.display = "none";
        
    }, 2500);
}