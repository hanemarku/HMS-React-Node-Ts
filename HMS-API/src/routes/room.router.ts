import { Router } from "express";
export const roomRouter: Router = Router();
import { createRoom, listRooms, getOneRoom, deleteRoom, updateRoom } from "../contoller/room.controller";


roomRouter.post(
    '/',
    createRoom,
);

roomRouter.get(
    '/',
    listRooms,
);

roomRouter.delete(
    '/:id',
    deleteRoom,
);

roomRouter.get(
    '/:id',
    getOneRoom,
)

roomRouter.put(
    '/:id',
    updateRoom,
)
