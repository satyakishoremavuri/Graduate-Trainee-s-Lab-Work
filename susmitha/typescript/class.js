var class1 = /** @class */ (function () {
    function class1() {
    }
    //public variables
    class1.prototype.setData = function (fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    };
    class1.prototype.showData = function () {
        console.log(this.firstName);
        console.log(this.lastName);
    };
    return class1;
}());
var class1Obj = new class1();
class1Obj.setData("Mavuri", "susmitha");
class1Obj.showData();
