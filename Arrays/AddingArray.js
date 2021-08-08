let numbers = [1,-2,3,-1,1,-5,1,-1];
console.log("Three numbers with sum ZERO :")
for (i = 0; i < numbers.length - 2; i++) {
    for (j = i + 1; j < numbers.length - 1; j++) {
        for (k = j + 1; k < numbers.length; k++) {
            if (numbers[i] + numbers[j] + numbers[k] == 0) {
                console.log(numbers[i], numbers[j], numbers[k]);
            }
        }
    }
}