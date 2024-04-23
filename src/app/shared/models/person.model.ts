export class Person {
    constructor(
        public id: number,
        public name:string,
        public lastName:string,
        public email:string,
        public cellphone: string,
        public address:string,
        public profile:string,
        public city: string,
        public department:string,
        public country:string
    ){}

    public getFullName(){
        return `${this.name} ${this.lastName}`;
    }
}
