class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const count: Map<string, string[]> = new Map();

        for(const str of strs) {
            const arr = new Array(26).fill(0);

            for(let i = 0; i < str.length; i++) {
                const idx = str.charCodeAt(i) - 97;
                arr[idx]++;
            };
            const getter = count.get(arr.toString());
            if(!getter) count.set(arr.toString(), []);
            count.get(arr.toString()).push(str)
        }

        

        return [...count.values()];
    }
}
