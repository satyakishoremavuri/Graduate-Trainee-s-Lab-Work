"use strict";
exports.__esModule = true;
var Sample = /** @class */ (function () {
    function Sample() {
    }
    Object.defineProperty(Sample.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (v) {
            this._firstName = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sample.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (v) {
            this._lastName = v;
        },
        enumerable: false,
        configurable: true
    });
    return Sample;
}());
var sampleobj = new Sample();
sampleobj.firstName = "Rama";
sampleobj.lastName = "krishna";
console.log(sampleobj.firstName);
console.log(sampleobj.lastName);
