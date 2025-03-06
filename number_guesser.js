//Initialise game variables
let targetNumber = Math.floor(Math.random() * 10) + 1;
let remainingGuesses = 3;

// DOM elements
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
const counter = document.getElementById('counter');

//game logic
function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    //validation
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        message.textContent = "⚠️ Enter a number between 1-10!";
        return;
    }

    remainingGuesses--;
    counter.textContent = remainingGuesses;

    if (userGuess === targetNumber) {
        message.textContent = "🎉 Correct! You won!";
        guessButton.disabled = true;
    } else if (remainingGuesses === 0) {
        message.textContent = `Game Over! The number was ${targetNumber}.`;
        guessButton.disabled = true;
    } else {
        message.textContent = userGuess < targetNumber ? "⬆️ Too low!" : "⬇️ Too high!";
        guessInput.value = ""; //clear input
    }
}

//Event listener
guessButton.addEventListener('click', checkGuess);