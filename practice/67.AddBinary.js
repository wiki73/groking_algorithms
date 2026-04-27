/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let res = '0' * a.length
  for (let i = a > b ? a.length-1 : b.length-1; i >= 0; i--) {
    f = Number(a[i])
    s = Number(b[i])
    if (f + s === 2) {
        res[i] = '0'
        
    }
  }
};

console.log(addBinary("1010", "1011"));
