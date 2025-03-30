
class Arithmatic
{
    public Num1 : number;
    public Num2 : number;
    public result : number;

    constructor(no1 : number,no2 : number)
    {
        this.Num1 = no1;
        this.Num2 = no2;
    }

    Addition() : number
    {
        this.result = this.Num1 + this.Num2;

        return this.result;
    }

    Substraction() : number
    {
        this.result = this.Num1 - this.Num2;

        return this.result;
    }

    Multiplication() : number
    {
        this.result = this.Num1 * this.Num2;

        return this.result;
    }

    Division() : number
    {
        this.result = this.Num1 / this.Num2;

        return this.result;
    }
}

var obj1 = new Arithmatic(11,22);

console.log(obj1.Addition());
console.log(obj1.Substraction());
console.log(obj1.Multiplication());
console.log(obj1.Division());

var obj2 = new Arithmatic(31, 44);

console.log(obj2.Addition());
console.log(obj2.Substraction());
console.log(obj2.Multiplication());
console.log(obj2.Division());
