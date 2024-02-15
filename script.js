'use strict';

// Selects all elements
const btnPlay = document.querySelector('.btn--play')
const btnPlayAgain = document.querySelector('.btn--playagain');
const player1Name = document.querySelector('.player1--name');
const player2Name = document.querySelector('.player2--name');
const player1 = document.querySelector('.player1--image');
const player2 = document.querySelector('.player2--image');
const timerDisplay = document.querySelector('.timer');
const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modal--text');

// player1Name.textContent = prompt("Enter the first player's name name:");
// player2Name.textContent = prompt("Enter the second player's name name:");

let time, rock, paper, scissors, random1, random2;

const init = function () {
    time = 4;
    rock = 'rock.png';
    paper = 'paper.png';
    scissors = 'scissors.png';
    random1 = Math.trunc(Math.random() * 3) + 1;
    random2 = Math.trunc(Math.random() * 3) + 1;

    player1.classList.add('hidden');
    player2.classList.add('hidden');
    modal.classList.add('hidden');
}

init();

const play = function () {
    modal.classList.remove('hidden');
    btnPlayAgain.classList.add('hidden');

    time--;
    if (time > 0) {
        setTimeout(play, 1000);
        modalText.textContent = time;
    } else if (time === 0) {
        result();
        btnPlayAgain.classList.remove('hidden');
    }
}

const randomGenerator = function () {

    if (random1 === 1) player1.src = rock;
    if (random2 === 1) player2.src = rock;
    if (random1 === 2) player1.src = paper;
    if (random2 === 2) player2.src = paper;
    if (random1 === 3) player1.src = scissors;
    if (random2 === 3) player2.src = scissors;

}

const result = function () {
    randomGenerator();

    // Paper wraps rock
    // Rock breaks scissors
    // Scissors cuts paper

    // P1        P2         winner
    // rock      paper      P2
    // paper     scissors   P2
    // scissors  rock       P2
    // rock      scissors   P1
    // paper     rock       P1
    // scissors  paper      P1

    if (random1 === random2) {
        player1.classList.add('hidden');
        player2.classList.add('hidden');
        modalText.textContent = `Both players lost 😿`
    } else if (random1 === 1 && random2 === 3 || random1 === 2 && random2 === 1 || random1 === 3 && random2 === 2) {
        player1.classList.add('hidden');
        player2.classList.add('hidden');
        modalText.textContent = `Player 1 wins! 😸`
    } else if (random1 === 1 && random2 === 2 || random1 === 2 && random2 === 3 || random1 === 3 && random2 === 1) {
        player1.classList.add('hidden');
        player2.classList.add('hidden');
        modalText.textContent = `Player 2 wins! 😸`
    }

    player1.classList.remove('hidden');
    player2.classList.remove('hidden');
}

btnPlay.addEventListener('click', play);

btnPlayAgain.addEventListener('click', function () {
    init();
})





