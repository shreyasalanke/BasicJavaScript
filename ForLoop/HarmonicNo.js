const readline = require('readline-sync');
let number = readline.questionInt("Enter a number: ");
let harmonicNumber = 0;
for (let n = 1; n <= number; n++) {
	harmonicNumber += (1 / n);
}
console.log(harmonicNumber);