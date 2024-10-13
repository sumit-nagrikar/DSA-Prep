/* Climbing Stairs Problem

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb 1 or 2 steps. The task is to find how many distinct ways you can climb to the top. */

var climbStairs = function(n) {
    // Step 1: Create a dp (dynamic programming) array with size `n + 1`
    // `dp[i]` will represent the number of ways to reach the `i-th` step.
    // Initialize all values to 0 at first.
    const dp = new Array(n + 1).fill(0);
    
    // Step 2: Base case 1: There's 1 way to reach the 0th step (doing nothing).
    dp[0] = 1;
    
    // Step 3: Base case 2: There's 1 way to reach the 1st step (just take one 1-step move).
    dp[1] = 1;

    // Step 4: Fill the dp array for all steps from 2 to `n`.
    // The idea is that to reach step `i`, you can either:
    //  - Come from step `i - 1` (taking a 1-step move).
    //  - Come from step `i - 2` (taking a 2-step move).
    // Thus, `dp[i] = dp[i - 1] + dp[i - 2]`.
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    // Step 5: Return the value of `dp[n]`, which gives the number of distinct ways to reach the top.
    return dp[n];
};
