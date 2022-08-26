export { }
class sample {
    private firstName: string;
    private lastName: string;

    public constructor(fName: string, lName: string) {
        this.firstName = fName;
        this.lastName = lName;
    }

    public showData(): void {
        console.log(this.firstName);
        console.log(this.lastName);
    }
}

let sampleObj = new sample("Arjun", "Chandra");
sampleObj.showData();