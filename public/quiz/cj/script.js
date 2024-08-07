let correctAnswerCount = 0;
let timerInterval;
let fifty_fifty_chance = Math.floor(Math.random() * 10) + 1;

function addQuesiton() {
    let firstNumber = Math.floor(Math.random() * 15) + 1;
    let secondNumber = Math.floor(Math.random() * 15) + 1;

    let finalQuestion = 'What is ' + firstNumber + ' + ' + secondNumber + '?';
    let correctAnswer = firstNumber + secondNumber;

    return [finalQuestion, correctAnswer];
}

function bigAdding() {
    let firstNumber = Math.floor(Math.random() * 500) + 1;
    let secondNumber = Math.floor(Math.random() * 500) + 1;

    let finalQuestion = 'What is ' + firstNumber + ' + ' + secondNumber + '?';
    let correctAnswer = firstNumber + secondNumber;

    return [finalQuestion, correctAnswer];
}



function subtractQuesiton() {
    let firstNumber = Math.floor(Math.random() * 15) + 1;
    let secondNumber = Math.floor(Math.random() * 15) + 1;

    if (firstNumber < secondNumber) {
        let temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp;
    }

    if (firstNumber === secondNumber) {
        secondNumber = secondNumber + 1;
    }

    let finalQuestion = 'What is ' + firstNumber + ' - ' + secondNumber + '?';
    let correctAnswer = firstNumber - secondNumber;

    return [finalQuestion, correctAnswer];
}

function multiplyQuesiton() {
    let firstNumber = Math.floor(Math.random() * 15) + 1;
    let secondNumber = Math.floor(Math.random() * 15) + 1;

    let finalQuestion = 'What is ' + firstNumber + ' x ' + secondNumber + '?';
    let correctAnswer = firstNumber * secondNumber;

    return [finalQuestion, correctAnswer];
}

