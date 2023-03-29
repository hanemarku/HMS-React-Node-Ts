import { Room } from "../model/room.entity";
import { RequestHandler } from "express";
import { AppDataSource  } from "../..";
import InternalServerError from "http-errors";
import { Repository } from 'typeorm';
import { Facility } from "../model/facility.entity";
import { RoomType } from "../model/type.entity";
import { In } from 'typeorm';


export const createRoom: RequestHandler = async (req, res, next) => {
    const { number, availability, price, size, main_image, type_id, reserved } = req.body;
    const selectedFacilityIds = req.body.facilities || [];
    console.log(req.body);
    try{
        // console.log(selectedFacilityIds);
        const facilityRepository: Repository<Facility> = AppDataSource.getRepository(Facility);
        const typeRepository: Repository<RoomType> = AppDataSource.getRepository(RoomType);
  
        const room = new Room();
        room.number = number;
        room.availability = availability;
        room.reserved = reserved;
        room.price = price;
        room.size = size;
        room.main_image = main_image;
        room.createdDate = new Date();
        room.updatedDate = new Date();
      
        const roomType = type_id ?  await typeRepository.findOne({ where: { id: type_id } }) : null;
        
        if (!roomType) {
            throw new Error(`Could not find room with ID ${type_id}`);
        }

        room.type = roomType;       

        const selectedFacilities = await facilityRepository.findBy({ id: In(selectedFacilityIds) });
        room.facilities = selectedFacilities;
        console.log(room);
        await AppDataSource.getRepository(Room).save(room);
        // res.json(room);
        res.json({ message: "Room Created" })
    }catch(error){
      return next(InternalServerError);
    }
  };

  export const getOneRoom: RequestHandler = async (req, res, next) => {
    try{
      const roomRepository: Repository<Room> = AppDataSource.getRepository(Room);
      const { id } = req.params;
      const room = await roomRepository
      .createQueryBuilder('room')
      .leftJoinAndSelect('room.type', 'type')
      .leftJoinAndSelect('room.facilities', 'facilities')
      .where('room.id = :id', { id })
      .getOne();
  
      if (!room) {
        res.status(404).send("Role not found");
      } else {
        res.send(room);
      }
    }catch(error){
      return next(InternalServerError);
    }
  }

  export const listRooms: RequestHandler = async (req, res, next) => {
    try{
      const roomRepository: Repository<Room> = AppDataSource.getRepository(Room);
      const rooms = await roomRepository.find({ relations: ['type', 'facilities'] });
      res.send(rooms);
    }catch(error){
      return next(InternalServerError);
    }
  }
  
  export const deleteRoom: RequestHandler = async (req, res, next) => {
    try{
      const roomRepository: Repository<Room> = AppDataSource.getRepository(Room);
      await roomRepository.delete(req.params.id);
      res.send("Room deleted successfully");
    }catch(error){
      return next(InternalServerError);
    }
  }


  export const updateRoom: RequestHandler = async (req, res, next) => {
    try{
        const { number, availability, price, size, main_image, type_id, reserved } = req.body;
        console.log(number + " " + availability + " " + price + " " + size + " " + main_image + " " + type_id);
        const roomRepository: Repository<Room> = AppDataSource.getRepository(Room);
        const room = await roomRepository.findOne({ where: { id: req.params.id } });
        console.log(req.body);
        if (!room) {
            res.status(404).send("Room not found");
          } else {
            const selectedFacilityIds = req.body.facilities || [];
            console.log(selectedFacilityIds);
            const facilityRepository: Repository<Facility> = AppDataSource.getRepository(Facility);
            const typeRepository: Repository<RoomType> = AppDataSource.getRepository(RoomType);
            room.number = number;
            room.availability = availability;
            room.price = price;
            room.size = size;
            room.main_image = main_image;
            room.reserved = reserved;
            room.updatedDate = new Date();

        
            const roomType = type_id ?  await typeRepository.findOne({ where: { id: type_id } }) : null;
            
            if (!roomType) {
                throw new Error(`Could not find room type with ID ${type_id}`);
            }

            room.type = roomType;       

            const selectedFacilities = await facilityRepository.findBy({ id: In(selectedFacilityIds) });
            room.facilities = selectedFacilities;
            console.log(room);
            await AppDataSource.getRepository(Room).save(room);
            // res.json(room);
            res.json({ message: "Room updated successfully" })
        }
    }catch(error){
      return next(InternalServerError);
    }
  };


