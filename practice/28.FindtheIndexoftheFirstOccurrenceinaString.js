/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const needleLen = needle.length 
    for (let i = 0; i <= haystack.length - needleLen; i++) {
        if (haystack.substring(i, i + needleLen) === needle){
            return i;

        }
    }  
    return -1;
};

const haystack = "asadbutsad"
const needle = "sad"
console.log(strStr(haystack,needle))