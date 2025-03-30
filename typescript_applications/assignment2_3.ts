
function SecMaximum(Arr: number[]): number 
{
    var i: number = 0;
    var Max: number = Arr[i];
    var smax : number = Arr[i];

    for (i = 0; i < Arr.length; i++) 
    {
        if(Max < Arr[i]) 
        {
            smax = Max;
            Max = Arr[i];
        }
        else if((Arr[i] < Max) && (smax < Arr[i]))
        {
            smax = Arr[i];
        }
    }
    return smax;
}

var Arr: number[] = [23, 89, 6, 29,56, 45, 77, 32];
var Result: number = 0;

Result = SecMaximum(Arr);
console.log("Maximum number is : "+Result);