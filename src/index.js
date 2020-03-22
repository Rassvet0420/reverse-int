module.exports = function reverse (n) {
  n = Math.abs(n);
  n = String(n);
  let nReverse = n.split("").reverse().join("");
  return nReverse;
}

