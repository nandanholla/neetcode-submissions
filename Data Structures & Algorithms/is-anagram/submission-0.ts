class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;

        const seen = new Map();

        for(const ch of s) {
            seen.set(ch, (seen.get(ch) ?? 0) + 1);
        }

        for(const ch of t) {
            if (!seen.has(ch)) return false;

            const freq = seen.get(ch);

            if(!freq) return false;
            seen.set(ch, freq - 1); 
        }

        return true;
    }
}
