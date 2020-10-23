//list of words

let words = [
    "computer",
    "keyboard",
    "mouse",
    "desktop",
    "game",
    "mousepad",
    "monitor"
];

//pick a random word

let word = words[Math.floor(Math.random() * words.length)];

//Array for Answers

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length;
let guessNumber = word.length * 2;

//The game loop

while (remainingLetters > 0 && guessNumber > 0) {
    //shows player their progress
    alert(answerArray.join(' '));

    //Get a guess from the player
    let letterGuess = prompt("Guess a letter, or click Cancel to stop playing.");
    let guess = letterGuess.toLowerCase();
    guessNumber--;
    console.log(guessNumber + " guesses remaining.");
    if (guess === null) {
        //exit game loop
        break;
    } else if (guess.length !== 1) {
        alert("Please enter only a single letter.");
    } else {
        //update the game state with a guess
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess && answerArray[j] === "_") {
                answerArray[j] = guess;
                remainingLetters--;
                console.log("Remaining letters = " + remainingLetters);
            }
        }
    }
}

//Show the answer and congratulate the player

alert(answerArray.join(" "));
alert("The answer was " + word + "!");