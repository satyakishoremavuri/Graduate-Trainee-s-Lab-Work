export{}
interface IInter{
    getData();
    showData();
}
class sample implements IInter{
    private firstName:string;
    private lastName:string;
    getData(){
        this.firstName="sai";
        this.lastName="susmitha";
    }
    showData() {
        console.log(this.firstName);
        console.log(this.lastName);
    }
}
let obj:IInter;
obj=new sample();
obj.getData();
obj.showData();



