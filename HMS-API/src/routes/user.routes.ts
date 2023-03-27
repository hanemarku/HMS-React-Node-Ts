import { Router } from "express";
import {  signinUser, signupUser, listUsers, deleteUser, updateUser, getOneUser } from "../contoller/user.controller";
import { signUpValidator, signinValidator } from "../validators/user.validator";

const userRouter = Router();
// export const userRouter: Router = Router();

userRouter.post(
    '/',
    signUpValidator,
    signupUser
);

userRouter.post(
    '/signin',
    signinValidator,
    signinUser
);

userRouter.get(
    '/',
    listUsers
);

userRouter.delete(
    '/:id',
    deleteUser,
);

userRouter.put(
    '/:id',
    updateUser,
);

userRouter.get(
    '/:id',
    getOneUser,
);


export default userRouter;
