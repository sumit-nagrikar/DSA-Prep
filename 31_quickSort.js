var quickSort = function(nums){
    if(nums.length<=1) return nums;

    let pivot = nums[nums.length-1];
    let left = [];
    let right = [];

    for(let i=0; i<nums.length -1; i++){
        if(nums[i] < pivot){
            left.push(nums[i]);
        }else{
            right.push(nums[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = [4,8,7,9,5,0,5,30];
console.log((quickSort(array))); 