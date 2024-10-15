/* Problem Recap:
Given an array nums, where each element nums[i] represents the maximum number of steps you can jump forward from index i, you need to find the minimum number of jumps to reach the last index. It is guaranteed that you can reach the last index. */


var jump = function(nums) {
    let jumps = 0;         // Counts the number of jumps
    let currentEnd = 0;     // Tracks the farthest index we can reach with the current jump
    let farthest = 0;       // Tracks the farthest index we can reach overall

    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);  // Update the farthest we can reach from index i
        
        // If we reach the end of the current jump range
        if (i == currentEnd) {
            jumps++;                 // Make a jump
            currentEnd = farthest;   // Update the jump range to the farthest point we can now reach

            // If we can already reach the last index or beyond, we can stop
            if (currentEnd >= nums.length - 1) {
                break;
            }
        }
    }

    return jumps;
};
