
function Summation(Arr: number[]): number 
{
    var i: number = 0;
    var Sum: number = 0;

    for (i = 0; i < Arr.length; i++) 
    {
        Sum = Sum + Arr[i];
    }
    return Sum;
}

var Arr: number[] = [23,6,7,4,5,7];
var Result: number = 0;

Result = Maximum(Arr);
console.log("Summation is : "+Result);