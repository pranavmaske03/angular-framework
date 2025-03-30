
function Maximum(no1 : number,no2 : number,no3 : number) : number
{
    if((no1 > no2) && (no1 > no3))
    {
        return no1;
    }
    else if((no2 > no1) && (no2 > no3))
    {
        return no2;
    }
    else
    {
        return no3;
    }
}

var No1 : number = 23;
var No2 : number = 89;
var No3 : number = 6;
var Result : number = 0;

Result = Maximum(No1,No2,No3);

console.log("Maximum number is : "+Result);