export class Person {
    constructor(
        public name:string,
        public lastName:string,
        public email:string,
        public cellphone: string,
        public address:string
    ){}

    public getFullname(){
        return `${this.name} ${this.lastName}`;
    }
}
