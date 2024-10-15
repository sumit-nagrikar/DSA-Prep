/* You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index. */


var canJump = function(nums){
    let farthest = 0;
    
    for(let i=0; i<nums.length; i++){
        if(i>farthest){//jar check krta krta aapn farthest chya pudhe alo tr false
            return false;// If we can't reach this index, return false
        }
        farthest = Math.max(farthest,nums[i] + i)// Update the farthest index we can reach/covering area with jump

        if (farthest >= nums.length - 1) {//jr length pryant area cover kru shkto tr retuen true
            return true;  // If we can reach the last index, return true
        }
    }
    return false;
}

let nums = [2,3,1,1,0,4];
console.log(canJump(nums));