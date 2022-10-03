var luckyNumbers = [3, 5, 7, 9];
for(var i=0; i<luckyNumbers.length; i++) {
	//Let's take the constant factor as 2
	luckyNumbers[i] = luckyNumbers[i] * 2;
}
console.log(luckyNumbers);
