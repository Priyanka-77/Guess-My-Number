'use strict';
/*
console.log(document.querySelector('.message').textContent);
// manipulate content in <p></p>
document.querySelector('.message').textContent = 'Correct Number!!';
document.querySelector('.number').textContent = 'N?';
document.querySelector('.score').textContent = 0;

//Manipulate value in input box
document.querySelector('.guess').value = 21;
console.log(document.querySelector('.guess').value);
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, 'guess');

  if (!guess) {
    displayMessage('No Number!!');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.highscore').textContent = score;
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? 'Too high!!' : 'Too Low!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage("You've lost the game");
    }
  }
  //    else if (guess > secretNumber) {
  //     if (score > 0) {
  //       document.querySelector('.message').textContent = 'Too high!!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = "You've lost the game";
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 0) {
  //       document.querySelector('.message').textContent = 'Too low!!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = "You've lost the game";
  //     }
  //   }
});

//Again Button
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start the guessing....');
  document.querySelector('.score').textContent = 0;
  document.querySelector('.guess').value = '';
  document.querySelector('.highscore').textContent = 0;
});
