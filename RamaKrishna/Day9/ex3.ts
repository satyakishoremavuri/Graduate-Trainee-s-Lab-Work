export { }
class Sample {
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
let sampleobj = new Sample();
sampleobj.firstName = "Rama";
sampleobj.lastName = "Krishna";

console.log(sampleobj.firstName); //tsc -t es5 script.ts
console.log(sampleobj.lastName);


