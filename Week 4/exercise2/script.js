const MSFTStockClosingPrices = [
    {
        Monday: 254.12,
        Tuesday: 253.12,
        Wednesday: 256.97,
        Thursday: 257.52,
        Friday: 258.93
    },
    {
        Monday: 292.20,
        Tuesday: 289.73,
        Wednesday: 291.04,
        Thursday: 294.55,
        Friday: 296.29
    }]
    
    // Write your code below

let sumOfClosingPrices = 0;

for (let i = 0; i < MSFTStockClosingPrices.length; i++) {
    sumOfClosingPrices += MSFTStockClosingPrices[i]['Monday']
    sumOfClosingPrices += MSFTStockClosingPrices[i]['Tuesday']
    sumOfClosingPrices += MSFTStockClosingPrices[i]['Wednesday']
    sumOfClosingPrices += MSFTStockClosingPrices[i]['Thursday']
    sumOfClosingPrices += MSFTStockClosingPrices[i]['Friday']
}

console.log(sumOfClosingPrices.toFixed(2));



