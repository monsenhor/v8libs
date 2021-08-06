/*
const fibonacci = (n) => {
    if (n === 1) return 0;
    if (n === 2) return 1;
    if (n > 2) return fibonacci(n-1) + fibonacci(n-2);
};
*/
const fibonacci = (n) => {
    if (n < 1) throw "n must be greater than 1"; 
    if (n === 1) return 0;
    if (n === 2) return 1;
    // Well, n > 2, We must loop for all numbers from 2 to n
    let last  = 1;
    let penul = 0;
    let fibo;
    for (let i = 3; i <= n; i++){
        fibo = last+penul;
        penul = last;
        last = fibo; 
    }
    return fibo;
};

module.exports = fibonacci;

