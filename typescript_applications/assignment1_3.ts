
function DisplayFactors(No : number) : void
{
    var iCnt : number = 1;

    for(iCnt = 1; iCnt <= (No/2); iCnt++)
    {
        if((No % iCnt) == 0)
        {
            console.log(iCnt);
        }
    }
}

var Value : number = 20;
DisplayFactors(Value);