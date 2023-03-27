import express from "express";

import dotenv from "dotenv";
import { DataSource } from "typeorm";
import cors from 'cors';
import bodyParser from "body-parser";
import { User } from "./src/model/user.entity";
import { Role } from "./src/model/role.entity";
import { Room } from "./src/model/room.entity";
import { RoomType } from "./src/model/type.entity";
import { Facility } from "./src/model/facility.entity";
import { Booking } from "./src/model/booking.entity";
import session from "express-session";
import cookieParser from "cookie-parser";
import passport from "passport";

// import bcrypt from 'bcryptjs';

//routes

import { roleRouter } from "./src/routes/role.router";
import userRouter from "./src/routes/user.routes";
import dashboardRouter from "./src/routes/dashboardRoutes";
import {typeRouter } from "./src/routes/roomTypes.routes";
import { facilityRouter } from "./src/routes/facility.router";
import { roomRouter } from "./src/routes/room.router";
import { bookingRouter }  from "./src/routes/booking.router";
// import { Session } from "inspector";

const app = express();
app.use(express.json());

dotenv.config();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.use(cors());


export const AppDataSource = new DataSource(
    {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB,
        entities: [User, Role, Room, RoomType, Facility, Booking],
        synchronize: true,
    }
);


const port = process.env.PORT;


AppDataSource.initialize().then(()=>{
    app.listen(port);
    console.log('Data source has been initialized');
}).catch((err) => {
    console.log("Error during data source initialization"),
    err
});


app.use(
    session({
        secret: "secretcode",
        resave: true,
        saveUninitialized: true
    })
);
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());


app.use('/', dashboardRouter);
app.use('/roles', roleRouter);
app.use('/users', userRouter);
app.use('/types', typeRouter);
app.use('/facilities', facilityRouter);
app.use('/rooms', roomRouter);
app.use('/bookings', bookingRouter);

