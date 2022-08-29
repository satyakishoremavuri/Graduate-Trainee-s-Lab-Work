// export {}
class Sample{
//private
private firstName:string;
private lastName:string;


    

//protected

//public
public setData():void{
    let firstName:string;
    firstName = "Rohini";
    this.firstName = "krishna";
    this.lastName = "mohan";

    }
    public showData(){
        console.log(this.firstName);
        console.log(this.lastName);
    }
}
    let sampleObj = new Sample();
    sampleObj.setData();
    sampleObj.showData();

