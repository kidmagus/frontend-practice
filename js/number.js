const answerVal = document.querySelector(".answer");
let guess = document.querySelector(".guess");
const submit = document.querySelector(".submit");
const statement = document.querySelector(".statement");
const takes = document.querySelector(".takes");
let score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const reset = document.querySelector(".reset");

const min = 1;
const max = 20;
let attempt = 0;
let scoreVal = 20;

let answer = Math.floor(Math.random() * (max - min + 1) + min);

submit.addEventListener("click", () => {
  const guessVal = Number(guess.value);

  if (isNaN(guessVal) || guessVal < min || guessVal > max) {
    scoreVal--;
    score.textContent = scoreVal;
    statement.textContent = `Enter a valid number between ${min} and ${max}`;
  } else {
    attempt++;
    if (guessVal < answer) {
      scoreVal--;
      score.textContent = scoreVal;
      statement.textContent = "Too low";
      window.alert("Too Low");
    } else if (guessVal > answer) {
      scoreVal--;
      score.textContent = scoreVal;
      statement.textContent = "Too high";
      window.alert("Too High");
    } else if (guessVal === answer) {
      answerVal.textContent = "Galing mo love, Iloveyou!!";
      statement.textContent = "Got it right";
      takes.textContent = `It took you ${attempt} times`;
    }
  }

  console.log(guessVal);
});

reset.addEventListener("click", () => {
  guess.value = " ";
  score.textContent = 20;
  statement.textContent = "Guess a Number";
  takes.textContent = "";
  answerVal.textContent = "";

  answer = Math.floor(Math.random() * (max - min + 1) + min);
});
