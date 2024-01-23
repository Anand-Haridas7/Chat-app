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
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.innerText = option;
        optionButton.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(optionButton);
    });
}

function checkAnswer(userAnswer) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (userAnswer === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.innerHTML = `<h1>Your final score is: ${score}/${quizData.length}</h1>`;
}

nextButton.addEventListener('click', loadQuestion);

// Initial question load
loadQuestion();

