
function CheckPrime(No : number) : boolean
{
    var iCnt : number = 0;
    var flag : boolean = false;

    for(iCnt = 2; iCnt <= (No/2); iCnt++)
    {
        if((No % iCnt) == 0)
        {
            flag = true;
            break;
        }
    }
    return flag;
}

var Value : number = 23;
var Result : boolean = false;

Result = CheckPrime(Value);
if(Result == true)
{
    console.log("Number is NOT  prime");
}
else
{
    console.log("Number is prime");
}