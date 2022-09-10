/*
Data Types :-
1. Primitive Types
        number, string, boolean, null, undefined, symbol, any
2. Reference Types
        array, object, class, interface
Variable Declaration :-
    <variable_name> : <data_type> = <initial_value>;
*/
var firstName = "susmitha";
var middleName = "sai";
var lastName = "Mavuri"; //inferred type
var r = true;
var a = 100;
console.log(r);
//union type
var result;
result = true;
result = 50;
//arrays
var b = [10, 20, 30, "sai"];
var a1 = [10, 20, 30];
var a2;
a2 = ["sai"];
//Array using constructor
var a3 = new Array();
var a4 = new Array();
var a5 = new Array();
a5 = [10, 20, true];
//function1
function showName(myName) {
    console.log("My Name is ", myName);
}
showName("susmitha");
//2
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 90));
var empObj = {
    firstName: "max",
    lastName: "tony"
};
console.log(empObj);
empObj.firstName = "ann";
console.log(empObj);
