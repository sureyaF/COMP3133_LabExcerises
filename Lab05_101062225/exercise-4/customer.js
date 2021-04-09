"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, _age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = _age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello " + this.firstName + " " + this.lastName);
    };
    Customer.prototype.GetAge = function () {
        console.log("The age is " + this._age);
    };
    return Customer;
}());
exports.Customer = Customer;
var customer = new Customer("John", "Smith", 25);
customer.greeter();
