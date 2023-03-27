import { Router } from "express";
import { createValidator } from "../validators/task.validator";
export const facilityRouter: Router = Router();
import { createFacility, listFacilities, deleteFacility, getOneFacility, updateFacility } from "../contoller/facility.controller";


facilityRouter.post(
    '/',
    createValidator ,
    createFacility,
);

facilityRouter.get(
    '/',
    listFacilities,
);

facilityRouter.delete(
    '/:id',
    deleteFacility,
);

facilityRouter.get(
    '/:id',
    getOneFacility,
)

facilityRouter.put(
    '/:id',
    updateFacility,
)
