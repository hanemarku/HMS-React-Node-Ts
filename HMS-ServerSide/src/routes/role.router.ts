import { Router } from "express";
import { createValidator } from "../validators/task.validator";
export const roleRouter: Router = Router();
import { createRole, listRoles, deleteRole, getOneRole, updateRole } from "../contoller/role.controller";


roleRouter.post(
    '/',
    createValidator ,
    createRole,
);

roleRouter.get(
    '/',
    listRoles,
);

roleRouter.delete(
    '/:id',
    deleteRole,
);

roleRouter.get(
    '/:id',
    getOneRole,
)

roleRouter.put(
    '/:id',
    updateRole,
)
