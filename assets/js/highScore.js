var goBackEl = document.querySelector("#goBack");
var clearEl = document.querySelector("#clearScore");
var ulEl = document.querySelector("ul");

//console.log("hello");
var newUser = localStorage.getItem("userInitial");
var newScore = localStorage.getItem("lastScore");
console.log(newUser);
console.log(newScore);

//create new list item to show user and score stored in localStorage
var liEl = document.createElement("li");
liEl.textContent = newUser + " - " + newScore;

ulEl.appendChild(liEl);

//click goBack button and return game page
goBackEl.addEventListener("click", function () {
  window.location.replace("./index.html");
});

//clear high score
clearEl.addEventListener("click", function () {
  liEl.remove();
});
