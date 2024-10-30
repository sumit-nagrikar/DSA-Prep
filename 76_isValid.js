var isValid = function(s) {
    let stack = [];//to push opening parenthesis
    let closeToOpen = {")":"(", "}":"{", "]":"["};//to check our last opening paren. from stack matches the current closing one

    for(let c of s){
        if(c in closeToOpen){//means c is closing
            if(stack && stack[stack.length - 1] === closeToOpen[c]){
                stack.pop();
                continue;
            }
        }else{
            stack.push(c);
            continue;
        }
        return false;
    }
    return !stack.length;
};