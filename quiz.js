const quizData = [
    {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Paris', 'Madrid'],
        correctAnswer: 'Paris'
    },
    {
        question: 'What is 2 + 2?',
        options: ['3', '4', '5'],
        correctAnswer: '4'
    }, 
    {
        question: 'What is the capital of Japan?',
        options: ['Tokyo', 'Seoul', 'Beijing'],
        correctAnswer: 'Tokyo'
    },
    {
        question: 'What is the chemical symbol for gold?',
        options: ['Au', 'Ag', 'Fe'],
        correctAnswer: 'Au'
    },
    {
        question: 'What is the square root of 81?',
        options: ['9', '8', '7'],
        correctAnswer: '9'
    },
    {
        question: 'In which year did Christopher Columbus reach the Americas?',
        options: ['1492', '1607', '1776'],
        correctAnswer: '1492'
    },
    {
        question: 'Who wrote "To Kill a Mockingbird"?',
        options: ['J.K. Rowling', 'Harper Lee', 'George Orwell'],
        correctAnswer: 'Harper Lee'
    },
    {
        question: 'Which film won the Academy Award for Best Picture in 2020?',
        options: ['Parasite', '1917', 'Nomadland'],
        correctAnswer: 'Parasite'
    },
    {
        question: 'What does the acronym "HTML" stand for?',
        options: ['HyperText Markup Language', 'High Tech Modern Language', 'Hyperlink and Text Management Language'],
        correctAnswer: 'HyperText Markup Language'
    },
    {
        question: 'Who is known as the "King of Pop"?',
        options: ['Elvis Presley', 'Michael Jackson', 'Madonna'],
        correctAnswer: 'Michael Jackson'
    },
    {
        question: 'In which sport would you perform a slam dunk?',
        options: ['Tennis', 'Basketball', 'Golf'],
        correctAnswer: 'Basketball'
    },
    {
        question: 'What is the largest planet in our solar system?',
        options: ['Venus', 'Jupiter', 'Saturn'],
        correctAnswer: 'Jupiter'
    }
    // Add more questions as needed
];

    // Add more questions as needed


const quizContainer = document.getElementById('quiz-container');
const questionNumberElement = document.getElementById('question-number');
const questionField = document.getElementById('question-field');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('optionsselectedI);
const backButton = document.getElementById('back-btn');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    
    questionNumberElement.innerText = `QUESTION ${currentQuestionIndex + 1}`;
    questionElement.innerText = currentQuestion.question;

    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.className = 'option-btn';
        optionButton.innerText = option;
        optionButton.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(optionButton);
    });

    // Hide back button on the first question
    backButton.style.display = currentQuestionIndex === 0 ? 'none' : 'inline-block';
}


function checkAnswer(selectedIndex) {
    // Implement answer checking logic if needed

    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}



function showResult() {
    quizContainer.innerHTML = `<div id="result-container"><h1>Your final score is: ${currentQuestionIndex}/${quizData.length}</h1></div>`;
}

function loadPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function loadNextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResult();
    }
}

// Initial question load
loadQuestion();


