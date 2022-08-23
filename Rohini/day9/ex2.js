// export {}
var Sample = /** @class */ (function () {
    function Sample() {
    }
    //protected
    //public
    Sample.prototype.setData = function () {
        var firstName;
        firstName = "Rohini";
        this.firstName = "krishna";
        this.lastName = "mohan";
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
