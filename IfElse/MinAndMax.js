let array=new Array();
for(let i=0;i<5;i++){
   let randomCheck=Math.floor(Math.random()*900+100);
   console.log("Random number is: " +randomCheck);
   array.push(randomCheck); 
}
console.log("Maximum number is: "+Math.max(...array));
console.log("Minimum number is: "+Math.min(...array));