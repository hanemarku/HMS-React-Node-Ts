import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './role.entity';


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column()
    email: string

    @Column()
    password: string

    // @ManyToOne

    @ManyToOne(() => Role, role => role.users)
    role: Role 

    // @Column('boolean', {default: false})
    // isUserVerified: boolean

    // @Column()
    // verifyToken: string

    constructor(firstname: string, lastname: string, email: string, password: string, role: Role ){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}