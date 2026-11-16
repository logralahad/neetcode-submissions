class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    

    groupAnagrams(strs) {
        function getKey(str){
            let key = '';
            const map = new Array(26).fill(0);

            for(let i = 0; i < str.length; i++){
                map[str.charCodeAt(i) - 97] += 1; 
            }

            for(let i = 0; i < map.length; i++){
                if(map[i] === 0) continue;
                key += `${String.fromCharCode(97 + i)}:${map[i]}`
            }

            return key;
        }


        const results = []
        const mapResults = {}

        for(let i = 0; i < strs.length; i++){
            const str = strs[i];
            const key = getKey(str);

            if(!mapResults[key]){
                mapResults[key] = [];
            }

            mapResults[key] = [... mapResults[key], str];
        }

        Object.keys(mapResults).forEach((key) => {
            results.push(mapResults[key]);
        }) 

        return results;
    }
}