function addingFractionsQuestion() {
    // Generate random numbers for the fractions
    let firstNumber = Math.floor(Math.random() * 15) + 1;
    let secondNumber = Math.floor(Math.random() * 15) + 1;
    let thirdNumber = Math.floor(Math.random() * 15) + 1;
    let fourthNumber = Math.floor(Math.random() * 15) + 1;

    // Ensure the denominators are different and non-zero
    if (firstNumber < secondNumber) {
        let temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp;
    }

    if (firstNumber === secondNumber) {
        secondNumber = secondNumber + 1;
    }

    if (thirdNumber < fourthNumber) {
        let temp = thirdNumber;
        thirdNumber = fourthNumber;
        fourthNumber = temp;
    }

    if (thirdNumber === fourthNumber) {
        fourthNumber = fourthNumber + 1;
    }

    // Calculate the numerator and denominator for the result of a/b + c/d
    const numerator = (firstNumber * fourthNumber) + (secondNumber * thirdNumber);
    const denominator = secondNumber * fourthNumber;
    
    // Function to find the greatest common divisor (GCD) to simplify the fraction
    function gcd(x, y) {
        while (y !== 0) {
            const temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }
    
    // Simplify the fraction
    const divisor = gcd(numerator, denominator);
    const simplifiedNumerator = numerator / divisor;
    const simplifiedDenominator = denominator / divisor;

    // Form the question and answer
    let finalQuestion = `What is ${firstNumber}/${secondNumber} + ${thirdNumber}/${fourthNumber}?`;
    let correctAnswer = `${simplifiedNumerator}/${simplifiedDenominator}`;

    return [finalQuestion, correctAnswer];
}

function multiplyingFractionsQuestion() {
    // Generate random numbers for the fractions
    let firstNumber = Math.floor(Math.random() * 15) + 1;
    let secondNumber = Math.floor(Math.random() * 15) + 1;
    let thirdNumber = Math.floor(Math.random() * 15) + 1;
    let fourthNumber = Math.floor(Math.random() * 15) + 1;

    // Ensure the denominators are different and non-zero
    if (firstNumber < secondNumber) {
        let temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp;
    }

    if (firstNumber === secondNumber) {
        secondNumber = secondNumber + 1;
    }

    if (thirdNumber < fourthNumber) {
        let temp = thirdNumber;
        thirdNumber = fourthNumber;
        fourthNumber = temp;
    }

    if (thirdNumber === fourthNumber) {
        fourthNumber = fourthNumber + 1;
    }

    // Calculate the numerator and denominator for the result of (a/b) * (c/d)
    const numerator = firstNumber * thirdNumber;
    const denominator = secondNumber * fourthNumber;
    
    // Function to find the greatest common divisor (GCD) to simplify the fraction
    function gcd(x, y) {
        while (y !== 0) {
            const temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }
    
    // Simplify the fraction
    const divisor = gcd(numerator, denominator);
    const simplifiedNumerator = numerator / divisor;
    const simplifiedDenominator = denominator / divisor;

    // Form the question and answer
    let finalQuestion = `What is ${firstNumber}/${secondNumber} * ${thirdNumber}/${fourthNumber}?`;
    let correctAnswer = `${simplifiedNumerator}/${simplifiedDenominator}`;

    return [finalQuestion, correctAnswer];
}


function dividingFractionsQuestion() {
    // Generate random numbers for the fractions
    let firstNumber = Math.floor(Math.random() * 15) + 1;
    let secondNumber = Math.floor(Math.random() * 15) + 1;
    let thirdNumber = Math.floor(Math.random() * 15) + 1;
    let fourthNumber = Math.floor(Math.random() * 15) + 1;

    // Ensure the denominators are different and non-zero
    if (firstNumber < secondNumber) {
        let temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp;
    }

    if (firstNumber === secondNumber) {
        secondNumber = secondNumber + 1;
    }

    if (thirdNumber < fourthNumber) {
        let temp = thirdNumber;
        thirdNumber = fourthNumber;
        fourthNumber = temp;
    }

    if (thirdNumber === fourthNumber) {
        fourthNumber = fourthNumber + 1;
    }

    // Calculate the numerator and denominator for the result of (a/b) / (c/d)
    const numerator = firstNumber * fourthNumber;
    const denominator = secondNumber * thirdNumber;
    
    // Function to find the greatest common divisor (GCD) to simplify the fraction
    function gcd(x, y) {
        while (y !== 0) {
            const temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }
    
    // Simplify the fraction
    const divisor = gcd(numerator, denominator);
    const simplifiedNumerator = numerator / divisor;
    const simplifiedDenominator = denominator / divisor;

    // Form the question and answer
    let finalQuestion = `What is ${firstNumber}/${secondNumber} / ${thirdNumber}/${fourthNumber}?`;
    let correctAnswer = `${simplifiedNumerator}/${simplifiedDenominator}`;

    return [finalQuestion, correctAnswer];
}

function addingDecimalsQuestion() {
    // Generate random decimal numbers
    let firstNumber = (Math.random() * 50).toFixed(2);
    let secondNumber = (Math.random() * 50).toFixed(2);

    // Calculate the result of multiplying the two decimal numbers
    let correctAnswer = (firstNumber + secondNumber);

    // Form the question
    let finalQuestion = `What is ${firstNumber} + ${secondNumber}?`;

    return [finalQuestion, correctAnswer];
}

function subtractingDecimalsQuestion() {
    // Generate random decimal numbers
    let firstNumber = (Math.random() * 50).toFixed(2);
    let secondNumber = (Math.random() * 50).toFixed(2);

    if (firstNumber > secondNumber) {
        let temp = firstNumber;
        firstNumber = secondNumber;
        secondNumber = temp;
    }

    // Calculate the result of subtracting the two decimal numbers
    let correctAnswer = (firstNumber - secondNumber);

    // Form the question
    let finalQuestion = `What is ${firstNumber} - ${secondNumber}?`;

    return [finalQuestion, correctAnswer];
}

function multiplyingDecimalsQuestion() {
    // Generate random decimal numbers
    let firstNumber = (Math.random() * 10).toFixed(2);
    let secondNumber = (Math.random() * 10).toFixed(2);

    // Calculate the result of multiplying the two decimal numbers
    let correctAnswer = (firstNumber * secondNumber).toFixed(2);

    // Form the question
    let finalQuestion = `What is ${firstNumber} * ${secondNumber}?`;

    return [finalQuestion, correctAnswer];
}

function dividingDecimalsQuestion() {
    // Generate random decimal numbers
    let firstNumber = (Math.random() * 10).toFixed(2);
    let secondNumber = (Math.random() * 10).toFixed(2);

    // Ensure the second number is not zero to avoid division by zero
    if (secondNumber == 0) {
        secondNumber = (Math.random() * 10 + 1).toFixed(2);
    }

    // Calculate the result of dividing the first decimal number by the second
    let correctAnswer = (firstNumber / secondNumber).toFixed(2);

    // Form the question
    let finalQuestion = `What is ${firstNumber} / ${secondNumber}?`;

    return [finalQuestion, correctAnswer];
}

function addingNegativeNumbersQuestion() {
    // Generate random negative numbers
    let firstNumber = Math.floor(Math.random() * 20) - 10;
    let secondNumber = Math.floor(Math.random() * 20) - 10;

    // Calculate the result of adding the two negative numbers
    let correctAnswer = firstNumber + secondNumber;

    // Form the question
    let finalQuestion = `What is ${firstNumber} + ${secondNumber}?`;

    return [finalQuestion, correctAnswer.toString()];
}

function subtractingNegativeNumbersQuestion() {
    // Generate random negative numbers
    let firstNumber = Math.floor(Math.random() * 20) - 10;
    let secondNumber = Math.floor(Math.random() * 20) - 10;

    // Calculate the result of subtracting the two negative numbers
    let correctAnswer = firstNumber - secondNumber;

    // Form the question
    let finalQuestion = `What is ${firstNumber} - ${secondNumber}?`;

    return [finalQuestion, correctAnswer];
}

function percentageQuestion() {
    // Generate random numbers
    let percentage = Math.floor(Math.random() * 100) + 1; // Percentage between 1 and 100
    let number = Math.floor(Math.random() * 1000) + 1; // Number between 1 and 1000

    // Calculate the result of the percentage of the number
    let correctAnswer1 = ((percentage / 100) * number).toFixed(2);
    let correctAnswer = parseInt(correctAnswer1);
    // Form the question
    let finalQuestion = `What is ${percentage}% of ${number}?`;

    return [finalQuestion, correctAnswer];
}


function orderOfOperationsQuestion() {
    // Generate random numbers
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let c = Math.floor(Math.random() * 10) + 1;
    let d = Math.floor(Math.random() * 10) + 1;
    let e = Math.floor(Math.random() * 10) + 1;

    // Choose random operators
    let operators = ['+', '-', '*', '/'];
    let op1 = operators[Math.floor(Math.random() * operators.length)];
    let op2 = operators[Math.floor(Math.random() * operators.length)];
    let op3 = operators[Math.floor(Math.random() * operators.length)];
    let op4 = operators[Math.floor(Math.random() * operators.length)];

    // Form the question
    let finalQuestion = `What is ${a} ${op1} ${b} ${op2} ${c} ${op3} ${d} ${op4} ${e}?`;

    // Use JavaScript's eval function to calculate the correct answer
    let correctAnswer;
    try {
        correctAnswer = eval(`${a} ${op1} ${b} ${op2} ${c} ${op3} ${d} ${op4} ${e}`);
        correctAnswer = correctAnswer.toFixed(2); // Round to 2 decimal places if necessary
    } catch (error) {
        correctAnswer = "Invalid expression"; // In case of division by zero or other errors
    }

    let int = parseInt(correctAnswer);

    return [finalQuestion, int];
}


function operationsAndAlgebraicThinkingQuestion() {
    let a = Math.floor(Math.random() * 20) + 1;
    let b = Math.floor(Math.random() * 20) + 1;
    let c = Math.floor(Math.random() * 20) + 1;
    let question = `Solve for x: ${a}x + ${b} = ${c}`;
    let correctAnswer = ((c - b) / a).toFixed(2);
    return [question, correctAnswer];
}


function numberAndOperationsInBaseTenQuestion() {
    let a = Math.floor(Math.random() * 1000) + 100;
    let b = Math.floor(Math.random() * 1000) + 100;
    let question = `Add the numbers: ${a} + ${b}`;
    let correctAnswer = (a + b).toString();
    return [question, correctAnswer];
}


function numberAndOperationsFractionsQuestion() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let c = Math.floor(Math.random() * 10) + 1;
    let d = Math.floor(Math.random() * 10) + 1;
    let question = `What is ${a}/${b} + ${c}/${d} in simplest form?`;
    let numerator = a * d + b * c;
    let denominator = b * d;
    let gcd = (x, y) => y == 0 ? x : gcd(y, x % y);
    let commonDivisor = gcd(numerator, denominator);
    let correctAnswer = `${numerator / commonDivisor}/${denominator / commonDivisor}`;
    return [question, correctAnswer];
}

function measurementAndDataQuestion() {
    let a = Math.floor(Math.random() * 100) + 1;
    let b = Math.floor(Math.random() * 100) + 1;
    let question = `Convert ${a} centimeters to meters and add ${b} meters.`;
    let correctAnswer = ((a / 100) + b).toFixed(2);
    return [question, correctAnswer];
}


function geometryQuestion() {
    let a = Math.floor(Math.random() * 20) + 1;
    let b = Math.floor(Math.random() * 20) + 1;
    let question = `Calculate the area of a rectangle with length ${a} and width ${b}.`;
    let correctAnswer = (a * b).toString();
    return [question, correctAnswer];
}


function ratiosAndProportionalRelationshipsQuestion() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let c = Math.floor(Math.random() * 10) + 1;
    let question = `If ${a} apples cost ${b} dollars, how much would ${c} apples cost?`;
    let correctAnswer = ((b / a) * c).toFixed(2);
    return [question, correctAnswer];
}


function theNumberSystemQuestion() {
    let a = Math.floor(Math.random() * 100) - 50;
    let b = Math.floor(Math.random() * 100) - 50;
    let question = `What is ${a} + ${b}?`;
    let correctAnswer = (a + b).toString();
    return [question, correctAnswer];
}


function expressionsAndEquationsQuestion() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let c = Math.floor(Math.random() * 10) + 1;
    let question = `Solve for x: ${a}x + ${b} = ${c}`;
    let correctAnswer = ((c - b) / a).toFixed(2);
    return [question, correctAnswer];
}


