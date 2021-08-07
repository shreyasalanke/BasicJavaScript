const readline=require('readline-sync');
let number = readline.question( " Enter your number : ");
let i = 0;
while(i < number){
    let power = 2**i;
    i++;
    console.log(power);
    if(power == 256){
        break;
    }
}