import { Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { Room } from './room.entity';


@Entity() 
export class RoomType {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string

    @Column()
    description: string

    @OneToMany(() => Room, (room) => room.id)
    room: Room[]

    constructor(name: string, description: string){
        this.name = name;
        this.description = description;
    }
}