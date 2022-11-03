export class Qualification
{
    name!:string;
    university!:string;
    yearOfPass!:string;
    percentage!:string;

}
export class Student
{
    studNumber!:number;
    studName!:string;
    studdob!:string;
    qualification:Qualification[]=[]
}