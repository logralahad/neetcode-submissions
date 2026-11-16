class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = {};

        if(s.length !== t.length) return false

        const largerString = s.length > t.length ? s : t;
        const smallerString = s.length > t.length ? t : s;

        for(let i = 0; i < largerString.length; i++){
            const letter = largerString[i];

            if(!map[letter]){
                map[letter] = 0;
            }

            map[letter] = map[letter] + 1; 
        }

        for(let i = 0; i < smallerString.length; i++){
            const letter = smallerString[i];

            if(!map[letter] || map[letter] < 0) return false;
            map[letter] = map[letter] - 1; 
        }

        return true;
    }
}
