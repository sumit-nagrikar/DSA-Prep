/*PROBLEM STATEMENT:
The problem aims to find the maximum profit that can be obtained by buying and selling a stock. The given solution seems to follow a simple approach of iterating through the prices, keeping track of the minimum buying price, and updating the profit whenever a higher selling price is encountered.

This is a classic problem of finding the maximum profit from a single transaction (buying and selling stock) where you have to buy the stock before selling it. The key is to find the minimum buying price as you go through the array, and then compare it with the current price to calculate the profit.

Here’s how to break down the solution:

Steps:
Start with the first price as your minimum buying price.
As you go through each day's price:
Update the minimum buying price if you find a lower price.
Calculate the profit if you were to sell at the current price (current price - minimum buying price).
Update the maximum profit if the current profit is higher than the previously calculated profit.
At the end, return the maximum profit. If no profit can be made (the prices only go down), return 0.
Key points to remember:
You must buy before you sell, so keep tracking the minimum price.
You’re only allowed one transaction, so you must find the best time to sell after buying at the minimum price.
*/

//Code Implementation:

function maxProfit(prices) {
    let minPrice = Infinity; // Set the initial min price to a very large number
    let maxProfit = 0; // Initially, we haven't made any profit
    
    // Loop through each day's price
    for(let i=0; i<prices.length; i++){
        //If current price is less than minPrice
        if(prices[i] < minPrice){
            minPrice = prices[i]
        }
         // Calculate the profit if we sell at the current price
       let profit = prices[i] - minPrice
        
       // Update maxProfit if the current profit is greater than previous maxProfit
      if(profit > maxProfit){
       maxProfit = profit
      }
    }
    
    
    // Return the maximum profit we found
   return maxProfit
}

// Test cases:
console.log(maxProfit([7, 1, 5, 3, 6, 4]));  // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1]));  // Output: 0

/* Explanation with the first example:
Input: [7, 1, 5, 3, 6, 4]

Day 1: Price = 7, minPrice = 7, no profit yet.
Day 2: Price = 1, new minPrice = 1, no profit yet.
Day 3: Price = 5, profit = 5 - 1 = 4, update maxProfit to 4.
Day 4: Price = 3, profit = 3 - 1 = 2, maxProfit remains 4.
Day 5: Price = 6, profit = 6 - 1 = 5, update maxProfit to 5.
Day 6: Price = 4, profit = 4 - 1 = 3, maxProfit remains 5.
Output: The maximum profit is 5 (buy at 1, sell at 6).

How to remember:
Think of it like buying at the cheapest store: You’re looking for the lowest price (minimum) to buy.
Keep checking if the current store offers a good sale price (comparing current price with minPrice).
Write it out: Practice similar problems with different inputs to make this process second nature.


Time Complexity (TC):
We are looping through the array once, meaning the algorithm checks each price exactly one time.
The operations inside the loop (finding minimum price, calculating profit, updating maximum profit) are all constant time operations, O(1), for each element.
Thus, the time complexity is O(n), where n is the length of the array prices.

Space Complexity (SC):
We are only using two extra variables: minPrice and maxProfit to store the minimum price seen so far and the maximum profit.
This means the space usage does not depend on the input size, just these two variables.
Thus, the space complexity is O(1), which is constant space, as we are not using any additional space that grows with input size.

Summary:
Time Complexity: O(n), where n is the length of the prices array.
Space Complexity: O(1), constant space usage.*/


/*  Max Profit Problem (Stock Buying and Selling):
Statement: "Buy low, sell high, but always buy first."

Key Idea: Track the lowest price seen so far (buy) and calculate the potential profit by comparing the current price (sell) with that lowest price. Keep updating the maximum profit.
Memory Tip: Imagine you're a smart trader looking for the cheapest buying day and waiting for the best selling day in the future. */