//number_guesser

//generate a random 1-10 number
const targetNumber = Math.floor(Math.random()*10) + 1;
let guessCount =  0;

//create a loop for guesses
while (guessCount < 3) {
    //Get user input
    const userGuess = parseInt(prompt("Guess a number between 1-10: "));


    //compare guess to target number
    if (userGuess === targetNumber) {
        alert("🎉 Correct!! Good Guess!");
        break; //exits loop
    } else if (userGuess < targetNumber) {
        alert("Too low, try again!")
    } else {
        alert("Too high, try again!");
    }

    guessCount++;
}

//if all guesses are used up
if (guessCount === 3) {
    alert(`Game Over! The number was ${targetNumber}.`)
}