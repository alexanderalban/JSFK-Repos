//Random PG Insult Generator!

let randomBodyParts = ["nose", "arm", "head", "foot", "leg"];

let randomAdjectives = ["hairy", "smelly", "goofy", "fluffy", "silly"];

let randomAnimals = ["kangaroo", "rhino", "toucan", "llama", "goat"];

let randomAnimalBodyParts = ["pouch", "horn", "beak", "fur", "hoof"];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 5)];

let randomAdjective = randomAdjectives[Math.floor(Math.random() * 5)];

let randomAnimal = randomAnimals[Math.floor(Math.random() * 5)];

let randomAnimalBodyPart = randomAnimalBodyParts[Math.floor(Math.random() * 5)];



let randomInsult = "Your " + randomBodyPart + " is more " + randomAdjective + " than a " + randomAnimal + "'s " + randomAnimalBodyPart + ".";

console.log(randomInsult);

//Copy into console!

//Another way to declare the same log: 

let randomInsultTwo = ["Your", randomBodyPart, "is", "more", 
randomAdjective, "than", "a", randomAnimal + "'s", randomAnimalBodyPart + "."].join(" ");

console.log(randomInsultTwo);

//number array!

let numberArray = [3, 2, 1];
let numberSentence = numberArray[0] + " is bigger than " + numberArray[1] 
+ " is bigger than " + numberArray[2] + ".";

console.log(numberSentence);