function functionsQuestion() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let question = `If f(x) = ${a}x + ${b}, what is f(2)?`;
    let correctAnswer = (a * 2 + b).toString();
    return [question, correctAnswer];
}


function statisticsAndProbabilityQuestion() {
    let a = Math.floor(Math.random() * 6) + 1;
    let b = Math.floor(Math.random() * 6) + 1;
    let c = Math.floor(Math.random() * 6) + 1;
    let question = `What is the mean of the numbers ${a}, ${b}, and ${c}?`;
    let correctAnswer = ((a + b + c) / 3).toFixed(2);
    return [question, correctAnswer];
}


function grade7RatiosQuestion() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let c = Math.floor(Math.random() * 10) + 1;
    let question = `If ${a} oranges cost ${b} dollars, how much would ${c} oranges cost?`;
    let correctAnswer = ((b / a) * c).toFixed(2);
    return [question, correctAnswer];
}


function grade7NumberSystemQuestion() {
    let a = Math.floor(Math.random() * 100) - 50;
    let b = Math.floor(Math.random() * 100) - 50;
    let question = `What is ${a} + ${b}?`;
    let correctAnswer = (a + b).toString();
    return [question, correctAnswer];
}


function grade7ExpressionsEquationsQuestion() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let c = Math.floor(Math.random() * 10) + 1;
    let question = `Solve for x: ${a}x + ${b} = ${c}`;
    let correctAnswer = ((c - b) / a).toFixed(2);
    return [question, correctAnswer];
}


