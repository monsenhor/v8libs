const fibonacci_while = function (num) {
  if (num === 1) return 0;
  if (num === 2) return 1;
  var penul = 0;
  var last  = 1;
  var fibo;
  var i = 2;
  while (i < num) {
    fibo = last + penul;
    penul = last;
    last  = fibo;
    i += 1;
  }
  return fibo;
};

module.exports = fibonacci_while;
