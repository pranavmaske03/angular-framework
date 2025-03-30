
function CheckArmstrong(No : number) : boolean
{
    var i,j,Result : number = 0;
    var base : number = 0;
    var Arr : number[] = [];

    var snumber = No.toString();
    for(i= 0; i < snumber.length; i++)
    {
        Arr.push(+snumber.charAt(i));
    }

    var sum: number = 0;

    for (i = 0; i < Arr.length; i++) 
    {
        base = Arr[i];
        Result = 1;
        for (j = 0; j < Arr.length; j++) 
        {
            Result = Result * base;
            console.log(Result);
        }
        sum = sum + Result;
    }
    if(sum == No)
    {
        return true;
    }
    else
    {
        return false;
    }
}


var Value : number = 163;
var bRet : boolean = false;

bRet = CheckArmstrong(Value);
if(bRet == true)
{
    console.log(Value+" is Armstrong number");
}
else
{
    console.log(Value+" is NOT Armstrong number");
}