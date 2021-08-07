const readline = require('readline-sync');
let startNumber = readline.questionInt("Enter start number: ");
let endNumber = readline.questionInt("Enter end number: ");
for (let i = startNumber; i <= endNumber; i++) {
	let prime = true;
	for (let j = 2; j <= Math.sqrt(i); j++) {
		if (i % j == 0) {
			prime = false;
			break;
		}
	}
	if (prime && i != 1) {
		console.log(i);
	}
}