function grade7GeometryQuestion() {
    let a = Math.floor(Math.random() * 20) + 1;
    let b = Math.floor(Math.random() * 20) + 1;
    let question = `Calculate the area of a triangle with base ${a} and height ${b}.`;
    let correctAnswer = (0.5 * a * b).toString();
    return [question, correctAnswer];
}


function grade7StatisticsQuestion() {
    let a = Math.floor(Math.random() * 6) + 1;
    let b = Math.floor(Math.random() * 6) + 1;
    let c = Math.floor(Math.random() * 6) + 1;
    let question = `What is the median of the numbers ${a}, ${b}, and ${c}?`;
    let numbers = [a, b, c].sort((x, y) => x - y);
    let correctAnswer = numbers[1].toString();
    return [question, correctAnswer];
}


function grade8NumberSystemQuestion() {
    let a = Math.floor(Math.random() * 100) - 50;
    let b = Math.floor(Math.random() * 100) - 50;
    let question = `What is ${a} - (${b})?`;
    let correctAnswer = (a - b).toString();
    return [question, correctAnswer];
}


function grade8ExpressionsEquationsQuestion() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let c = Math.floor(Math.random() * 10) + 1;
    let question = `Solve for y: ${a}y - ${b} = ${c}`;
    let correctAnswer = ((c + b) / a).toFixed(2);
    return [question, correctAnswer];
}


function grade8FunctionsQuestion() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let question = `If f(x) = ${a}x + ${b}, what is f(3)?`;
    let correctAnswer = (a * 3 + b).toString();
    return [question, correctAnswer];
}


function grade8GeometryQuestion() {
    let a = Math.floor(Math.random() * 20) + 1;
    let b = Math.floor(Math.random() * 20) + 1;
    let question = `Calculate the circumference of a circle with radius ${a}. Use π = 3.14.`;
    let correctAnswer = (2 * 3.14 * a).toFixed(2);
    return [question, correctAnswer];
}


