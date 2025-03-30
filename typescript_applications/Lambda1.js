function Addition(No1, No2) {
    var Ans = 0;
    Ans = No1 + No2;
    return Ans;
}
var Result = 0;
Result = Addition(10, 11);
console.log("Addition is : " + Result);
var Fun = function (No1, No2) { return No1 + No2; }; //Lambda function
Result = Fun(10, 11);
console.log("Addition is : " + Result);
console.log(typeof Fun);
var Gun = function (no1) { if (no1 % 2 == 0) {
    return true;
}
else {
    return false;
} };
if (Gun(10) == true) {
    console.log("Even");
}
else {
    console.log("Odd");
}
