export{ }
/*
Data Types:-
1.Primitive types
number,string,boolean,null,undefined,symbol,any
2.Reference types
array,object,class,interface


Variable declaration:-
<variable_name>: <data_type>=<initial_value>;*/
let firstName:string="Shreya";
let lastName="Tr";  //inferred type
let ab:number=100;
let result:boolean=true;

/*let anyValue;
anyValue=100;
anyValue="Shreya";
anyValue="True";
anyValue={};
anyValue.result=true;
anyValue();
anyValue=[];*/

let res: boolean| number;
res= false;
res=100;


//arrays
let a= [10,20,"Shreya"] ;  //creating an array using array literal
let a1:number[]=[10,20,30];
let a2:string[];
a2=["Shreya","Divya"];
let a3:number[]=new Array(); //Array creation using constructor
let a4=new Array();
let a5=new Array<number|boolean>();
let a6:any[]=new Array<any>();
function showName(myName:string):void {
    console.log("My Name is",myName);
    
}
showName("Shreya");
showName("Divya");
function sum (a:number, b:number) {
return a+b;
}
console.log(sum(10,20));
const empObj= {
    firstName:"Shreya",
    lastName: "Tr"
};
console.log(empObj);
empObj.firstName="Divya";
console.log(empObj);

const array=[10,20,30];
array[1]=100;
console.log(array);

























