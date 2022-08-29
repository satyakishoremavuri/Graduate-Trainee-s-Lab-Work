var Sample = /** @class */ (function () {
    function Sample() {
        this.firstName = "Rama";
        this.lastName = "krishna";
    }
    Sample.prototype.showData = function () {
        console.log(this.firstName);
        console.log(this.lastName);
    };
    return Sample;
}());
