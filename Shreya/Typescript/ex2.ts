export{ }

class Sample {
    //private
 private  firstName:string;
 private lastName:string;



    //public
    public setData(fName:string, lName: string):void {
      //  let firstName:string;
        //firstName="Shreya";
        this.firstName=fName;
        this.lastName=lName;

 }


 public showData() {
console.log(this.firstName);
console.log(this.lastName);

 }

}
let sampleObj=new Sample();
sampleObj.setData("Shreya","Tr");
sampleObj.showData();

