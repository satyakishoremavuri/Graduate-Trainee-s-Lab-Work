"use strict";
exports.__esModule = true;
var Sample = /** @class */ (function () {
    function Sample() {
    }
    //public
    Sample.prototype.setData = function () {
        this.firstName = "Samyuktha";
        this.lastName = "Alakanti";
    };
    Sample.prototype.showData = function () {
        console.log(this.firstName);
        console.log(this.lastName);
    };
    return Sample;
}());
var sampleObj = new Sample();
sampleObj.setData();
sampleObj.showData();
