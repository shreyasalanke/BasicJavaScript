const readline = require('readline-sync');
let number = readline.questionInt("Enter a number: ");
let fact = 1;
for (let i = 1; i <= number; i++) {
	fact *= i;
}
console.log("Factorial of " + number + " is: " + fact);