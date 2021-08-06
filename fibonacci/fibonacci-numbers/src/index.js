const fibonacci_binet = require("./fibonacci_binet.js");
const fibonacci_while = require("./fibonacci_while.js");
const fibonacci_for = require("./fibonacci_for.js");
const fibonacci_recursive = require("./fibonacci_recursive.js");

const max = 5;
var num;

for (num = 1; num<=max; num++){
    // Binet's Formula
    console.log("Binet Fibonacci number "+num+": ", fibonacci_binet(num));
    
    // While
    console.log("While Fibonacci number "+num+": ", fibonacci_while(num));
    
    // For Loop
    console.log("For Fibonacci number "+num+": ", fibonacci_for(num));
    
    // Recursive
    if (num < 30)
    console.log("Recursive Fibonacci number "+num+": ", fibonacci_recursive(num));
    console.log("------------------------------");
}
