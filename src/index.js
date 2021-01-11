module.exports = function reverse (n) {
  let str = n.toString();
  let resultStr = str.split("").reverse().join("");
  return parseInt(resultStr,10)
}
