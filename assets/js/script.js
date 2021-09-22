var questionArray = [
  {
    qsTitle: "Who invented JavaScript?",
    choices: [
      "Douglas Crockford",
      "Sheryl Sandberg",
      "Brendan Eich",
      "Ben Javascript",
    ],
    answer: "Brendan Eich",
  },
  {
    qsTitle: "Inside which HTML element do we put the JavaScript?",
    choices: ["<js>", "<javascript>", "<scripting>", "<script>"],
    answer: "<script>",
  },
  {
    qsTitle: "What is a DOM in JavaScript?",
    choices: [
      "Data of Mine",
      "Document of Master",
      "Data Object Modal",
      "Document Object Model",
    ],
    answer: "Document Object Model",
  },
  {
    qsTitle: "Which type of pop up box will allow a user to type a response?",
    choices: ["input", "prompt", "alert", "confirm"],
    answer: "prompt",
  },
  {
    qsTitle:
      "What is the name of the statement that is used to exit or end a loop?",
    choices: [
      "falter statement",
      "conditional statement",
      "break statement",
      "close statement",
    ],
    answer: "break statement",
  },
  {
    qsTitle:
      "String values must be enclosed within _____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes",
  },
  {
    qsTitle: "The first index of an array is ____.",
    choices: ["0", "1", "8", "any"],
    answer: "0",
  },
  {
    qsTitle: "How do you add a comment in a JavaScript?",
    choices: [
      "//This is a comment",
      "<!--This is a comment-->",
      "'This is a comment",
      "* This is a comment *",
    ],
    answer: "//This is a comment",
  },
];

var infoEl = document.querySelector(".info-container");
var quizContainerEl = document.querySelector(".quiz-container");
var scoreContainerEl = document.querySelector(".score-container");
var questionTitle = document.querySelector(".questionTitle");
var timeEl = document.querySelector(".timeLeft");
var correctOrWrong = document.querySelector(".correct");
var finalScoreEl = document.querySelector("#finalScore");
var startBtn = document.querySelector(".startBtn");
var answerBtn = document.querySelectorAll(".btn");
var initialEl = document.querySelector("#initial");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var endBtnEl = document.querySelector("#endBtn");

var singleQuestion;
var singleQuestionIndex = 0;
var secondLeft = 50;
var score = 0;
var correctAnswer;
var clickAnswer;

// add event to the button to play game
startBtn.addEventListener("click", startGame);
// start game
function startGame() {
  console.log("game started");
  //info-container hide
  infoEl.classList.add("hide");
  quizContainerEl.classList.remove("hide");

  timeLeft();
  checkAnswer();
}

// function of display questions
function displayQuestion() {
  singleQuestion = questionArray[singleQuestionIndex];
  questionTitle.textContent = singleQuestion.qsTitle;
  answer1.textContent = singleQuestion.choices[0];
  answer2.textContent = singleQuestion.choices[1];
  answer3.textContent = singleQuestion.choices[2];
  answer4.textContent = singleQuestion.choices[3];
  //console.log(singleQuestion);
}

// add click event listener to each answerBtn and check answers
for (var i = 0; i < answerBtn.length; i++) {
  answerBtn[i].addEventListener("click", checkAnswer);
}

function checkAnswer() {
  displayQuestion();

  correctAnswer = singleQuestion.answer;
  clickAnswer = event.target.textContent;

  if (clickAnswer === correctAnswer) {
    score = secondLeft;
  } else {
    score = secondLeft - 10;
  }

  singleQuestionIndex++;
  //after last question, see score and sign initial
  if (singleQuestionIndex === questionArray.length) {
    quizContainerEl.classList.add("hide");
    scoreContainerEl.classList.remove("hide");
  }
  // console.log(clickAnswer);
  // console.log(correctAnswer);
  //console.log(score);
  finalScoreEl.textContent = score;
}

function timeLeft() {
  var timeInterval = setInterval(function () {
    secondLeft--;
    timeEl.textContent = secondLeft;

    if (secondLeft === 0) {
      clearInterval(timeInterval);
      //gameEnd();
      quizContainerEl.classList.add("hide");
      scoreContainerEl.classList.remove("hide");
    }
  }, 1000);
}

endBtnEl.addEventListener("click", gameEnd);
//end of game when final score section display
function gameEnd(event) {
  event.preventDefault();
  quizContainerEl.classList.add("hide");
  scoreContainerEl.classList.remove("hide");

  var initialInput = initialEl.value;
  var lastScore = score;

  localStorage.setItem("userInitial", initialInput);
  localStorage.setItem("lastScore", lastScore);

  window.location.replace("./highScore.html");
}
