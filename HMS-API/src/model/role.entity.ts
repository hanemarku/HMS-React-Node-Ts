import { Column, Entity, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { User } from './user.entity';



@Entity() 
export class Role {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string

    @Column()
    description: string

    @OneToMany(() => User, user => user.role)
    users: User[]

    constructor(name: string, description: string){
        this.name = name;
        this.description = description;
    }
}