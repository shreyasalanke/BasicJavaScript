const readline = require('readline-sync');
let number = readline.questionInt("Enter 1 for fahernhit to centigrade and 2 for viceversa : ");
let temp_str = readline.questionInt("Enter temperature: ");
let temp = parseInt(temp_str);
function fahrenheitToDegreeCentigrade(temp) {
	if (temp < 32 || temp > 212) {
		console.log("Invalid input!");
		return;
	}
	console.log("temp is degree celsius is: " + ((temp - 32) * (5 / 9)));
}
function centigradeToDegreeFahrenheit(temp) {
	if (temp < 0 || temp > 100) {
		console.log("Invalid input!!!!");
		return;
	}
	console.log("temp in degree fahrenheit is: " + ((temp * 9 / 5) + 32));
}
if (number == 1) {
	fahrenheitToDegreeCentigrade(temp);
} else if(number==2) {
	centigradeToDegreeFahrenheit(temp);
}else{
    console.log("enter valid number");
}