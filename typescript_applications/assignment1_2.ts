
function Area(radius : number,Pi : number = 3.14) : number
{
    var Ans : number = 0;

    Ans = Pi * radius * radius;

    return Ans;
}

var Value : number = 5;
var Result : number = 0;

Result = Area(Value);
console.log("Area of  Circle is : "+Result);

