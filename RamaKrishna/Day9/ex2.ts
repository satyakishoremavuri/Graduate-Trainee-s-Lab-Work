
class Sample {
    private firstName: string;
    private lastName: string;
    public constructor() {
        this.firstName = "Rama";
        this.lastName = "krishna";

    }
    public showData() {
        console.log(this.firstName);
        console.log(this.lastName);
    }
}