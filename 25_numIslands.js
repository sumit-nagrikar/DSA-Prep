/* Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
We can not check diagonally.
Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3 */

var numIslands = function(grid){
    let countIslands = 0;

    for(let rowIndex in grid){
        for(colIndex in grid[rowIndex]){
            //check something
            if(grid[rowIndex][colIndex] === '1'){
                countIslands++;
                teraform(parseInt(rowIndex),parseInt(colIndex),grid);
            }  
        }
    }
    return countIslands;
}
//convert stuff around to water
const teraform = (rowIn, colIn, grid) => {
    if(grid[rowIn] === undefined || grid[rowIn][colIn] === undefined || grid[rowIn][colIn] === '0') return;
    
    grid[rowIn][colIn] = '0';//convert 1 to 0 for not repeating the checking
    //calling itself recursively on every direction and making them Zero
    teraform(rowIn+1, colIn, grid);
    teraform(rowIn-1, colIn, grid);
    teraform(rowIn, colIn+1, grid);
    teraform(rowIn, colIn-1, grid);

}

let grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]

console.log(`Total number of Islands: ${numIslands(grid)}`);