"use strict";
exports.__esModule = true;
var sample = /** @class */ (function () {
    function sample() {
    }
    Object.defineProperty(sample.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (v) {
            this._firstName = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(sample.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (v) {
            this._lastName = v;
        },
        enumerable: false,
        configurable: true
    });
    return sample;
}());
var sampleObj = new sample();
sampleObj.firstName = "Shreya";
sampleObj.lastName = "Tr";
console.log(sampleObj.firstName);
console.log(sampleObj.lastName);
