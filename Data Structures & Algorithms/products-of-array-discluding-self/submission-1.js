class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let results = [];
        let output = 1;

        for(let i = 0; i < nums.length; i++){
            results[i] = output;
            output *= nums[i];
        }

        output = 1;
        for(let i = nums.length - 1; i >= 0; i--){
            results[i] *= output;
            output *= nums[i]; 
        }

        return results;
    }
}
