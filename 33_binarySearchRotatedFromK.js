var search = function(nums,target){//our array is sorted but it is rotated from k th index
    let low = 0, high = nums.length - 1;
    
    while(low<=high){
        let mid = Math.floor((high + low)/2);   

        if(nums[mid] === target){
            return mid;
        }

        if(nums[low] <= nums[mid]){//means left part is sorted
            //now we find , is part me apna target hai kya
            if(nums[low]<=target && target <nums[mid]){
                high = mid - 1;//search left
            }else{
                low = mid + 1; //search right
            }
        }else{
             // Right half must be sorted
            // If target is in the right half
            if(nums[mid] < target && target <= nums[high]){
                low = mid + 1;//search right
            }else{
                high = mid -1; //search left
            }
        }

    }
return -1;
}

let nums = [-1,0,3,5,9,12], target = 9;
console.log(search(nums,target));