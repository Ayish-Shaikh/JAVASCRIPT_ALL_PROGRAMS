//practice q2
let gameNum = 25;

let userNum = prompt ("Guess the game number :");

while (userNum !== gameNum){//game
    userNum = prompt ("You guessed the number wrong. Guess Again. :");
}
console.log("Congratulations, you entered the right number ")