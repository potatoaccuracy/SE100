const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];

// Write your code below

let sumOfMSFTStockClosingPrices = 0

for (let i = 0; i < MSFTStockClosingPrices.length; i++){
    console.log(MSFTStockClosingPrices[i]);
}

for (let i = 0; i < MSFTStockClosingPrices.length; i++) {
	sumOfMSFTStockClosingPrices += MSFTStockClosingPrices[i]  
}

console.log(sumOfMSFTStockClosingPrices);
