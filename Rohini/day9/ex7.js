"use strict";
exports.__esModule = true;
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.getData = function () {
        this.firstName = "sathesh";
        this.lastName = "kumar";
    };
    Test.prototype.showData = function () {
        console.log(this.firstName);
        console.log(this.lastName);
    };
    return Test;
}());
var Obj;
Obj = new Test();
Obj.getData();
Obj.showData();
var employee = {};
var employees = [];
