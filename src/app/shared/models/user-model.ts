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
        public profile:string,
        public city: string,
        public department:string,
        public country:string,
        public role:string
    ){
        super(
            name,
            lastName,
            email,
            cellPhone,
            address,
            profile,
            city,
            department,
            country
        );
    }

    public setPassword(
        newPassword:string
    ): void {
        this.password = newPassword
    }
}
