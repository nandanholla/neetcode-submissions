class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        // [4, 9, 5, 8, 3]
        const result = new Array(nums.length).fill(1);

        for (let i = 1; i < nums.length; i++) {
            result[i] = nums[i - 1] * result[i - 1];
        }

        let rightProduct = 1

        for (let j = nums.length - 1; j >= 0; j--) {
            result[j] *= rightProduct;
            rightProduct *= nums[j];
        }

        return result;
    }
}
