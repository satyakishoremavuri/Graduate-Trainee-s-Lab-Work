export { }
interface IInter {
    getData();
    showData();

}
class Test implements IInter {
    private firstName: string;
    private lastName: string;

    getData() {
        this.firstName = "Rama";
        this.lastName = "Krishna";
    }
    showData() {
        console.log(this.firstName);
        console.log(this.lastName);
    }

}
let obj: IInter;
obj = new Test();
obj.getData();
obj.showData();

interface IEmployee {

    empNumber: number;
    empName: string;
    empSalary: number;
    empAddress?: string;
}
let employee = {} as IEmployee;
// employee.empNumber
// employee.empName
let employees = [] as IEmployee[];