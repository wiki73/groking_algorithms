/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let count = 0;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      count++;
    } else {
      count > 0 ? res = count : count = 0;
      count = 0;
    }
    if (i === s.length - 1 && count > 0) {
      res = count;
    }
  }

  return res;
};

console.log(lengthOfLastWord("Today is a nice day"));
