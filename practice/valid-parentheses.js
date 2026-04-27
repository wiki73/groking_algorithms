function isValid(s) {
    var bracketMap = {
        "(": ")",
        "[": "]",
        "{": "}",
    };
    var stack = [];
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        if (bracketMap[char]) {
            stack.push(bracketMap[char]);
        }
        else {
            if (stack.pop() !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
var s = "([]]";
console.log(isValid(s));
