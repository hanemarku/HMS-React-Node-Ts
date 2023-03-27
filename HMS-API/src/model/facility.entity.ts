import { Column, Entity, ManyToMany, PrimaryGeneratedColumn} from 'typeorm';
import { Room } from './room.entity';



@Entity() 
export class Facility {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string

    @Column()
    description: string

    @ManyToMany(() => Room, (room) => room.facilities)
    rooms: Room[];

    constructor(name: string, icon: string){
        this.name = name;
        this.description = icon;
    }
}