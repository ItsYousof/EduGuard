let startButton = document.getElementById("start-btn");
let previewButton = document.getElementById("preview-btn");
let quizScreen = document.getElementById("quiz-screen");
let endScreen = document.getElementById("end-screen");
let usernameInput = document.getElementById("username");
let lobbyScreen = document.getElementById("main-lobby");
let previewScreen = document.getElementById("preview-screen");
let backButton = document.getElementById("back-btn");
let previewInput = document.getElementById("preview-code-input");
let username = null;
let gameUsername = null;
let ranTimer = false;

document.addEventListener("DOMContentLoaded", function () {
    startButton.addEventListener("click", function () {
        showQuizScreen();
        if (usernameInput.value !== "") {
            username = usernameInput.value;
            gameUsername = username;
        } else {
            username = "Anonymous";
            gameUsername = "Anonymous";
        }

        startQuiz(usernameInput.value);
    });

    previewButton.addEventListener("click", function () {
        showPreviewScreen();
    });

    backButton.addEventListener("click", function () {
        document.getElementById("preview-screen").style.display = "none";
        document.getElementById("main-lobby").style.display = "flex";
    });

    previewInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            let code = previewInput.value;
            let decodedCode = decodeCode(code);
            if (decodedCode) {
                document.getElementById("preview-score").textContent = `Score: ${decodedCode.score} / 10`;
                document.getElementById("preview-username").textContent = `Username: ${decodedCode.username}`;
                document.getElementById("preview-code").textContent = `Code: ${code}`;
            }
        }
    })
})

function showQuizScreen() {
    lobbyScreen.style.display = "none";
    quizScreen.style.display = "block";
}

async function startQuiz(username) {
    // Get the questions from the JSON file
    const response = await fetch("math.json");
    const questionsJson = await response.json();

    // Shuffle the questions and return 10 random questions, set other variables
    let quizQuestions = shuffleArray(questionsJson).slice(0, 10);

    // Shuffle the answers
    for (let i = 0; i < quizQuestions.length; i++) {
        let answers = quizQuestions[i].answers;
        quizQuestions[i].answers = shuffleArray(answers);
    }

    let currentQuestionIndex = 0;
    let score = 0;

    // Display the first question
    displayQuestion(quizQuestions[currentQuestionIndex]);

    // Function to start a 10 second timer using the meter tag in HTML
    function startTimer() {
        let timeLeft = 35;
        let timer = setInterval(function () {
            document.getElementById("progress-bar").value = timeLeft;
            timeLeft--;
            if (timeLeft < 0) {
                clearInterval(timer);
                endQuiz(score, username);
                ranTimer = true;
            }
        }, 1000);
    }

    startTimer();

    // Add event listener to each answer
    let answers = document.getElementById("answers");
    answers.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            // Check if the answer is correct
            let selectedAnswer = parseInt(event.target.textContent);
            if (selectedAnswer === quizQuestions[currentQuestionIndex].answer) {
                // If the answer is correct, increment the score
                score++;
            }
            currentQuestionIndex++;
            document.getElementById("score").textContent = currentQuestionIndex;
            if (currentQuestionIndex < quizQuestions.length) {
                displayQuestion(quizQuestions[currentQuestionIndex]);
            } else {

                endQuiz(score);
            }
        }
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function displayQuestion(question) {
    let questionText = document.getElementById("question");
    let answers = document.getElementById("answers");
    questionText.textContent = question.question;
    answers.innerHTML = "";
    for (let i = 0; i < question.answers.length; i++) {
        let answer = document.createElement("li");
        answer.textContent = question.answers[i];
        answers.appendChild(answer);
    }

}

function generateCode(score, username) {
    let splitUsernameChars = username.split("");
    let reversedUsernameChars = splitUsernameChars.reverse();
    let firstLetter = splitUsernameChars[0];
    let lastLetter = splitUsernameChars[splitUsernameChars.length - 1];

    // Convert score to hexadecimal, ensure it's a single character
    let hexScore = score.toString(16);

    let code = `${lastLetter}${hexScore}${reversedUsernameChars.join("")}${firstLetter}`;
    
    return code;
}

function decodeCode(code) {
    // Extract first and last letters
    let firstLetter = code[code.length - 1];
    let lastLetter = code[0];

    // Extract and convert the score from hexadecimal
    let hexScore = code[1];
    let score = parseInt(hexScore, 16);

    // Reverse the username back to normal
    let reversedUsername = code.slice(2, -1).split("").reverse().join("");

    return { score, username: reversedUsername, firstLetter, lastLetter };
}
function endQuiz(score, username) {
    quizScreen.style.display = "none";
    endScreen.style.display = "block";
    document.getElementById("score1").textContent = score + " / 10";

    // Assuming 'username' is a global variable or passed into endQuiz
    console.log(gameUsername);
    
    // Code generation algorithm
    let splitUsernameChars = gameUsername.split("");

    let reversedUsernameChars = splitUsernameChars.reverse();
    let firstLetter = splitUsernameChars[0];
    let lastLetter = splitUsernameChars[splitUsernameChars.length - 1];

    // Convert score to hexadecimal, ensure it's a single character
    let hexScore = score.toString(16);

    let code = `${lastLetter}${hexScore}${reversedUsernameChars.join("")}${firstLetter}`;
    

    // Display the code in the end screen
    document.getElementById("code").textContent = `Code: ${code}`;

    // Reload the page after 5 seconds
    setTimeout(function () {
        location.reload();
    }, 5000);
}


function showPreviewScreen() {
    lobbyScreen.style.display = "none";
    previewScreen.style.display = "block";
}