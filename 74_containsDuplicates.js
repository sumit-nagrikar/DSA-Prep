/* 219. Contains Duplicate II
Easy
Topics
Companies
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true */

//Brute force way of solving the questions
var containsNearbyDuplicate = function(nums,k){
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] == nums[j] && (Math.abs(i - j)) <= k){
                return true;
            }
        }
    }
    return false;
}

//Lets optimise it using hashmap

var containsNearbyDuplicate2 = function(nums,k){
    let map = {};
    for(let i=0; i<nums.length; i++){
        if(nums[i] in map && (i - map[nums[i]]) <= k) return true;
        //update map with index index
        map[nums[i]] = i;
    }
    return false;
}
let nums = [1,2,3,1], k = 3;
let numbers = [1,2,3,2,1], x = 4;
console.log(containsNearbyDuplicate(nums,k));
console.log(containsNearbyDuplicate2(numbers,x));