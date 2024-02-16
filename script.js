'use strict';

const header = document.querySelector('header');
const btnPlay = document.querySelector('.btn--play')
const btnPlayAgain = document.querySelector('.btn--playagain');
const btnSubmitPlayer = document.querySelector('.btn--submitplayer');
const namePlayer1 = document.querySelector('.name--player1');
const namePlayer2 = document.querySelector('.name--player2');
const displayPlayer1 = document.querySelector('.display--player1');
const displayPlayer2 = document.querySelector('.display--player2');
const imagePlayer1 = document.querySelector('.image--player1');
const imagePlayer2 = document.querySelector('.image--player2');
const timerDisplay = document.querySelector('.timer');
const welcomeModal = document.querySelector('.welcomeModal');
const welcomeModalText = document.querySelector('.text--welcomemodal');
const timerModal = document.querySelector('.timer--modal');
const resultModal = document.querySelector('.resultModal');
const resultModalText = document.querySelector('.text--resultmodal');

let time, rock, paper, scissors, random1, random2;

const init = function () {
    time = 4;
    rock = 'rock.png';
    paper = 'paper.png';
    scissors = 'scissors.png';
    random1 = Math.trunc(Math.random() * 3) + 1;
    random2 = Math.trunc(Math.random() * 3) + 1;

    imagePlayer1.classList.add('hidden');
    imagePlayer2.classList.add('hidden');
    resultModal.classList.add('hidden');

}

init();

btnSubmitPlayer.addEventListener('click', function () {
    // const correctPlayerName = function (player) {
    //     const lower = player.slice(1).toLowerCase();
    //     const upper = player.slice(0, 1).toUpperCase();
    //     const name = upper.concat(lower);
    //     return name;
    // }
    displayPlayer1.textContent = namePlayer1.value;
    displayPlayer2.textContent = namePlayer2.value;
    welcomeModal.classList.add('hidden');
    displayPlayer1.classList.remove('hidden');
    displayPlayer2.classList.remove('hidden');
    header.classList.remove('hidden');
    resultModal.classList.add('hidden');
})


const play = function () {
    resultModal.classList.remove('hidden');
    btnPlayAgain.classList.add('hidden');

    time--;
    if (time > 0) {
        setTimeout(play, 1000);
        resultModalText.textContent = time;
    } else if (time === 0) {
        result();
        btnPlayAgain.classList.remove('hidden');
    }
}

const randomGenerator = function () {

    if (random1 === 1) imagePlayer1.src = rock;
    if (random2 === 1) imagePlayer2.src = rock;
    if (random1 === 2) imagePlayer1.src = paper;
    if (random2 === 2) imagePlayer2.src = paper;
    if (random1 === 3) imagePlayer1.src = scissors;
    if (random2 === 3) imagePlayer2.src = scissors;

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
        imagePlayer1.classList.add('hidden');
        imagePlayer2.classList.add('hidden');
        resultModalText.textContent = `Both players lost 😿`
    } else if (random1 === 1 && random2 === 3 || random1 === 2 && random2 === 1 || random1 === 3 && random2 === 2) {
        imagePlayer1.classList.add('hidden');
        imagePlayer2.classList.add('hidden');
        resultModalText.textContent = `${namePlayer1.value} wins! 😸`
    } else if (random1 === 1 && random2 === 2 || random1 === 2 && random2 === 3 || random1 === 3 && random2 === 1) {
        imagePlayer1.classList.add('hidden');
        imagePlayer2.classList.add('hidden');
        resultModalText.textContent = `${namePlayer2.value} wins! 😸`
    }

    imagePlayer1.classList.remove('hidden');
    imagePlayer2.classList.remove('hidden');
}

btnPlay.addEventListener('click', play);

btnPlayAgain.addEventListener('click', function () {
    init();
    play();
})





