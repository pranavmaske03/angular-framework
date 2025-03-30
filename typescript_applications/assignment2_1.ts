
function Maximum(Arr : number[]) : number
{
    var i : number = 0;
    var Max : number = Arr[i];

    for(i = 0; i < Arr.length; i++)
    {
        if(Max < Arr[i])
        {
            Max = Arr[i];
        }
    }
    return Max;
}

var Arr : number[] = [23,89,6,29,56,45,77,32];
var Result : number = 0;

Result = Maximum(Arr);
console.log("Maximum number is : ",Result);