const fibonacci_recursive = function(num)
{   
    if(num==1)
        return 0;
    if (num == 2)
        return 1;
    return fibonacci_recursive(num - 1) + fibonacci_recursive(num - 2);
};

module.exports = fibonacci_recursive;
