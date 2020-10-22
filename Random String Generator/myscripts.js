const alphabetLetter = "abcdefghijklmnopqrstuvwxyz"

let randomLetter = alphabetLetter[Math.floor(Math.random() * alphabetLetter.length)];

console.log(randomLetter);

// for (let i = 0; i = alphabetLetter.length; i++) {
//     console.log(alphabetLetter[Math.floor(Math.random() * alphabetLetter.length[i])])
// }

// let i = 0;
// while (i < 6) {
//   console.log(alphabetLetter[Math.floor(Math.random() * i)]);
//   i++;
// }


let i = 0;
let randomString = ""
while (i < 6) {
  randomString += alphabetLetter[Math.floor(Math.random() * alphabetLetter.length)];
  i++;
}

console.log(randomString);