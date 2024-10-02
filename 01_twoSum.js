/* Problem:
You are given an array of numbers and a target sum. You need to find two numbers in the array whose sum equals the target and return their indices.

Approach:
To make this solution faster (from O(n²) to O(n)), we use a hash map (an object in JavaScript) to store numbers we've seen and their positions as we go through the array. */

/* Brute force approach
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length-1; i++){
        for(let j=i+1;j<nums.length; j++){
            if(nums[i]+nums[j] == target){
                return [i,j];
            }
        }
    }
};
}; */


function twoSum(target,nums){
    let map = {}// Hash map to store value and index
    
    for(let i=0; i<nums.length; i++){//Iterate on array
        let complement = target - nums[i] //find complement

        // Check if the complement is in the map
        if(map[complement] !== undefined){
            return [map[complement], i]// Return indices if found
        }

        //adding element to map to track the complemnt from previous elments and get their index
        map[nums[i]] = i  
    }
}

let target = 9;
let nums = [2,7,3,4,5];

console.log(twoSum(target,nums));

