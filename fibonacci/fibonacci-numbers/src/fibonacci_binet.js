const fibonacci_binet = function (num) {
  num --;
  //if (num == 1) return 0;
  //if (num == 2) return 1;
  let goldenRatio = 1.618034;
  let fibo = (Math.pow(goldenRatio, num) - Math.pow((1 - goldenRatio), num)) / Math.sqrt(5);
  return Math.trunc(fibo);
};
module.exports = fibonacci_binet;
