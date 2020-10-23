let inputSpeech = "javascript is awesome!"
let outputSpeech = ""

for (i = 0; i < inputSpeech.length; i++) {
  if (inputSpeech[i] === 'a') {
    outputSpeech += "4";
  } else if (inputSpeech[i] === 'e') {
    outputSpeech += "3";
  } else if (inputSpeech[i] === 'i') {
    outputSpeech += "1";
  } else if (inputSpeech[i] === 'o') {
    outputSpeech += "0"
  } else {
    outputSpeech += inputSpeech[i];
  }
}

console.log(outputSpeech);