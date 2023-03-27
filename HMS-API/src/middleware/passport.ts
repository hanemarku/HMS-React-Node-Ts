// import { RequestHandler } from "express";
// import { User } from "../model/user.entity";
// import { AppDataSource } from "../..";
// import createHttpError from "http-errors";
// import InternalServerError from "http-errors";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import { validationResult } from "express-validator/src/validation-result";




// export const signupUser: RequestHandler = async (req, res, next) => {
//     const errors = validationResult(req);
//     if(!errors.isEmpty()) {
//         return res
//         .status(400)
//         .json({ errors: errors.array() });
//     }

//     const{ firstname, lastname, email, password } = req.body;

//     console.log("firstname: " + firstname);
//     try{
//         const existingUser = await AppDataSource.getRepository(User) .createQueryBuilder("user") .where("user.email = :email", { email: email }).getOne();
//         console.log(existingUser);
//         if(existingUser){
//             return next(createHttpError(422, "Email already exists"))
//         } 

//         const hashedPassword = await bcrypt.hash(password, 8);

//         const user = new User(firstname, lastname, email, hashedPassword);
        
//         await AppDataSource.getRepository(User).save(user);
//         res.json({ message: "User Created" })
//     }catch(error){
//         return next(InternalServerError);
//     }
// };

// export const signinUser: RequestHandler = async (req, res, next) => {

//     const errors = validationResult(req);
//     if(!errors.isEmpty()) {
//         return res
//         .status(400)
//         .json({ errors: errors.array() });
//     }
    
//     const { email, password } = req.body;

//     const user = await AppDataSource.getRepository(User).findOneBy({
//         email: email,
//     });


//     try{
//         if(!user) return next(createHttpError(404, "User not found"));
//         const isValidPassword = await bcrypt.compare(password, user.password);
    
//         if(!isValidPassword) return next(createHttpError(401, "Not Valid Password"));

//         const token = jwt.sign({
//             name: user.firstname + user.lastname,
//             email: user.email,
//             user: user.id
//         }, "hotel",
//         {
//             expiresIn: "7d",
//         });

//         res.cookie("jwt", token);


//         res.json({name: user.firstname, token});

//     }catch(error){
//         return next(InternalServerError);
//     }



// };
