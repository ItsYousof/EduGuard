document.addEventListener("DOMContentLoaded", function () {
    let typing_text = "EduGuard";
    let typingh1 = document.getElementById("typing");
    let i = 0;

    function type() {
        if (i < typing_text.length) {
            typingh1.innerText += typing_text.charAt(i);
            i++;
            setTimeout(type, 100);
        } else {
            setTimeout(function () {
                typingh1.innerText = "";
                i = 0; // Reset the index
                type();
            }, 3000);
        }
    }

    if (typingh1) { // Ensure typingh1 is not null
        type();
    } else {
        console.error("Element with id 'typing' not found.");
    }
});
