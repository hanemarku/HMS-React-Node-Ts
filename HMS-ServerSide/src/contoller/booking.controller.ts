import { Request, Response } from 'express';
import moment from 'moment';
import { AppDataSource  } from "../..";
import { Repository } from 'typeorm';
import { Room } from '../model/room.entity';
import { Booking } from '../model/booking.entity';
import InternalServerError from "http-errors";
import { RequestHandler } from "express";


export const viewAvailableRooms = async (req: Request, res: Response) => {
  try {
    console.log(req.params);

    const startDate = moment(req.params.startDate, 'YYYY-MM-DD').format('YYYY-MM-DD');
    const endDate = moment(req.params.endDate, 'YYYY-MM-DD').format('YYYY-MM-DD');
    console.log(startDate);
    console.log(endDate);

    const roomRepository: Repository<Room> = AppDataSource.getRepository(Room);
    const availableRooms = await roomRepository
      .createQueryBuilder('room')
      .leftJoinAndSelect('room.type', 'RoomType')
      .leftJoinAndSelect('room.facilities', 'Facility')
      .where('room.availability = :availability', { availability: true })
      .andWhere(`
        NOT EXISTS (
          SELECT *
          FROM Booking b
          WHERE b.roomIdId = room.id
            AND DATE_FORMAT(b.check_out_date, '%Y-%m-%d') >= :startDate
            AND DATE_FORMAT(b.check_in_date, '%Y-%m-%d') <= :endDate
        )
      `, { startDate, endDate })
      .getMany();

    console.log(availableRooms);
    res.send(availableRooms);
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: 'An error occurred while retrieving available rooms' });
  }
};


export const createBooking: RequestHandler = async (req, res, next) => {
    try{
      const {roomId, firstname, lastname, email, phone,  check_in_date, check_out_date, status, specialRequest} = req.body;
      console.log(req.body);
      const booking = new Booking(roomId, firstname, lastname, email, phone, new Date(), check_in_date, check_out_date, status, specialRequest);
      console.log("Booking " + booking);
      await AppDataSource.getRepository(Booking).save(booking);
      res.json({ message: "You booked successfully" })
    }catch(error){
      return next(InternalServerError);
    }
  };


  export const listBooking: RequestHandler = async (req, res, next) => {
    try{
      const bookingRepository: Repository<Booking> = AppDataSource.getRepository(Booking);
      const bookings = await bookingRepository.find({
      relations: ["roomId"],
    });
      res.send(bookings);
    }catch(error){
      return next(InternalServerError);
    }
  }