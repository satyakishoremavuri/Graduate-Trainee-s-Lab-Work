export{}
interface IInter{
    getData();
    showData();
}
class Test implements IInter{
    private firstName:string;
    private lastName:string;
    getData(){
        this.firstName = "sathesh";
        this.lastName = "kumar";
    }
    showData() {
        console.log(this.firstName);
        console.log(this.lastName);
    }
}
let Obj:IInter;
Obj = new Test();
Obj.getData();
Obj.showData();
interface IEmployee{
    empNumber:number;
    empName:string;
    empSalary:number;
    empAddress:string;
}
let employee ={}as IEmployee;
let employees =[] as IEmployee[];
