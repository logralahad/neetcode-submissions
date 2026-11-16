class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        function trackIsland(root){
            let queue = [root];

            while(queue.length > 0){
                const node = queue.shift();
                const { x, y } = node;
                grid[x][y] = '-1';

                if(x > 0 && grid[x - 1][y] === '1'){
                    queue.push({ x: x - 1, y });
                }

                if(y > 0 && grid[x][y - 1] === '1'){
                    queue.push({ x, y: y - 1 });
                }
                
                if(x < (grid.length - 1) && grid[x + 1][y] === '1'){
                    queue.push({ x: x + 1, y });
                }
                
                if(y < (grid[0].length - 1) && grid[x][y + 1] === '1'){
                    queue.push({ x, y: y + 1 });
                }
            }
        }

        let counter = 0;

        for(let i = 0;  i < grid.length; i++){
            for(let j = 0;  j < grid[0].length; j++){
                const pos = grid[i][j];

                if(pos === '1'){
                    counter++;
                    trackIsland({ x: i, y: j });
                }
            }
        }

        return counter;
    }
}
