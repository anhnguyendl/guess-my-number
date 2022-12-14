'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let hightScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  var guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️⛔️⛔️ No number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉🎉🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > hightScore) {
      hightScore = score;
      document.querySelector('.highscore').textContent = hightScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '☹️ You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉  Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '☹️ You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('.number').textContent = secretNumber;
    }
  }
});

document.querySelector('.guess').addEventListener('keydown', function (e) {
  if (e.key == 'Enter') {
    var guess = Number(document.querySelector('.guess').value);
    if (!guess) {
      document.querySelector('.message').textContent = '⛔️⛔️⛔️ No number';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉🎉🎉 Correct Number!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';

      if (score > hightScore) {
        hightScore = score;
        document.querySelector('.highscore').textContent = hightScore;
      }
    } else if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = '📈 Too High!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '☹️ You lost the game!';
        document.querySelector('.score').textContent = 0;
      }
    } else if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = '📉  Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = '☹️ You lost the game!';
        document.querySelector('.score').textContent = 0;
        document.querySelector('.number').textContent = secretNumber;
      }
    }
  }
});

var again = document.querySelector('.again');

again.addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
