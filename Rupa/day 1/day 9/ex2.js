"use strict";
exports.__esModule = true;
//classes
var sample = /** @class */ (function () {
    function sample() {
    }
    //public
    sample.prototype.setData = function () {
        this.firstName = "Mohan";
        this.lastName = "krishna";
    };
    sample.prototype.showData = function () {
        console.log(this.firstName);
        console.log(this.lastName);
    };
    return sample;
}());
var sampleObj = new sample();
sampleObj.setData();
sampleObj.showData();
