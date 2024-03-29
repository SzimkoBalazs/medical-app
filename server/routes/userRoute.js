import express from 'express';
import { createUser, getAllBookings, cancelBooking, getUser } from '../controllers/userController.js';
import jwtCheck from '../config/auth0Config.js';

const router = express.Router();

router.post("/register", jwtCheck, createUser);
/*
router.post("/bookVisit/:id", jwtCheck, bookVisit);
*/
router.post("/allBookings", jwtCheck, getAllBookings);
router.post("/removeBooking/:id", jwtCheck, cancelBooking);
router.post("/getUser", getUser);

export {router as userRoute};
