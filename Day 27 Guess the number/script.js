let Ans = document.querySelector(".CorrectAns");
let input = document.querySelector("input");
let btn = document.querySelector("button");
let guess = document.getElementById("guess");
let lastResult = document.getElementById("lastResult");
let highLow = document.getElementById("highOrLow");
let reset = document.getElementById("reset");
let form = document.querySelector("form");
let score = document.getElementById("score");
let body = document.querySelector("body");

let guessCount = 0;
let randomNumber = Math.floor(Math.random() * 21) + 1;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (randomNumber == input.value) {
    lastResult.textContent = "Congratulation! You got it right!";
    lastResult.style.backgroundColor = "green";
    Ans.innerHTML = randomNumber;
    highLow.textContent = "";
    guess.textContent = "";
    body.style.backgroundColor = "green";
    score.textContent = guessCount + 1;
  } else if (guessCount == 20) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lastResult.style.backgroundColor = "red";
    highLow.textContent = "";
    guess.textContent = "";
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (input.value < randomNumber) {
      highLow.textContent = " too low!";
    } else if (input.value > randomNumber) {
      highLow.textContent = " too high!";
    }
  }
  guessCount++;
  input.value = "";
  input.focus();

  guess.innerText = guessCount;
});

reset.addEventListener("click", () => {
  guessCount = 0;
  lastResult.textContent = "";
  highLow.textContent = "";
  guess.textContent = "";
  input.value = "";
  Ans.innerHTML = "?";
  body.style.backgroundColor = "grey";
  score.textContent = guessCount;
  randomNumber = Math.floor(Math.random() * 21) + 1;
});
