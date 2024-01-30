// Define your quiz questions and options
let questions = [
  {
      question: "What is the capital of India?",
      options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
      answer: "Delhi"
  },
  {
      question: "Who is the author of Harry Potter?",
      options: ["J.R.R. Tolkien", "George R.R. Martin", "J.K. Rowling", "Stephen King"],
      answer: "J.K. Rowling"
  }
];

let questionNumber = document.getElementById("question-number");
let questionText = document.querySelector(".question");
let optionContainer = document.querySelectorAll(".option");
let buttonBack = document.getElementById("button-back");
let buttonNext = document.getElementById("button-next");
let messageElement = document.getElementById("message");


let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  // Get the current question object from the questions array
  let question = questions[currentQuestion];

  // Update the question number and question text
  questionNumber.innerText = "Question " + (currentQuestion + 1) + " of " + questions.length;
  questionText.innerText = question.question;

  // Update the options
  for (let i = 0; i < optionContainer.length; i++) {
      // Get the option text from the options array
      let option = question.options[i];

      // Assign the option text to the option container
      optionContainer[i].innerText = option;

      // Remove the 'selected' class from all options
      optionContainer[i].classList.remove('selected');

      // Assign the correct answer to the option container
      optionContainer[i].setAttribute("data-answer", question.answer);

      // Attach event listener to handle option selection
      optionContainer[i].addEventListener("click", selectOption);
  }
}

function selectOption() {
  // Deselect all options
  optionContainer.forEach(option => {
      option.classList.remove('selected');
  });

  // Select the clicked option
  this.classList.add('selected');
}

window.onload = function () {
  // Load the first question and options
 // Load the first question and options

};

function checkAnswer() {
  // Get the user's selected option
  let selectedOption = document.querySelector('.option.selected');

  // Get the correct answer from the current question object
  let correctAnswer = optionContainer[currentQuestion].getAttribute("data-answer");

  // Check if there is a selected option
  if (selectedOption) {
      // Get the text of the selected option
      let userAnswer = selectedOption.innerText;

      // Compare the user's answer with the correct answer
      if (userAnswer === correctAnswer) {
          // Increment the score if the answer is correct
          score++;
      }
  }
}

function nextQuestion() {
  // Check if there are more questions left
  if (currentQuestion < questions.length - 1) {
      // There are more questions left
      // Increase the current question index by 1
      currentQuestion++;

      // Load the next question and options
      loadQuestion();
  } else {
      // There are no more questions left
      // Display the final score and end the quiz
      alert("You have completed the quiz. Your score is " + score + " out of " + questions.length + ".");
  }
}

function previousQuestion() {
  // Check if the current question index is greater than 0
  if (currentQuestion > 0) {
      // The current question index is greater than 0
      // Decrease the current question index by 1
      currentQuestion--;

      // Load the previous question and options
      loadQuestion();
  } else {
      // The current question index is 0
      // Do nothing
  }
}
// Your existing JavaScript code here

function displayFinalScore() {
  // Hide question and options
  document.querySelector('.question').style.display = 'none';
  document.querySelector('.options').style.display = 'none';
  // Hide buttons
  document.querySelector('.button-container').style.display = 'none';
  // Show final score
  document.getElementById('final-score').style.display = 'block';
  // Display score
  document.getElementById('scoree').innerText = score + " out of " + questions.length;
}

window.onload = function () {
  loadQuestion();

  // Assign the nextQuestion function to the next button
  buttonNext.addEventListener("click", function () {
      // Check the answer before moving to the next question
      checkAnswer();
  
      // Move to the next question
      nextQuestion();
  
      // Display final score when the quiz is completed
      if (currentQuestion === questions.length ) {
          displayFinalScore();
      }
  });
  
  // Assign the previousQuestion function to the back button
  buttonBack.addEventListener("click", previousQuestion);
  
  };

  // Assign the previousQuestion function to the back button
  buttonBack.addEventListener("click", previousQuestion);

  // Display final score when the quiz is completed
 


