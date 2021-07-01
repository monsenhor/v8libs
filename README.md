# v8libs
Learning how to create libraries for V8 engine

This study presents how to make libraries for javascript VMs. It covers working with raw javascript, torque, C, C++ and Wasm. 

We begin with the basics, implementing a function with Node.js using a TDD approach.

Next lessons cover npm projects implementing optimized libraries in C, C++ and torque.

The final lessons cover improving the built-in Javascript libraries for V8 hacking the core code.

We assume using a comand terminal in a Unix box, MacOS or Linux.

## Lesson 1 - Creating a function in V8 (Node.js) with javascript

The project will be made in the directory _transform_.

```
$ mkdir transform
```

We may create a new project using npm

```
$ cd transform
$ npm init -y
```

We must first __document__, make the __test__ and finally __code__.

### Document:
We want to implement a function able to perform a simple arithmetic operation. 
Let's name this function "transform". It receives 2 numbers (__x__ and __y__) and returns a result __z__ equal to __( x + y + 99 ) * 5__.

We create a file doc.md explaining how it works.

### Test:

We create a file test.js with the test.

```javascript
var transform = require ("transform.js");
var result = transform (34,67);

console.assert ( result  == 1000, "It is wrong ..."); 
```

We may test it running:

```
$ node test.js
```

We need to implement the function transform to pass the test, so when we run the test without any implementation it fails.

So we need to write our code.

### Code

We will implement the new function in the file transform.js

```javascript
var transform = function (x, y){
   let z = ( x + y + 99 ) * 5;
   return z;
}

module.exports = transform;
```

### Using the script

So we could use it like that:

```javascript
var transform = require ("transform.js");
var a = 34;
var b = 67;
var t = transform (a, b);
console.log (t);
```

This code is in the file main.js

This piece of code supposedly shall write "1000" on the screen.

So, we may run it now using node.js

```
$ node main.js
```



