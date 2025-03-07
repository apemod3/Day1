//Initialise game variables
let targetNumber = Math.floor(Math.random() * 10) + 1;
let remainingGuesses = 3;

// DOM elements
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
const counter = document.getElementById('counter');

let score = 0;

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
        message.className = "correct"; 
        guessButton.disabled = true;

        score += 10; // Increase score by 10 points
        document.getElementById("score").textContent = score; // Update display

         // Animation code 🔥
        document.getElementById("score").classList.add("updated");
        setTimeout(() => {
            document.getElementById("score").classList.remove("updated");
        }, 300);

    } else if (remainingGuesses === 0) {
        message.textContent = `Game Over! The number was ${targetNumber}.`;
        message.className = "wrong"; 
        guessButton.disabled = true;
    } else {
        message.textContent = userGuess < targetNumber ? "⬆️ Too low!" : "⬇️ Too high!";
        message.className = "wrong"; 
        guessInput.value = ""; //clear input
    }
}

//Event listener
guessButton.addEventListener('click', checkGuess);