// export {}
class Sample {
    //private
    private firstName: string;
    private lastName: string;

    //protected

    //public
    public setData(): void {
        let firstName: string;
        firstName = "Hira";
        this.firstName = "Mounika";
        this.lastName = "Boinapally";

    }
    public showData() {
        console.log(this.firstName);
        console.log(this.lastName);
    }
}
let sampleObj = new Sample();
sampleObj.setData();
sampleObj.showData();