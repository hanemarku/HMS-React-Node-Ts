import { Column, Entity,  PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Room } from './room.entity';


export enum StatusEnum {
    SUCCESS = "SUCCESS",
    CANCELLED = "CANCELLED",
}

@Entity()
export class Booking {
    @PrimaryGeneratedColumn()
    id: string;

    @ManyToOne(() => Room, room => room.booking)
    roomId: Room

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column()
    email: string

    @Column()
    phone: string
    
    @Column()
    rezervation_date: Date

    @Column()
    check_in_date: Date

    @Column()
    check_out_date: Date

    @Column({
        type: "enum",
        enum: StatusEnum,
        default: StatusEnum.SUCCESS,
    })
    status: StatusEnum

    specialRequest: string;


    constructor(
        roomId: Room,
        firstname: string,
        lastname: string,
        email: string,
        phone: string,
        rezervation_date: Date,
        check_in_date: Date,
        check_out_date: Date,
        specialRequest: string,
        status: StatusEnum = StatusEnum.SUCCESS
      ) {
        this.roomId = roomId;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.rezervation_date = rezervation_date;
        this.check_in_date = check_in_date;
        this.check_out_date = check_out_date;
        this.specialRequest = specialRequest;
        this.status = status;
      }

    
}