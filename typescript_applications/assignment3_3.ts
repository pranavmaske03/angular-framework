
class Circle 
{
    public radius: number;
    public PI: number;

    constructor(no1: number) 
    {
        this.radius = no1;
        this.PI = 3.14;
    }

    Area(): number 
    {
        var result: number = 0;

        result = 2 * this.PI * (this.radius * this.radius);

        return result;
    }
}

class CircleX extends Circle
{
    Circumference() : number
    {
        var result : number = 0;

        result = 2 * this.PI * this.radius;

        return result;
    }
}

var obj = new CircleX(22);

console.log("Area is :" + obj.Area());
console.log("Circumference is : "+obj.Circumference());
