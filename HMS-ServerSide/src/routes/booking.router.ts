import { Router } from "express";
export const bookingRouter: Router = Router();
import { viewAvailableRooms, createBooking, listBooking } from "../contoller/booking.controller";




bookingRouter.get(
    '/availableRooms/:startDate/:endDate',
    viewAvailableRooms,
);

bookingRouter.post(
    '/book',
    createBooking,
);

bookingRouter.get(
    '/list',
    listBooking,
);
