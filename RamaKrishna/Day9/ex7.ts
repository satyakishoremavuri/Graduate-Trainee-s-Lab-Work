export { }
class Sample {

    private _firstName: string;


    public set firstName(v: string) {
        this._firstName = v;
    }
    public get firstName() {
        return this._firstName;
    }

    private _lastName: string;

    public get lastName() {
        return this._lastName;
    }

    public set lastName(v: string) {
        this._lastName = v;
    }

}
let sampleobj = new Sample();
sampleobj.firstName = "Rama";
sampleobj.lastName = "krishna";

console.log(sampleobj.firstName);
console.log(sampleobj.lastName);

