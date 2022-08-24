"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var sample = /** @class */ (function () {
    function sample() {
        this.a = 100;
        this.b = 200;
    }
    sample.prototype.showData = function () {
        console.log(this.a);
        console.log(this.b);
    };
    return sample;
}());
var sample1 = /** @class */ (function (_super) {
    __extends(sample1, _super);
    function sample1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    sample1.prototype.cal = function () {
        this.c = 100 + this.b;
    };
    sample1.prototype.show = function () {
        this.showData();
        console.log(this.c);
    };
    return sample1;
}(sample));
var sampleObj = new sample1();
sampleObj.cal();
sampleObj.show();
