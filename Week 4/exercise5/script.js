// Defining a function
function logHello() {
	console.log("hello")
}

logHello()

function getBetween() {
	const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
	
	// Write your code below

    countOfPrices = 0
    for (let price of MSFTStockClosingPrices) {
        if (price > 254 && price < 257) {
            countOfPrices++
        }
    }
    console.log(countOfPrices);
}

getBetween();