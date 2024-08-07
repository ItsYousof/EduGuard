document.addEventListener('DOMContentLoaded', function() {
    let startBTN = document.getElementById('start-quiz');

    startBTN.addEventListener('click', function() {
        let topic = document.getElementById('topic').value;
        showQuiz();
        start(topic);
    });
})

function start(topic) {
    switch (topic) {
        case 'grammer':
            grammer();
            break;
        case 'vocab':
            vocab();
            break;
        case 'pronunciation':
            pronunciation();
            break;
        case 'speaking':
            speaking();
            break;
    }
}

let questions = [];


function grammer() {
    fetch('../data/english.json')
        .then(response => response.json())
        .then(data => {
            // Shuffle the array and select the first 10 questions
            const shuffledQuestions = shuffleArray(data);
            questions = shuffledQuestions.slice(0, 10);
            displayQuestions();
        })
        .catch(error => console.error('Error loading JSON:', error));
}

function vocab() {
    fetch('../data/vocab.json')
        .then(response => response.json())
        .then(data => {
            // Shuffle the array and select the first 10 questions
            const shuffledQuestions = shuffleArray(data);
            questions = shuffledQuestions.slice(0, 10);
            displayQuestions();
        })
        .catch(error => console.error('Error loading JSON:', error));
}

function pronunciation() {
    fetch('../data/pronunce.json')
        .then(response => response.json())
        .then(data => {
            // Shuffle the array and select the first 10 questions
            const shuffledQuestions = shuffleArray(data);
            questions = shuffledQuestions.slice(0, 10);
            displayQuestions();
        })
        .catch(error => console.error('Error loading JSON:', error));
}

function speaking() {
    fetch('../data/comp.json')
        .then(response => response.json())
        .then(data => {
            // Shuffle the array and select the first 10 questions
            const shuffledQuestions = shuffleArray(data);
            questions = shuffledQuestions.slice(0, 10);
            displayQuestions();
        })
        .catch(error => console.error('Error loading JSON:', error));
}
function shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    
    return array;
}

function displayQuestions() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = ''; // Clear any existing content

    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question';

        const questionText = document.createElement('p');
        questionText.textContent = question.question;
        questionElement.appendChild(questionText);

        question.answers.forEach(answer => {
            const answerElement = document.createElement('div');
            answerElement.className = 'answer';

            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question-${index}`;
            input.value = answer;

            const label = document.createElement('label');
            label.textContent = answer;
            label.prepend(input);

            answerElement.appendChild(label);
            questionElement.appendChild(answerElement);
        });

        quizContainer.appendChild(questionElement);
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', checkAnswers);
    quizContainer.appendChild(submitButton);
}

function checkAnswers() {
    let score = 0;

    questions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="question-${index}"]:checked`).value;
        if (selectedAnswer === question.correctAnswer) {
            score++;
        }
    });

    showMainMenu();
}

function showMainMenu() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = ''; 
    quizContainer.style.display = 'none';

    const mainMenu = document.getElementById('main-menu');
    mainMenu.style.display = 'flex';
}

function showQuiz() {
    const mainMenu = document.getElementById('main-menu');
    mainMenu.style.display = 'none';
    const quizContainer = document.getElementById('quiz');
    quizContainer.style.display = 'block';
}