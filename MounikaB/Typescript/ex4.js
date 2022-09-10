"use strict";
exports.__esModule = true;
console.log("Hello World");
var firstName = "Mounika";
var lastName = "Boinapally";
var x = 100;
var result = true;
// let anyvalue;
// anyvalue = 100;
// anyvalue = "Hira";
// anyvalue = false;
// anyvalue = {};
// anyvalue  ();
// anyvalue = [];
// anyvalue. result = true;
//union type
var res;
res = false;
res = 100;
//arrays
// let a =[];
// let a =[] as number[];
var a = [10, 20, "Hira"];
var a1 = [10, 20];
var a2;
a2 = ["Mounika", "Boinapally"];
//array creation using constructor
var a3 = new Array();
var a4 = new Array();
// let a5 = new Array  <number>();
var a5 = new Array();
var a6 = new Array();
//function
function showName(myname) {
    console.log("my name is", myname);
}
showName("Mounika");
//return function
function sum(a, b) {
    return a + b;
    console.log(sum(10, 20));
}
//const keyword
var empObj = {
    firstName: "Mounika",
    lastName: "Boinapally"
};
console.log(empObj);
empObj.firstName = 'Divya';
console.log(empObj);
// empObj ={};
// const Array = [10,20,30];
// Array [1] = 100;
// console.log(Array);
// Array = [];
