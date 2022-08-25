// export {}
var Sample = /** @class */ (function () {
    function Sample() {
    }
    //protected
    //public
    Sample.prototype.setData = function () {
        var firstName;
        firstName = "Hira";
        this.firstName = "Mounika";
        this.lastName = "Boinapally";
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
