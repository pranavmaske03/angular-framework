
function Addition(No1 : number, No2 : number) : number
{
    var Ans : number = 0;
    Ans = No1 + No2;
    return Ans;
}

var Result : number = 0;
Result = Addition(10,11);

console.log("Addition is : "+Result);

var Fun = (No1 : number, No2 : number) => No1 + No2;             //Lambda function

Result = Fun(10,11);
console.log("Addition is : "+Result);

console.log(typeof Fun);

var Gun = (no1 : number) => {if(no1%2 == 0){return true}else{return false}};

if(Gun(10) == true)
{
    console.log("Even");
}
else
{
    console.log("Odd");
}