export class Customer {
    private firstName: string;
    private lastName: string;
    private _age:number;
    constructor(firstName:string,lastName:string,_age:number){
        this.firstName=firstName;
        this.lastName=lastName;
        this._age=_age;
    }
    public greeter() {
        console.log(`Hello ${this.firstName} ${this.lastName}`)
    }

    public GetAge(){
        console.log(`The age is ${this._age}`)
    }
}
let customer = new Customer("John","Smith",25);

customer.greeter();


