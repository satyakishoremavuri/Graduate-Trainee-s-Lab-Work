export { }

class Sample {
    private firstName: string;
    private lastName: string;

//public
    public setData(): void {
        this.firstName = "Koushik";
        this.lastName ="Anumasa";

    }
    public showData(): void {
        console.log(this.firstName);
        console.log(this.lastName);
    }

}

let sampleObj = new Sample();
sampleObj.setData();
sampleObj.showData();