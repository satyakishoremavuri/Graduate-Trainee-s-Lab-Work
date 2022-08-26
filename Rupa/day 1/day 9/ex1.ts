export{}
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
let res:boolean | number; //union type
res = false;
res = 100;

//ARRAYS
let a = [] as string[];let a1:number[]=[10,20]; //number type
let a2:string[];
a2=["rupa","devi"];

let a3:number[]=new Array(); // array using constructor

let a4=new Array();
let a5=new Array<number | boolean>();
let a6:any[]=new Array<any>();

//functions
function showName (myName : String):void{
    console.log("My Name is" , myName);
    
}
showName("rupa");
showName("devi");

function sum (a:number,b:number){
    return a+b;
}
console.log(sum(10,20));

//constants

const empObj = {
    firstName:'rupa',
    lastName:'devi'
};
console.log(empObj);

empObj.firstName="anil";
console.log(empObj);

const array = [10,20,30];
array[1]=100;
console.log(array);
