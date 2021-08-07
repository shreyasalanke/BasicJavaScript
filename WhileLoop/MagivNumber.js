const prompt = require('prompt-sync')();
let number = prompt("Enter the Number between 1 to 100 : ");
let guessTaken = 0;
while (guessTaken < 10) {
    let guess = prompt("take a guess: ");
    if (guess < number)
        console.log("guess is low");

    if (guess > number)
        console.log("guess is high");

    if (guess == number) {
        console.log("sucess");
        break;
    }
    guessTaken = guessTaken + 1;
}
console.log("guess taken to get right number is: " + guessTaken);