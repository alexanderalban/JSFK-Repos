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