/* Approach
ek array hai  nums = [1,1,2]
if array is empty return 0;
take pointer
        one for unique element= j
        other for current element = i
loop using for loop
    and check the last unique element is differ than current ele
        if so increase the unique ele. index as well as movw forward in loop i++

        last return j + 1;
        cause if there are j unique ele. in array that means length is j + 1 
 */

        var removeDuplicates = function(nums) {
            // Edge case: If the array is empty or has only one element
            if (nums.length === 0) return 0;
            
            let j = 0; // This pointer tracks the position of the last unique element
            
            for (let i = 1; i < nums.length; i++) {
                // If the current element is different from the last unique element
                if (nums[i] !== nums[j]) {
                    j++; // Move the unique position forward
                    nums[j] = nums[i]; // Update the next unique position with the current element
                }
            }
            
            // The number of unique elements is j + 1
            return j + 1;
        };
        
let nums = [1,1,2];
console.log(removeDuplicates(nums));