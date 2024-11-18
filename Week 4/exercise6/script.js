const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
const AAPLStockClosingPrices = [256.45, 255.25, 259.10, 260.75, 261.88];


// Write your code below

function getBetween(prices, company) {
    countOfPrices = 0
    for (let price of prices){
        if(price > 254 && price < 257){
            countOfPrices++
        }
    }
    console.log("Closing price of " + company + " between 254 to 257: " + countOfPrices + "Days")
}

getBetween(MSFTStockClosingPrices, "MSFT");
getBetween(AAPLStockClosingPrices, "AAPL");
