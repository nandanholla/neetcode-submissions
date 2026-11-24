class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        // [4, 9, 5, 8, 3]
        const left = new Array(nums.length).fill(1);

        for (let i = 1; i < nums.length; i++) {
            left[i] = nums[i - 1] * left[i - 1];
        }

        const right = new Array(nums.length).fill(1);

        for (let j = nums.length - 2; j >= 0; j--) {
            right[j] = nums[j + 1] * right[j + 1];
        }

        const result = [];

        for (let k = 0; k < nums.length; k++) {
            result.push(left[k] * right[k]);
        }

        return result;
    }
}
