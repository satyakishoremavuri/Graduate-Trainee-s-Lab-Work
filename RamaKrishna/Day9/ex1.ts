export {

}
class Sample {
    //private
    private firstName: string;
    private lastName: string;
    //public
    public setData(): void {
        // let firstName: string;
        // firstName = "Rama";
        this.lastName = "Krishna";
        this.firstName = "Rama";
    }
    public showData() {
        console.log(this.firstName);
        console.log(this.lastName);

    }

}
let sampleobj = new Sample();
sampleobj.setData();
sampleobj.showData();




