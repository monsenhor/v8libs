# v8libs
Learning how to create libraries for V8 engine

## Creating a function in V8 with javascript

We must first __document__, make the __test__ and finally __code__.
Well, I will try to explain what you need with an example.

### Document:
We want to implement a function able to perform a simple arithmetic operation. 
Let's name this function "transform". It receives 2 numbers (x and y) and returns a result z equal to (x + y + 99)*5.So we could use it like that:

```javascript
var a = 34;
var b = 67;
var t = transform (a, b);
write (t);
```

This piece of code supposedly shall write "1000" on the screen.  We need to implement "transform to have it.

### Test:
