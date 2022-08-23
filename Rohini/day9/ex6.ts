export {}
class BaseClass{
    private a:number;
    public  constructor(x:number){
        this.a = x;

    }
    public getvalue(){
        return this.a;
    }
}
class DerivedClass extends BaseClass{
    private b:number;
    public constructor (y:number){
        super(100);
this.b = y;
    }
    public showData(){
        console.log(super.getvalue());
        console.log(this.b);
    }
}
let derivedobj = new DerivedClass(200);
derivedobj.showData();