function grade8StatisticsQuestion() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let c = Math.floor(Math.random() * 10) + 1;
    let question = `What is the mode of the numbers ${a}, ${b}, ${c}, ${a}, and ${b}?`;
    let frequency = {};
    [a, b, c, a, b].forEach(num => frequency[num] = (frequency[num] || 0) + 1);
    let mode = Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b);
    let correctAnswer = mode;
    return [question, correctAnswer];
}

function subtractingFractionsQuestion() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let c = Math.floor(Math.random() * 10) + 1;
    let d = Math.floor(Math.random() * 10) + 1;
    
    if (b > d) {
        let temp = b;
        b = d;
        d = temp;
    }

    if (a > c) {
        let temp = a;
        a = c;
        c = temp;
    }

    if (b === d) {
        d = d + 1;
    }

    let correctAnswer = (a * d - b * c).toString();

    let question = `What is ${a}/${b} - ${c}/${d}?`;

    return [question, correctAnswer];
}


document.addEventListener('DOMContentLoaded', function() {
    let startBTN = document.getElementById('start-quiz');

    startBTN.addEventListener('click', function() {
        let topic = document.getElementById('topic').value;

        start(topic);
        showGame();
    })
});

function showMainMenu() {
    let mainMenu = document.getElementById('main-menu');
    mainMenu.style.display = 'flex';

    let gameContainer = document.getElementById('quiz-container');
    gameContainer.style.display = 'none';
}

function startTimer() {
    let timer = document.getElementById('timer');

    if (correctAnswerCount == 1) {
        timer.style.width = '1%';
    } else if (correctAnswerCount == 2) {
        timer.style.width = '7%';
    } else if (correctAnswerCount == 3) {
        timer.style.width = '8%';
    } else if (correctAnswerCount == 4) {
        timer.style.width = '10%';
    } else if (correctAnswerCount == 5) {
        timer.style.width = '13%';
    } else if (correctAnswerCount == 6) {
        timer.style.width = '19%';
    } else if (correctAnswerCount == 7) {
        timer.style.width = '21%';
    } else if (correctAnswerCount == 8) {
        timer.style.width = '29%';
    } else if (correctAnswerCount == 9) {
        timer.style.width = '34%';
    } else if (correctAnswerCount == 10) {
        timer.style.width = '100%';
    };
}

function start(topic) {
    switch (topic) {
        case 'addition':
            addition();
            break;
        case 'subtraction':
            subtraction();
            break;
        case 'multiplication':
            multiply();
            break;
        case 'adding-fractions':
            addingFractions();
            break;
        case 'adding-decimals':
            addingDecimals();
            break;
        case 'subtracting-fractions':
            subtractingFractions();
            break;
        case 'subtracting-decimals':
            subtractingDecimals();
            break;
        case 'multiplying-fractions':
            multiplyingFractions();
            break;
        case 'multiplying-decimals':
            multiplyingDecimals();
            break;
        case 'negitive-numbers':
            negitiveNumbers();
            break;
        case 'whole-numbers':
            wholeNumbers();
            break;
        case 'percentages':
            percentages();
            break;
        case 'order-of-operations':
            orderOfOperations();
            break;
    }
}

function showGame() {
    let gameContainer = document.getElementById('quiz-container');
    gameContainer.style.display = 'flex';
    let mainMenu = document.getElementById('main-menu');
    mainMenu.style.display = 'none';
}

function displayQuestion(question) {
    let questionContainer = document.getElementById('question');
    questionContainer.innerHTML = question;
}

function addition() {
    document.getElementById('answer').value = '';
    let tags = addQuesiton();
    let question = tags[0];
    let correctAnswer = tags[1];
    showGame();
    displayQuestion(question);

    document.getElementById('answer').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            checkAnswer(document.getElementById('answer').value, correctAnswer, addition);
        }
    });
}

function subtraction() {
    document.getElementById('answer').value = '';
    let tags = subtractQuesiton();
    let question = tags[0];
    let correctAnswer = tags[1];
    showGame();
    displayQuestion(question);

    document.getElementById('answer').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            checkAnswer(document.getElementById('answer').value, correctAnswer, subtraction);
        }
    });
}

function multiply() {
    document.getElementById('answer').value = '';
    let tags = multiplyQuesiton();
    let question = tags[0];
    let correctAnswer = tags[1];
    showGame();
    displayQuestion(question);

    document.getElementById('answer').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            checkAnswer(document.getElementById('answer').value, correctAnswer, multiply);
        }
    });
}

