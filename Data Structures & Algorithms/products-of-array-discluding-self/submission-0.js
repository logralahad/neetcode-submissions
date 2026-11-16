class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const results = [];
        let leftOut = new Array(nums.length).fill(0);
        let rightOut = new Array(nums.length).fill(0);

        let lastN = 1;
        let output = 1;
        for(let i = 0; i < nums.length; i++){
            output *= lastN;
            lastN = nums[i];
            leftOut[i] = output;
        }

        lastN = 1;
        output = 1;
        for(let i = nums.length - 1; i >= 0; i--){
            output *= lastN;
            lastN = nums[i];
            rightOut[i] = output;
        }

        for(let i = 0; i < leftOut.length; i++){
            results.push(leftOut[i] * rightOut[i])
        }

        return results;
    }
}
