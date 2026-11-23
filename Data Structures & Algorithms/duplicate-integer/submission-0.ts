class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const seen: Set<number> = new Set();
        for(let num of nums) {
            if(seen.has(num)) return true;

            seen.add(num);
        }

        return false;
    }
}
