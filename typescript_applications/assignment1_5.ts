
function Fibonacci(No : number) : void
{
    var k : number = 0;
    var i : number = 0;
    var j : number = 1;

    while(k != No)
    {
        k = i + j;
        if (k > No)
        {
            break;
        }
        console.log(k);
        i = j;
        j = k;

    }
}

var Value : number = 10;
Fibonacci(Value);