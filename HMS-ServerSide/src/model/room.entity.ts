import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, ManyToMany, JoinTable} from 'typeorm';
import { RoomType } from './type.entity';
import { Facility } from './facility.entity';
import { Booking } from './booking.entity';

@Entity() 
export class Room {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    number: string

    @Column()
    availability: boolean

    @Column()
    reserved: boolean

    @Column()
    price: number

    @Column()
    size: number

    @Column()
    createdDate: Date

    @Column()
    updatedDate: Date

    @Column()
    main_image: string

    @ManyToOne(() => RoomType, (type) => type.id)
    type: RoomType

    @ManyToOne(() => Booking, booking => booking.roomId)
    booking: Booking[] 

    @ManyToMany(() => Facility)
    @JoinTable()
    facilities: Facility[];


}