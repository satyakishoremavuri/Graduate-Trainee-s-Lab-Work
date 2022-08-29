"use strict";
exports.__esModule = true;
/*
DATA TYPES:-
1. Primitive data types
(number,string, boolean,null,undefined,symbol, any)

2. Refernce types
(array, objects, classes, interfaces)
*/
/*
variable declaration
<variable_name> : <data_type>=<initial value>;
*/
var res; //union type
res = false;
res = 100;
//ARRAYS
var a = [];
var a1 = [10, 20]; //number type
var a2;
a2 = ["rupa", "devi"];
var a3 = new Array(); // array using constructor
var a4 = new Array();
var a5 = new Array();
var a6 = new Array();
//functions
function showName(myName) {
    console.log("My Name is", myName);
}
showName("rupa");
showName("devi");
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20));
//constants
var empObj = {
    firstName: 'rupa',
    lastName: 'devi'
};
console.log(empObj);
empObj.firstName = "anil";
console.log(empObj);
var array = [10, 20, 30];
array[1] = 100;
console.log(array);
