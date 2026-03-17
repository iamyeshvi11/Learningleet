/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let maxP=0;
   let buy=prices[0]
   let sell;
   for(let i=1;i<prices.length;i++)
   {
    if(prices[i]-buy>maxP)
    {
        maxP=prices[i]-buy
    }
    if(prices[i]<buy)
    {
        buy=prices[i]
    }
   }
   return maxP
};
console.log(maxProfit([7,1,1]))