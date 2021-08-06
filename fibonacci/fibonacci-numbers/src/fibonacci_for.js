const fibonacci_for = function (num)
{
    if (num === 1) return 0;
    if (num === 2) return 1;
 
    var penul=0;
    var last =1;
    var fibo;
    var i=0;
    for (i = 2; i < num; i++) 
    {
        fibo=last+penul;
        penul=last;
        last =fibo;
    }
    return fibo;
};

module.exports = fibonacci_for;
