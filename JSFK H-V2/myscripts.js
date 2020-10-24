let pickWord = () => {
  let arr1 = ["elephant", "crow", "parrot", "dolphin", "wolf", "octopus"];

  let randomPick = (array) => {
    return array[Math.floor(Math.random() * array.length)]
  }
  return randomPick(arr1);
};

let setupAnswerArray = (word) => {
  let answerArray = [];
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = '_';
  }
  return answerArray;
};

let showPlayerProgress = (answerArray) => {
alert(answerArray.join(' '));
};

let getGuess = () => {
 return prompt("Guess a letter, or click cancel to stop playing.");
};

let updateGameState = (guess, word, answerArray) => {
  let appearances = 0;
  for (let j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      answerArray[j] = guess;
      appearances++;
    }
  }
  return appearances;
};

let showAnswerAndCongratulatePlayer = function (answerArray) {
  showPlayerProgress(answerArray);
  alert("Good job! The answer was " + answerArray.join(""));
};

let word = pickWord();
let answerArray = setupAnswerArray(word);
let remainingLetters = word.length;

while (remainingLetters > 0) {
showPlayerProgress(answerArray);
let guess = getGuess();
if (guess === null) {
  break;
} else if (guess.length !== 1) {
  alert("Please enter a single letter");
} else {
  let correctGuesses = updateGameState(guess, word, answerArray);
  remainingLetters -= correctGuesses;
}
}

showAnswerAndCongratulatePlayer(answerArray);