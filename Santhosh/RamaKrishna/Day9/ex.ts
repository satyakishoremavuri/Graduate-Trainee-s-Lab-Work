console.log("This is console")

// let firstName: string = "Rama";
// let lastName: string = "krishna";
// let a: number = 100;
// let result: boolean = true;

// let anyvalue:

// anyvalue = 100;
// anyvalue = "Ramakrishna";
// anyvalue = false;
// anyvalue = {};
// anyvalue.result = true;
// anyvalue();
// anyvalue = [];

// let res: boolean | number;

// res = false;
// res = 100;

//arrays
// let b = [] as string[];  //creating an array using array literal

// let a1: number[] = [10, 20];
// let a2: string[];
// a2 = ["rama", "krishna"];

// let a3: number[] = new Array();
// let a4 = new Array();
// let a5 = new Array<number | boolean>();
// let a6: any[] = new Array<any>();

function showName(myName: string): void {
    console.log("My Name is ", myName);
}
showName("Rama");
showName("Krishna");

function sum1(a: number, b: number) {
    return a + b;

}
console.log(sum1(10, 20));
const empobj = {
    firstName: "Rama",
    lastName: "Krishna"

};
console.log(empobj);
empobj.firstName = "RAMA";
empobj.lastName = "Rao";

console.log(empobj);
//empobj = {};

const array = [10, 20, 30];
array[1] = 100;
console.log(array);









