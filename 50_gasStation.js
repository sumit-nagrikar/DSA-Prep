/* 134. Gas Station
Medium
Topics
Companies
There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique.

 

Example 1:

Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3.
Therefore, return 3 as the starting index.


Approach:
1) gas and cost array same hi rahenge
2) gas = [1,2,3,4,5]/ as gas is good
  cost = [3,4,5,1,2]/cost is bad
  put them like this and check the diffrence gas - cost < 0 - then we are out of gas return -1.
3) take one total variable and save the diffrence there, for every gas[i] - cost[i]
and check if its less than zero.
3.5) let res =0 variable to keep track of starting index to return
4) If YES , move to next gas station and reset the total to Zero 
and do res = i + 1

5) At last return res.
   */




var canCompleteCircuit = function(gas, cost) {
    // If total gas is less than total cost, we can't complete the circuit
    if(gas.reduce((a,b) => a + b, 0) < cost.reduce((a,b) => a + b, 0)){
        return -1;
    }

    let total = 0;
    let res = 0;//keep track of  starting position

    for(let i=0; i<gas.length; i++){
        total += gas[i] - cost[i];

        if(total < 0){
            total = 0;
            res = i + 1;
        }
    }
    return res;
};