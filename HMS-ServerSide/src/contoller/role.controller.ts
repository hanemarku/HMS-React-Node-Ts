import { Role } from "../model/role.entity";
import { RequestHandler } from "express";
import { AppDataSource  } from "../..";
import InternalServerError from "http-errors";
import { Repository } from 'typeorm';


export const createRole: RequestHandler = async (req, res, next) => {
    try{

      const { name, description } = req.body;
      const role = new Role(name, description);
      await AppDataSource.getRepository(Role).save(role);
      res.json({ message: "Role Created" })
    }catch(error){
      return next(InternalServerError);
    }
  };

  export const getOneRole: RequestHandler = async (req, res, next) => {
    try{
      const roleRepository: Repository<Role> = AppDataSource.getRepository(Role);
      const role = await roleRepository.findOne({ where: { id: req.params.id } });
      if (!role) {
        res.status(404).send("Role not found");
      } else {
        res.send(role);
      }
    }catch(error){
      return next(InternalServerError);
    }
  }

  export const listRoles: RequestHandler = async (req, res, next) => {
    try{
      const roleRepository: Repository<Role> = AppDataSource.getRepository(Role);
      const roles = await roleRepository.find();
      res.send(roles);
    }catch(error){
      return next(InternalServerError);
    }
  }
  
  export const deleteRole: RequestHandler = async (req, res, next) => {
    try{
      const roleRepository: Repository<Role> = AppDataSource.getRepository(Role);
      await roleRepository.delete(req.params.id);
      res.send("Role deleted successfully");
    }catch(error){
      return next(InternalServerError);
    }
  }


  export const updateRole: RequestHandler = async (req, res, next) => {
    try{
      const roleRepository: Repository<Role> = AppDataSource.getRepository(Role);
      const role = await roleRepository.findOne({ where: { id: req.params.id } });
      if (!role) {
        res.status(404).send("Role not found");
      } else {
        console.log(req.body.name);
        role.name = req.body.name;
        role.description = req.body.description;

        await roleRepository.save(role);
        return res.status(200).json({ message: 'Role updated successfully' });
      }
    }catch(error){
      return next(InternalServerError);
    }
  }

    // public getrole = async (req: Request, res: Response) => {
    //   const results = await this.roleRepository.findOne(req.params.id);
    //   res.send(results);
    // };
  
    // public updaterole = async (req: Request, res: Response) => {
    //   const role = await this.roleRepository.findOne(req.params.id);
    //   this.roleRepository.merge(role, req.body);
    //   const results = await this.roleRepository.save(role);
    //   res.send(results);
    // };
  
    // public deleterole = async (req: Request, res: Response) => {
    //   const results = await this.roleRepository.delete(req.params.id);
    //   res.send(results);
    // };
