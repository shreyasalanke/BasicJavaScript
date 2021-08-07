let head = 0; 
let tail = 0;
while (head < 11 && tail < 11) {
	let coin = Math.floor(Math.random() * 1000) % 2;
	if (coin == 1) {
		head++;
	} else {
		tail++;
	}
}
console.log("Heads count: " + head +  "\nTails count: " + tail);