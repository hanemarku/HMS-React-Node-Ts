import { RoomType } from "../model/type.entity";
import { RequestHandler } from "express";
import { AppDataSource  } from "../..";
import InternalServerError from "http-errors";
import { Repository } from 'typeorm';


  export const createRoomType: RequestHandler = async (req, res, next) => {
    try{

      const { name, description } = req.body;
      console.log(req.body);
      const type = new RoomType(name, description);
      await AppDataSource.getRepository(RoomType).save(type);
      res.json({ message: "Room Type Created" })
    }catch(error){
      return next(InternalServerError);
    }
  };

  export const getOneRoomType: RequestHandler = async (req, res, next) => {
    try{
      const roleRepository: Repository<RoomType> = AppDataSource.getRepository(RoomType);
      const type = await roleRepository.findOne({ where: { id: req.params.id } });
      if (!type) {
        res.status(404).send("Room Type not found");
      } else {
        res.send(type);
      }
    }catch(error){
      return next(InternalServerError);
    }
  }

  export const listRoomTypes: RequestHandler = async (req, res, next) => {
    try{
      const roleRepository: Repository<RoomType> = AppDataSource.getRepository(RoomType);
      const roles = await roleRepository.find();
      res.send(roles);
    }catch(error){
      return next(InternalServerError);
    }
  }
  
  export const deleteRoomType: RequestHandler = async (req, res, next) => {
    try{
      const roleRepository: Repository<RoomType> = AppDataSource.getRepository(RoomType);
      await roleRepository.delete(req.params.id);
      res.send("RoomType deleted successfully");
    }catch(error){
      return next(InternalServerError);
    }
  }


  export const updateRoomType: RequestHandler = async (req, res, next) => {
    try{
      const roleRepository: Repository<RoomType> = AppDataSource.getRepository(RoomType);
      const type = await roleRepository.findOne({ where: { id: req.params.id } });
      if (!type) {
        res.status(404).send("RoomType not found");
      } else {
        console.log(req.body.name);
        type.name = req.body.name;
        type.description = req.body.description;

        await roleRepository.save(type);
        return res.status(200).json({ message: 'RoomType updated successfully' });
      }
    }catch(error){
      return next(InternalServerError);
    }
  }

