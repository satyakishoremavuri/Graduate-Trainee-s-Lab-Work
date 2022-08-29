"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.getData = function () {
        this.firstName = "Rama";
        this.lastName = "Krishna";
    };
    Test.prototype.showData = function () {
        console.log(this.firstName);
        console.log(this.lastName);
    };
    return Test;
}());
var obj;
obj = new Test();
obj.getData();
obj.showData();
