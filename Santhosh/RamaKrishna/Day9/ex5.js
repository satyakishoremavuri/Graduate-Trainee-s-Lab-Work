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
Object.defineProperty(exports, "__esModule", { value: true });
var BaseClass = /** @class */ (function () {
    function BaseClass(x) {
        this.a = x;
    }
    BaseClass.prototype.getValue = function () {
        return this.a;
    };
    return BaseClass;
}());
var DerivedCalss = /** @class */ (function (_super) {
    __extends(DerivedCalss, _super);
    function DerivedCalss(y) {
        var _this = _super.call(this, 100) || this;
        _this.b = y;
        return _this;
    }
    DerivedCalss.prototype.showData = function () {
        console.log(_super.prototype.getValue.call(this));
        console.log(this.b);
    };
    return DerivedCalss;
}(BaseClass));
var derivedobj = new DerivedCalss(200);
derivedobj.showData();
