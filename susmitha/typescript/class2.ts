export{}
class sample{
    private a=100;
    protected b=200;
    public showData(){
        console.log(this.a);
        console.log(this.b);
    }
   
}
class sample1 extends sample{
    c:number;
    public cal(){
        this.c=100+this.b;

    }
        public show(): void {
            this.showData();
            console.log(this.c);
        }
}
let sampleObj=new sample1();
sampleObj.cal();
sampleObj.show();