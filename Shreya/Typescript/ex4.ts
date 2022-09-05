export { }
class sample {
    private _firstName: string;


    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(v: string) {
        this._firstName = v;

    }
    private _lastName: string;

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(v: string) {
        this._lastName = v;

    }
}
let sampleObj = new sample();
sampleObj.firstName = "Shreya";
sampleObj.lastName = "Tr";

console.log(sampleObj.firstName);
console.log(sampleObj.lastName);
