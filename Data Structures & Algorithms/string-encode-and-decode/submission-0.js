class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = '';
        for(const str of strs){
            encoded += (str + `LEN${str.length.toString().padStart(3, '0')}`); 
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
        const decoded = [];
        let partial = '';
        for(let i = 0; i < str.length; i++){
            if(str.slice(i, i + 3) === 'LEN'){
                decoded.push(partial);
                partial = '';
                i += 5
                continue;
            }

            partial += str[i];
        }
        return decoded;
    }
}
