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
    },
    {
      question: "What is the largest animal in the world?",
      options: ["Elephant", "Whale", "Giraffe", "Dinosaur"],
      answer: "Whale"
    }
  ];
  let questionNumber = document.getElementById("question-number");
  let questionText = document.querySelector(".question");
  let optionContainer = document.querySelectorAll(".option");
  let buttonBack = document.getElementById("button-back");
  let buttonNext = document.getElementById("button-next");


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
  
      // Assign the checkAnswer function to the option container
      optionContainer[i].addEventListener("click", checkAnswer);
  
      // Assign the correct answer to the option container
      optionContainer[i].setAttribute("data-answer", question.answer);
    }
  }
  


  window.onload = function() {
    // Load the first question and options
    loadQuestion();
  
    // Assign the nextQuestion function to the next button
    buttonNext.addEventListener("click", nextQuestion);
  
    // Assign the previousQuestion function to the back button
    buttonBack.addEventListener("click", previousQuestion);
  };
  


  function checkAnswer() {
    // Get the user's input from the clicked option container
    let userAnswer = this.innerText;

  // Get the correct answer from the data attribute
  let correctAnswer = this.dataset.answer;

  // Compare the user's input with the correct answer
  if (userAnswer === correctAnswer) {
    // The user's answer is correct
    // Increase the score by 1
    score++;
    // Display a positive feedback message
    
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
  
