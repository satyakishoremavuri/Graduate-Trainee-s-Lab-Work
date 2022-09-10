class class1{
    //private variables
    private firstName:string;
    private lastName:string;
    //public variables
    public setData(fName:string,lName:string):void{
        this.firstName=fName;
        this.lastName=lName;
    }
    public showData():void{
        console.log(this.firstName);
        console.log(this.lastName);
    }

}
let class1Obj=new class1();
class1Obj.setData("Mavuri","susmitha");
class1Obj.showData();

