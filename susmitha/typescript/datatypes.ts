/*
Data Types :-
1. Primitive Types
        number, string, boolean, null, undefined, symbol, any
2. Reference Types
        array, object, class, interface
Variable Declaration :-
    <variable_name> : <data_type> = <initial_value>;
*/


let firstName:string="susmitha";
let middleName:string="sai";
let lastName="Mavuri";//inferred type
let r:boolean=true;
let a:number=100;
console.log(r);


//union type
let result:boolean|number;
result=true;
result=50;
//arrays
let b=[10,20,30,"sai"];
let a1:number[]=[10,20,30];
let a2:string[];
a2=["sai"];

//Array using constructor
let a3:number[]=new Array();
let a4= new Array();
let a5=new Array<number|boolean>();
a5=[10,20,true];

//function1

function showName(myName: string): void {
    console.log("My Name is ", myName);
}
showName("susmitha");

//2
function sum(a:number,b:number){
    return a+b;

}
console.log(sum(10,90));



const empObj = {
    firstName: "max",
    lastName: "tony"
};
console.log(empObj);
empObj.firstName = "ann";
console.log(empObj);





