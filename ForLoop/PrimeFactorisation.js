var readlineSync = require("readline-sync");
var n = readlineSync.question("Enter number:");
function primeFactors(n){
    var factors = [], 
        divisor = 2;  
    while(n>2){
      if(n % divisor == 0){
         factors.push(divisor); 
         n= n/ divisor;
      }
      else{
        divisor++;
      }     
    }
    return factors;
  }
  console.log(primeFactors(n));