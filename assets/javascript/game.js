var wins = 0;
var loss = 0;
guessesLeft = 5;

var elFirstLetter = document.getElementById("firstletter");
var elSecondLetter = document.getElementById("secondletter");
var elThirdLetter = document.getElementById("thirdletter");
var elFourthLetter = document.getElementById("fourthletter");
var elFifthLetter = document.getElementById("fifthletter");
var elRecordLosses = document.getElementById("recordLosses");
var elGuessesLeft = document.getElementById("recordGuesses");
var elRecordWins = document.getElementById("recordWins")


document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    console.log("You guessed " + userGuess);

    if (userGuess === "s") {
        elFirstLetter.textContent = "S";
        console.log("You got one of the letters correct");
    } else if (userGuess === "i") {
        elSecondLetter.textContent = "I";
        console.log("You got one of the letters correct");
    } else if (userGuess === "m") {
        elThirdLetter.textContent = "M";
        console.log("You got one of the letters correct");
    } else if (userGuess === "b") {
        elFourthLetter.textContent = "B";
        console.log("You got one of the letters correct");
    } else if (userGuess === "a") {
        elFifthLetter.textContent = "A";
        console.log("You got one of the letters correct");
    } else {
        console.log("Try again");
        guessesLeft--;
        elGuessesLeft.textContent = guessesLeft;

    }

    if (guessesLeft === 0 ) {
        loss++;
        elRecordLosses.textContent = loss;

    }

}