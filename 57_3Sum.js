/* Intuition
The first thought is to sort the array so that we can use the two-pointer technique efficiently. By fixing one element and adjusting the other two pointers, we can find combinations of three numbers that sum up to zero.

Approach
Sort the array: Sorting allows us to effectively use the two-pointer approach to find valid triplets.
Two-pointer technique: For each element in the array (fixed as the first number), use two pointers (j starting after the fixed element and k at the end of the array). Adjust j and k based on whether the sum of the triplet is greater than, less than, or equal to zero.
Duplicate handling: Skip duplicate values to avoid returning the same triplet multiple times.
Complexity
Time complexity:
Sorting the array takes (O(n \log n)), and iterating through the array with two pointers for each element takes (O(n^2)), making the overall time complexity (O(n^2)).

Space complexity:
The space complexity is (O(1)), since we're only using constant extra space (excluding the space used for the result array). */

var threeSum = function(nums) {
    let res = [];
    //first sort the array
    nums.sort((a,b) => a - b);

    //loop on array, fix first element and add with another j & k
    for(let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i] === nums[i - 1]) continue;//skip the iteration
            let j = i + 1;
            let k = nums.length - 1;
        while(j < k){
            let total = nums[i] + nums[j] + nums[k];//to match it with Zero

            if(total > 0){
                k--;//to reduce the total
            }else if(total < 0){
                j++;//To increase the total
            }else{//push these elements to res in array
                res.push([nums[i],nums[j],nums[k]]);
                j++;
                while(nums[j] === nums[j + 1]){
                    j++;
                }
            }
        }
    }
    return res;
};