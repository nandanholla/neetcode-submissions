class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freqMap: Map<number, number> = new Map();
        let result: number[] = [];

        for (const num of nums) {
            freqMap.set(num, (freqMap.get(num) ?? 0) + 1);
        }

        const arr: Array<number[]> = Array.from({ length: nums.length + 1 }, () => []);

        for (const [key, freq] of freqMap.entries()) {
            arr[freq].push(key);
        }

        for (let i = arr.length - 1; i >= 1; i--) {
            if (arr[i].length) {
                for (let j = 0; j < arr[i].length; j++) {
                    result.push(arr[i][j]);
                    if (result.length === k) return result;
                }
            }
        }

        return [];
    }
}
