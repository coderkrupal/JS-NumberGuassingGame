const randomNumber = Math.round(Math.random() * 100 + 1);
const userInput = document.querySelector('#gauassuser');
const submitButton = document.querySelector('#submit');
const results = document.querySelector('.toLoworHigh');
const previousGuessesElement = document.querySelector('.previous');
const attemptsElement = document.querySelector('.totalattemtremain');

let previous = [];
let totalAttempts = 1;
let playGame = true;

if (playGame) {
   submitButton.addEventListener('click', function (e) {
      e.preventDefault();
      const guess = parseInt(userInput.value);
      if (!validateUser(guess)) return;
      previous.push(guess);
      updatePreviousGuesses();
      checkGuess(guess);
      updateAttempts();
   });
}

function validateUser(guess) {
   if (isNaN(guess)) {
      alert('Please enter a valid number');
      return false;
   }
   if (guess < 1 || guess > 100) {
      alert('Enter a number between 1 and 100');
      return false;
   }
   return true;
}

function updatePreviousGuesses() {
   previousGuessesElement.innerHTML = `Previous guesses: <span>${previous.join(', ')}</span>`;
}

function updateAttempts() {
   if (totalAttempts < 10) {
      attemptsElement.innerHTML = `Only left: <span>${10 - totalAttempts}</span>`;
      totalAttempts++;
   } else {
      playGame = false;
      attemptsElement.innerHTML = `No attempts left. Game over!`;
      results.innerHTML = `<span>The correct number was ${randomNumber}. Try again!</span>`;
      disableGame();
   }
}

function checkGuess(guess) {
   if (guess === randomNumber) {
      results.innerHTML = `<span>Congratulations! You guessed the right number!</span>`;
      playGame = false;
      disableGame();
   } else if (guess > randomNumber) {
      results.innerHTML = `<span>Oops! Your guess is too high</span>`;
   } else {
      results.innerHTML = `<span>Oops! Your guess is too low</span>`;
   }
}

function disableGame() {
   userInput.disabled = true;
   submitButton.disabled = true;
   // Optionally, provide a restart button
}
