import { Router } from "express";
import { createValidator } from "../validators/task.validator";
export const typeRouter: Router = Router();
import { createRoomType, updateRoomType, deleteRoomType, getOneRoomType, listRoomTypes } from "../contoller/type.controller";


typeRouter.post(
    '/',
    createValidator ,
    createRoomType,
);

typeRouter.get(
    '/',
    listRoomTypes,
);

typeRouter.delete(
    '/:id',
    deleteRoomType,
);

typeRouter.get(
    '/:id',
    getOneRoomType,
)

typeRouter.put(
    '/:id',
    updateRoomType,
)
