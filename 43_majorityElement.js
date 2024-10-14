let nums = [1,1,1,2,2,2,2,2,1];
//we need to return majority element from this array

var majorityElement = function(nums){
    let count = 0;
    let maj = 0;
    for(const n of nums){
        if(count === 0){
            maj = n;
        }
        if(maj === n){
            count++;
        }else{
            count--;
        }
    }
    return maj;
}

console.log(majorityElement(nums));