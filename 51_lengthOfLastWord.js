var lengthOfLastWord = function(s) {
    let n = s.length;
    let currentLength = 0;

    for(let i=n-1; i>=0; i--){
        if(s[i] === ' '){
            if(currentLength>0){
                // If we have found the last word, break
                break;
            }
        }else{
            currentLength++;
        }
    }
    return currentLength;
};