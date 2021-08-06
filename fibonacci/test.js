const assert = require('assert');
const fibonacci = require('./fibonacci.js');

var a = [];            // Define the var a as an array
var begin = 1;
var max = 10;          // Define the range from begin to max

for (let i=begin; i<=max; i++) {   //Loop for all numbers in range
    a = fibonacci(i); 
    switch(i) {
        case 1:
          assert(a === 0, "Not a correct value for "+i+": "+a);
          break;
        case 2:
          assert(a === 1, "Not a correct value for "+i+": "+a);
          break;
        case 3:
          assert(a === 1, "Not a correct value for "+i+": "+a);
          break;
        case 4:
          assert(a === 2, "Not a correct value for "+i+": "+a);
          break;
        case 5:
          assert(a === 3, "Not a correct value for "+i+": "+a);
          break;
        case 6:
          assert(a === 5, "Not a correct value for "+i+": "+a);
          break;
        case 7:
          assert(a === 8, "Not a correct value for "+i+": "+a);
          break;
        case 8:
          assert(a === 13, "Not a correct value for "+i+": "+a);
          break;
        case 9:
          assert(a === 21, "Not a correct value for "+i+": "+a);
          break;
        case 10:
          assert(a === 34, "Not a correct value for "+i+": "+a);
          break;
        default:
          assert(i <= max, "Out of range!!!");
    }
} 
console.log("All tests passed.");

