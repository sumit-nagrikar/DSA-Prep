/* Coin Change Problem

You are given an integer array `coins` representing coins of different denominations and an integer `amount` representing a total amount of money.

Return the fewest number of coins needed to make up that amount. 
If the amount cannot be made up by any combination of the coins, return -1.

Assume you have an infinite number of each type of coin. */

var coinChange = function(amount, coins) {
    // Step 1: Create a dp (dynamic programming) array with size `amount + 1`.
    // Initialize each value to Infinity because initially, we assume it's impossible to make that amount.
    // dp[i] will represent the minimum number of coins needed to make the amount `i`.
    let dp = new Array(amount + 1).fill(Infinity);

    // Step 2: Base case: To make amount 0, we need 0 coins (no coins needed for 0 amount).
    dp[0] = 0;

    // Step 3: Loop over each coin denomination available in the `coins` array.
    for (const coin of coins) {
        // Step 4: For each coin, loop through all amounts from `coin` to `amount`.
        // We're checking how many coins are needed to make every amount from `coin` up to `amount`.
        for (let i = coin; i <= amount; i++) {
            // Step 5: Update dp[i] with the minimum number of coins needed to make the amount `i`.
            // Either the value we already have in dp[i] OR the value of `dp[i - coin] + 1` (which means using the current coin).
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    // Step 6: If `dp[amount]` is still Infinity, it means it's not possible to make that amount.
    // Otherwise, return `dp[amount]`, which holds the minimum number of coins needed.
    return dp[amount] === Infinity ? -1 : dp[amount];
};

// Example Usage:
let amount = 11;
let coins = [1,2,5];  // Available coin denominations
console.log(coinChange(amount, coins));  // Output: 3 (7 + 2 + 2)
