let counter = 5;

let printMessage = () => {
  console.log("You have been staring at the screen for " + counter + " seconds.");
  counter += 5;
};

let intervalID = setInterval(printMessage, 5000);