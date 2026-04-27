function longestCommonPrefix(strs) {
    var res = '';
    var temp = strs[0];
    for (var index = 1; index < strs.length; index++) {
        for (var j = 0; index < strs[index].length; j++) {
            if (temp[j] === strs[index][j]) {
                res += temp[j];
            }
        }
    }
    return res;
}
;
var strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
