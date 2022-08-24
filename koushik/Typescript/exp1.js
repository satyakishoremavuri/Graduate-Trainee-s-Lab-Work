"use strict";
exports.__esModule = true;
var firstName = "Koushik";
var lastname = "Anumasa"; // inferred type
var a1 = 100;
var result = true;
/*
let anyvalue;
anyvalue = 100;
anyvalue = "koushik"
anyvalue = false;
anyvalue = {};
anyvalue.result = true;
anyvalue();
anyvalue = [];*/
var res; //union type
res = false;
res = 100;
//arrays
var a = [10, 20, "Koushik"]; //creating an array using array literal
var ab = [10, 20];
var a2;
a2 = ["Koushik", "Anumasa"];
var a3 = new Array(); //array creation using constuctor
var a4 = new Array();
var a5 = new Array();
var a6 = new Array();
function showName(myName) {
    console.log("My Name is", myName);
}
showName("Koushik");
showName("Anumasa");
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20));
var empObj = {
    firstName: 'Koushik',
    lastName: 'Anumasa'
};
console.log(empObj);
empObj.firstName = "Ravi";
console.log(empObj);
// empObj = {};
var array = [10, 20, 30];
array[1] = 100;
console.log(array);
