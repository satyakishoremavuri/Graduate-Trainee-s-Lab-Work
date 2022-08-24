"use strict";
exports.__esModule = true;
var sample = /** @class */ (function () {
    function sample(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
    sample.prototype.showData = function () {
        console.log(this.firstName);
        console.log(this.lastName);
    };
    return sample;
}());
var sampleObj = new sample("Mounika", "Boinapally");
sampleObj.showData();
