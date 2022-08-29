export{}

//classes

class sample{
    //private
    private firstName:string;
    private lastName:string;

    //public
public setData():void{
    this.firstName="Mohan";
    this.lastName="krishna";
}
public showData():void{
    console.log( this.firstName);
    console.log( this.lastName );
}
}
let sampleObj=new sample();
sampleObj.setData();
sampleObj.showData();