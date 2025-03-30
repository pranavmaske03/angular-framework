
function CheckString(str : string) : number
{
    let str1 : string = "Marvellous";
    var ret : number = 0;

    ret = str.indexOf(str1);

    return ret;
}

var str = "Pune kothrud Marvellous Infosystems";
var Result : number = 0;

Result = CheckString(str);
if(Result == -1)
{
    console.log("String is NOT present");
}
else 
{
    console.log("String is present");
}
