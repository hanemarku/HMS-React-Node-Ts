import { RequestHandler } from "express";
import { AppDataSource  } from "../..";
import { User } from "../model/user.entity";
import createHttpError from "http-errors";
import InternalServerError from "http-errors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator/src/validation-result";
import { Repository } from 'typeorm';
import { Role } from "../model/role.entity";



export const signupUser: RequestHandler = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res
        .status(400)
        .json({ errors: errors.array() });
    }

    const{ firstname, lastname, email, password, roleId } = req.body;

    console.log("firstname: " + firstname);
    try{
        const existingUser = await AppDataSource.getRepository(User).createQueryBuilder("user").where("user.email = :email", { email: email }).getOne();
        console.log(existingUser);
        if(existingUser){
            return next(createHttpError(422, "Email already exists"))
        } 

        const hashedPassword = await bcrypt.hash(password, 8);

        const roleRepository: Repository<Role> = AppDataSource.getRepository(Role);
        const role = await roleRepository.findOne({ where: { id: roleId } });

        if (!role) {
            throw new Error(`Could not find role with ID ${roleId}`);
        }
          
        const user = new User(firstname, lastname, email, hashedPassword, role);
        
        await AppDataSource.getRepository(User).save(user);
        res.json({ message: "User Created" })
    }catch(error){
        return next(InternalServerError);
    }
};

export const signinUser: RequestHandler = async (req, res, next) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res
        .status(400)
        .json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await AppDataSource.getRepository(User).findOneBy({
        email: email,
    });


    try{
        if(!user){
           throw new Error( "User not found"); 
        } 

        const isValidPassword = await bcrypt.compare(password, user.password);
    
        if(!isValidPassword){
           throw new Error("Not Valid Password"); 
        } 

        const accessToken = jwt.sign({
            name: user.firstname + user.lastname,
            email: user.email,
            user: user.id
        }, "hotel",
        {
            expiresIn: "7d",
        });

        res.cookie("jwt", accessToken);
        res.json({accessToken});

    }catch(error){
        return next(InternalServerError);
    }
};

export const listUsers: RequestHandler = async (req, res, next) => {
    try{
      const userRepository: Repository<User> = AppDataSource.getRepository(User);
      const users = await userRepository
      .find({ relations: ['role'] });
      res.send(users);
    }catch(error){
      return next(InternalServerError);
    }
  }

export const deleteUser: RequestHandler = async (req, res, next) => {
    try{
      const userRepository: Repository<User> = AppDataSource.getRepository(User);
      await userRepository.delete(req.params.id);
      res.send("User deleted successfully");
    }catch(error){
      return next(InternalServerError);
    }
}

export const updateUser: RequestHandler = async (req, res, next) => {
    try{
      const userRepository: Repository<User> = AppDataSource.getRepository(User);
      const user = await userRepository.findOne({ where: { id: req.params.id } });
      console.log(user);
      if (!user) {
        res.status(404).send("User not found");
      } else {
        console.log(req.body);
        console.log(req.body.firstname);
        
        const roleRepository: Repository<Role> = AppDataSource.getRepository(Role);
        const role = await roleRepository.findOne({ where: { id: req.body.roleId } });
        if (!role) {
            throw new Error(`Could not find role with ID ${req.body.roleId}`);
        }
            user.firstname = req.body.firstname;
            user.lastname = req.body.lastname;
            user.email = req.body.email;
            user.password = req.body.password;
            user.role = role;  
            await userRepository.save(user);
            return res.status(200).json({ message: 'User updated successfully' });
      }
    }catch(error){
      return next(InternalServerError);
    }
}


export const getOneUser: RequestHandler = async (req, res, next) => {
    try{
      const userId = req.params.id;
      const userRepository: Repository<User> = AppDataSource.getRepository(User);
      const user = await userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.role', 'role')
      .where('user.id = :userId', { userId })
      .getOne();
  
      if (!user) {
        res.status(404).send("User not found");
      } else {
        res.send(user);
      }
    }catch(error){
      return next(InternalServerError);
    }
  }



// export const sendVerificationMail: RequestHandler = async (req, res, next) => {
//     const { email }: { email: string} = req.body;

//     try{
//         const user = await AppDataSource.getRepository(User).findOneBy({
//             email: email,
//         });

//         console.log(user);

//         if(!user) return next(createHttpError(404, "Email not valid"));

//         if(user.isUserVerified) return next(createHttpError(406, "User already verified"));

//         console.log(user.isUserVerified);
//         const encryptedToken = await bcrypt.hash(user.id.toString(), 8);
    
//         console.log(encryptedToken);
//         // const jwtToken = jwt.sign({
//         //     userId: user.id
//         // }, "hotel", {
//         //     expiresIn: "60m",
//         // });

//         const testAccount = await nodemailer.createTestAccount();

//         const transporter = nodemailer.createTransport({
//             host: "smtp.ethereal.email",
//             port: 587,
//             secure: false, // true for 465, false for other ports
//             auth: {
//               user: testAccount.user, // generated ethereal user
//               pass: testAccount.pass, // generated ethereal password
//             },
//           });

//           const info = await transporter.sendMail({
//             from: '"Fred Foo 👻" <anshuraj@dosomecoding.com>', // sender address
//             to: `${email}`, // list of receivers
//             subject: "For Email Verification", // Subject line
//             // text: "Hello world?", // plain text body
//             html: `Your Verification Link <a href="${process.env.FRONTEND_URL!}/email-verify/${jwtToken}">Link</a>`, // html body
//           });
//         res.json({ 
//             message: `Preview url : %s ${ nodemailer.getTestMessageUrl(info)}`,
//         });


//         user.verifyToken = encryptedToken;

//     }catch(error){
//         return next(InternalServerError);
//     }

// };


// export const verifyUserMail: RequestHandler = async (req, res, next) => {
//     const {token}:{token: string} = req.body;

//     try{
//         const decodedToken = jwt.verify(token, "hotel");
//         const user = await AppDataSource.getRepository(User).findOneBy({
//             id: decodedToken.
//         });


//     }catch(error){
//         return next(createHttpError(401, "Token Invalid"));
//     }
// }
