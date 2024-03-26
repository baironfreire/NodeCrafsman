import { Person } from "./person.model";

export class User extends Person {
    private password!:string;
    constructor(
        public name: string,
        public lastName: string,
        public cellPhone: string,
        public address: string,
        public username:string,
        public email:string,
    ){
        super(
            name,
            lastName,
            email,
            cellPhone,
            address
        );
    }

    public setPassword(
        newPassword:string
    ): void {
        this.password = newPassword
    }
}
