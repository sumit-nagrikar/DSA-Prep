/* 202. Happy Number
Easy
Topics
Companies
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not. */

var isHappyNumber = function(n){
    let visit = new Set();//to track visited numbers

    var getNextNumber = function(n){
        var output = 0;

        while(n > 0){
            var digit = n % 10;
            output += digit * digit;
            n = Math.floor(n/10);
        }
        return output;
    }

    while(!visit.has(n)){
        visit.add(n);
        n = getNextNumber(n);
        if(n === 1) return true;
    }
    return false;
}

console.log(isHappyNumber(13));
console.log(isHappyNumber(11));
console.log(isHappyNumber(15));