"use strict";

// Selects all the elements
const header = document.querySelector("header");
const section = document.querySelector("section");
const btnPlay = document.querySelector(".btn--play");
const btnSubmitPlayer = document.querySelector(".btn--submitplayer");
const namePlayer1 = document.querySelector(".name--player1");
const namePlayer2 = document.querySelector(".name--player2");
const displayPlayer1 = document.querySelector(".display--player1");
const displayPlayer2 = document.querySelector(".display--player2");
const imagePlayer1 = document.querySelector(".image--player1");
const imagePlayer2 = document.querySelector(".image--player2");
const welcomeModal = document.querySelector(".welcome--modal");
const welcomeModalText = document.querySelector(".text--welcomemodal");
const timerModal = document.querySelector(".timer--modal");
const timerModalText = document.querySelector(".text--timermodal");
const resultModal = document.querySelector(".result--modal");
const resultModalText = document.querySelector(".text--resultmodal");

// Defines all the variables
let time, rock, paper, scissors, random1, random2;

const init = function () {
  // Assigns values to all the variables
  time = 4;
  rock = "rock.png";
  paper = "paper.png";
  scissors = "scissors.png";
  random1 = Math.trunc(Math.random() * 3) + 1;
  random2 = Math.trunc(Math.random() * 3) + 1;

  // Defines how the page should look like before a game is played
  resultModal.classList.add("hidden");
  timerModal.classList.add("hidden");
};

init();

// Makes sure that the name inputed by the user is correctly formatted
const correctPlayerName = function (player) {
  const lower = player.slice(1).toLowerCase();
  const upper = player.slice(0, 1).toUpperCase();
  const name = upper.concat(lower);
  return name;
};

btnSubmitPlayer.addEventListener("click", function () {
  // Displays the correct player names
  displayPlayer1.textContent = correctPlayerName(namePlayer1.value);
  displayPlayer2.textContent = correctPlayerName(namePlayer2.value);

  // Defines how the page should look like after submitting the names
  welcomeModal.classList.add("hidden");
  section.style.opacity = 100;
});

const play = function () {
  timerModal.classList.remove("hidden");

  time--;
  // If time > 0, displays the timer and starts the countdown
  if (time > 0) {
    setTimeout(play, 1000);
    timerModalText.textContent = time;
    // If time = 0, displays the result
  } else if (time === 0) {
    result();
    resultModal.classList.remove("hidden");
    btnPlay.textContent = "Play Again";
  }
};

// Defines the player image depending on the random number
const randomGenerator = function () {
  if (random1 === 1) imagePlayer1.src = rock;
  if (random2 === 1) imagePlayer2.src = rock;
  if (random1 === 2) imagePlayer1.src = paper;
  if (random2 === 2) imagePlayer2.src = paper;
  if (random1 === 3) imagePlayer1.src = scissors;
  if (random2 === 3) imagePlayer2.src = scissors;
};

// Defines the winner depending on the random number and game rules
const result = function () {
  randomGenerator();

  if (random1 === random2) {
    resultModalText.textContent = `Both players lost 😿`;
  } else if (
    (random1 === 1 && random2 === 3) ||
    (random1 === 2 && random2 === 1) ||
    (random1 === 3 && random2 === 2)
  ) {
    resultModalText.textContent = `${namePlayer1.value} wins! 😸`;
  } else if (
    (random1 === 1 && random2 === 2) ||
    (random1 === 2 && random2 === 3) ||
    (random1 === 3 && random2 === 1)
  ) {
    resultModalText.textContent = `${namePlayer2.value} wins! 😸`;
  }
};

// Starts the game when the play/play again button is pressed
btnPlay.addEventListener("click", function () {
  init();
  play();
});
