class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // x+y = target
        // 3 + y = 7
        // y = 7 - 3
        // y = 4
        const seen = new Map();
        for (let i = 0; i < nums.length; i++) {
            const y = target - nums[i];
            if (seen.has(y)) {
                return [seen.get(y), i];
            }

            seen.set(nums[i], i);
        }
        return [];
    }
}
