import { RequestHandler } from "express";
import { User } from "../model/user.entity";
import { Room } from "../model/room.entity";
import { Role } from "../model/role.entity";
import { RoomType } from "../model/type.entity";
import { Repository } from 'typeorm';
import { AppDataSource  } from "../..";
import { Facility } from "../model/facility.entity";

export const countEntities: RequestHandler = async (req, res, next) => {
    const roleRepository: Repository<Role> = AppDataSource.getRepository(Role);
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    const roomRepository: Repository<Room> = AppDataSource.getRepository(Room);
    const typeRepository: Repository<RoomType> = AppDataSource.getRepository(RoomType);
    const facilityRepository: Repository<Facility> = AppDataSource.getRepository(Facility);

  
    const count1 = await roleRepository.count();
    const count2 = await userRepository.count();
    const count3 = await roomRepository.count();
    const count4 = await typeRepository.count();
    const count5 = await facilityRepository.count();
  
    // Return the count of entities
    res.send({
      role: { name: "Roles", count: count1 },
      user: { name: "Users", count: count2 },
      room: { name: "Rooms",count: count3 },
      type: { name: "Types",count: count4 },
      facilitie: { name: "Facilities",count: count5 },
    });
  }
  
  export default countEntities;