"use strict";
exports.__esModule = true;
var Sample = /** @class */ (function () {
    function Sample() {
    }
    //public
    Sample.prototype.setData = function () {
        // let firstName: string;
        // firstName = "Rama";
        this.lastName = "Krishna";
        this.firstName = "Rama";
    };
    Sample.prototype.showData = function () {
        console.log(this.firstName);
        console.log(this.lastName);
    };
    return Sample;
}());
var sampleobj = new Sample();
sampleobj.setData();
sampleobj.showData();
