/* Step 1: Understand the Process
Merge sort works by dividing the array into halves recursively until each subarray has one element. It then merges these subarrays back together in sorted order.

High-level plan:
Divide: Recursively split the array into two halves until each half contains one element.
Merge: Merge the two halves by comparing elements and arranging them in ascending order.
Step 2: Implement Merge Sort
We will write two functions:

mergeSort: to recursively split the array.
merge: to merge two sorted arrays. */

function mergeSort(nums){
    // Base case: if the array has 1 or 0 elements, it's already sorted
    if(nums.length<=1){
        return nums;
    }
     // Find the middle index to split the array into two halves
    let mid = Math.floor(nums.length/2);
    // Recursively split and sort both halves
    let leftHalf = mergeSort(nums.slice(0,mid));
    let rightHalf = mergeSort(nums.slice(mid));
     // Merge the sorted halves
    return merge(leftHalf,rightHalf);
}

function merge(left,right){
    let sortedArray = [];
    let i=0, j=0;

    while(i<left.length && j<right.length){
        if(left[i] < right[j]){
            sortedArray.push(left[i]);
            i++;
        }else{
            sortedArray.push(right[j]);
            j++;
        }
    }
    
    return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}

let nums =[3,5,8,7,9,7,8];
console.log(mergeSort(nums));

/* Explanation:
Base case: If the array has 1 or fewer elements, it is already sorted.
Recursive division: Split the array into two halves and recursively sort them.
Merge: The merge function compares elements from the two sorted halves and merges them into the result array. After one side is exhausted, the remaining elements from the other side are concatenated using concat(left.slice(i)) and concat(right.slice(j)).
 */