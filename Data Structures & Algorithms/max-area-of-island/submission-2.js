class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        function getIslandSize(root){
            let queue = [root];
            let size = 0;

            while(queue.length > 0){
                const { x, y } = queue.shift();

                if( grid[x][y] !== 1){
                    continue;
                }

                grid[x][y] = 0;
                size++;

                if(x > 0 && grid[x - 1][y] === 1){
                    queue.push({ x: x - 1, y: y })
                }

                if(y > 0 && grid[x][y - 1] === 1){
                    queue.push({ x: x, y: y - 1 })
                }

                if(x < (grid.length - 1) && grid[x + 1][y] === 1){
                    queue.push({ x: x + 1, y: y })
                }

                if(y < (grid[0].length - 1) && grid[x][y + 1] === 1){
                    queue.push({ x: x, y: y + 1 })
                }
            }

            return size;
        }

        let maxSize = 0;

        for(let i = 0; i < grid.length; i++){
            for(let j = 0; j < grid[0].length; j++){
                if(grid[i][j] === 1){
                    maxSize = Math.max(maxSize, getIslandSize({ x: i, y: j }))
                }
            }
        }

        return maxSize;
    }
}
