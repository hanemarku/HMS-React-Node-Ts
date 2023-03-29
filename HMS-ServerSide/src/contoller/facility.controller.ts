import { Facility } from "../model/facility.entity";
import { RequestHandler } from "express";
import { AppDataSource  } from "../..";
import InternalServerError from "http-errors";
import { Repository } from 'typeorm';


export const createFacility: RequestHandler = async (req, res, next) => {
    try{

      const { name, description } = req.body;
      const falcility = new Facility(name, description);
      await AppDataSource.getRepository(Facility).save(falcility);
      res.json({ message: "Facility Created" })
    }catch(error){
      return next(InternalServerError);
    }
  };

  export const getOneFacility: RequestHandler = async (req, res, next) => {
    try{
      const falcilityRepository: Repository<Facility> = AppDataSource.getRepository(Facility);
      const falcility = await falcilityRepository.findOne({ where: { id: req.params.id } });
      if (!falcility) {
        res.status(404).send("Facility not found");
      } else {
        res.send(falcility);
      }
    }catch(error){
      return next(InternalServerError);
    }
  }

  export const listFacilities: RequestHandler = async (req, res, next) => {
    try{
      const falcilityRepository: Repository<Facility> = AppDataSource.getRepository(Facility);
      const facilities = await falcilityRepository.find();
      res.send(facilities);
    }catch(error){
      return next(InternalServerError);
    }
  }
  
  export const deleteFacility: RequestHandler = async (req, res, next) => {
    try{
      const falcilityRepository: Repository<Facility> = AppDataSource.getRepository(Facility);
      await falcilityRepository.delete(req.params.id);
      res.send("Facility deleted successfully");
    }catch(error){
      return next(InternalServerError);
    }
  }


  export const updateFacility: RequestHandler = async (req, res, next) => {
    try{
      const falcilityRepository: Repository<Facility> = AppDataSource.getRepository(Facility);
      const falcility = await falcilityRepository.findOne({ where: { id: req.params.id } });
      if (!falcility) {
        res.status(404).send("Facility not found");
      } else {
        console.log(req.body.name);
        falcility.name = req.body.name;
        falcility.description = req.body.description;

        await falcilityRepository.save(falcility);
        return res.status(200).json({ message: 'Facility updated successfully' });
      }
    }catch(error){
      return next(InternalServerError);
    }
  }

