"use strict";
exports.__esModule = true;
var sample = /** @class */ (function () {
    function sample() {
    }
    sample.prototype.getData = function () {
        this.firstName = "sai";
        this.lastName = "susmitha";
    };
    sample.prototype.showData = function () {
        console.log(this.firstName);
        console.log(this.lastName);
    };
    return sample;
}());
var obj;
obj = new sample();
obj.getData();
obj.showData();
var employee = {};
var employees = [];
