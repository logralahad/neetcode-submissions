class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let max = -1;
        const map = {};
        const output = [];

        for(let i = 0; i < nums.length; i++){
            if(!map[nums[i]]) {
                map[nums[i]] = 0;
            }

            map[nums[i]] += 1;
            max = Math.max(map[nums[i]], max);
        }

        const sizes = Array.from({ length: max + 1 }, () => [])

        Object.keys(map).forEach((key) => {
            const size = map[key];
            sizes[size].push(Number(key));
        })

        for(let i = sizes.length - 1; i >= 0; i--){
            const numbersToAdd = k - output.length;
            if(numbersToAdd <= 0) break;

            output.push(...sizes[i])
        }

        return output.slice(0, k);
    }
}
