const prompt = require('prompt-sync')();
let number = Number(prompt('Enter the number: '));
let primeFactorsArr = [];
while (number % 2 === 0) {
  primeFactorsArr.push(2);
  number = number / 2;
}
for (let i = 3; i * i <= number; i = i + 2) {
  while (number % i === 0) {
    primeFactorsArr.push(i);
    number = number / i;
  }
}
if (number > 2)
  primeFactorsArr.push(number);
console.log("Prime factors:")
console.log(primeFactorsArr);