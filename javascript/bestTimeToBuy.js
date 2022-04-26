function maxProfit(prices) {
    let currentMax = 0;
    let minBuy = Infinity;
    
    for (let i = 0; i < prices.length; i++) {
    if(minBuy > prices[i]) {
       minBuy = prices[i];
       }
        
        const currentProfit = prices[i] - minBuy;
        
        if (currentProfit > currentMax) {
            currentMax = currentProfit;
        }
    }
    
    return currentMax;
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));