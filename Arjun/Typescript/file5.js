// export {}
var Sample = /** @class */ (function () {
    function Sample() {
    }
    //protected
    //public
    Sample.prototype.setData = function () {
        var firstName;
        firstName = "Milo";
        this.firstName = "Arjun";
        this.lastName = "Chandra";
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
