const LOSE = 0;
const WIN = 1;
let balance = 100;
let winCount = 0;
let totalBets = 0;

while(balance>0&&balance<200){
    let toss = Math.floor(Math.random()*10)%2;
    switch(toss){
        case LOSE:
            balance--;
            break;
        case WIN:
            balance++;
            winCount++;
            break;
    }
    totalBets++;
}
console.log("Total bets taken = " + totalBets);
console.log("Total wins = " + winCount);
console.log("Balance = " + balance);