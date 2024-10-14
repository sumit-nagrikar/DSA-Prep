/* Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k. 

Approach:
1. Take one pointer to place non-val elments to front of array
2. every time increase value of k
return k
3. k is pointer to place elments at front part*/

var removeElement = function(nums,val){
    let k =0;//zero position pe ele. dalna hai
    for(let i=0;i<nums.length;i++){//Iterate on array
        if(nums[i] !== val){
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}
let nums = [3,2,2,3];
let val = 3;
console.log(removeElement(nums,val));