function addingFractions() {
    alert("Your answer shouldn't be simplified.");
    document.getElementById('answer').value = '';
    let tags = addingFractionsQuestion();
    let question = tags[0];
    let correctAnswer = tags[1];
    showGame();
    displayQuestion(question);

    document.getElementById('answer').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            checkAnswer(document.getElementById('answer').value, correctAnswer, addingFractions);
        }
    });
}

function addingDecimals() {
    document.getElementById('answer').value = '';
    let tags = addingDecimalsQuestion();
    let question = tags[0];
    let correctAnswer = tags[1];
    showGame();
    displayQuestion(question);

    document.getElementById('answer').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            checkAnswer(document.getElementById('answer').value, correctAnswer, addingDecimals);
        }
    });
}

function subtractingFractions() {
    alert("Your answer might not need to be simplified.");
    document.getElementById('answer').value = '';
    let tags = subtractingFractionsQuestion();
    let question = tags[0];
    let correctAnswer = tags[1];
    showGame();
    displayQuestion(question);

    document.getElementById('answer').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            checkAnswer(document.getElementById('answer').value, correctAnswer, subtractingFractions);
        }
    });
}

function subtractingDecimals() {
    document.getElementById('answer').value = '';
    let tags = subtractingDecimalsQuestion();
    let question = tags[0];
    let correctAnswer = tags[1];
    showGame();
    displayQuestion(question);

    document.getElementById('answer').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            checkAnswer(document.getElementById('answer').value, correctAnswer, subtractingDecimals);
        }
    });
}

function multiplyingDecimals() {
    document.getElementById('answer').value = '';
    let tags = multiplyingDecimalsQuestion();
    let question = tags[0];
    let correctAnswer = tags[1];
    showGame();
    displayQuestion(question);

    document.getElementById('answer').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            checkAnswer(document.getElementById('answer').value, correctAnswer, multiplyingDecimals);
        }
    });
}

function multiplyingFractions() {
    alert("Your answer might not need to be simplified.");
    document.getElementById('answer').value = '';
    let tags = multiplyingFractionsQuestion();
    let question = tags[0];
    let correctAnswer = tags[1];
    showGame();
    displayQuestion(question);

    document.getElementById('answer').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            checkAnswer(document.getElementById('answer').value, correctAnswer, multiplyingFractions);
        }
    });
}

function negitiveNumbers() {
    document.getElementById('answer').value = '';
    let tags = subtractingNegativeNumbersQuestion();
    let question = tags[0];
    let correctAnswer = tags[1];
    showGame();
    displayQuestion(question);
    console.log(correctAnswer);
    document.getElementById('answer').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            checkAnswer(document.getElementById('answer').value, correctAnswer, negitiveNumbers);
        }
    });
}

function wholeNumbers() {
    document.getElementById('answer').value = '';
    let tags = bigAdding();
    let question = tags[0];
    let correctAnswer = tags[1];
    showGame();
    displayQuestion(question);
    console.log(correctAnswer);
    document.getElementById('answer').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            checkAnswer(document.getElementById('answer').value, correctAnswer, wholeNumbers);
        }
    });
}

function percentages() {
    document.getElementById('answer').value = '';
    let tags = percentageQuestion();
    let question = tags[0];
    let correctAnswer = tags[1];
    showGame();
    displayQuestion(question);
    console.log(correctAnswer);
    document.getElementById('answer').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            checkAnswer(document.getElementById('answer').value, correctAnswer, percentages);
        }
    });
}

function orderOfOperations() {
    document.getElementById('answer').value = '';
    let tags = orderOfOperationsQuestion();
    let question = tags[0];
    let correctAnswer = tags[1];
    showGame();
    displayQuestion(question);
    console.log(correctAnswer);
    document.getElementById('answer').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            checkAnswer(document.getElementById('answer').value, correctAnswer, orderOfOperations);
        }
    });
}

function checkAnswer(userAnswer, correctAnswer, next) {
    let intgerAnswer = parseInt(userAnswer);
    if (intgerAnswer === correctAnswer) {
        correctAnswerCount++; // Increment the counter
        if (correctAnswerCount == 10) {
            alert("Congratulations! You have answered 10 questions correctly.");
            showMainMenu();
            correctAnswerCount = 0; // Reset the counter if needed
        } else {
            next(); // Load the next question
            startTimer();
        }
    } else {
        return false;
    }
}