import express from 'express';
import { createBooking, getAllBookingsForAUser, getAllBookingsFromADoctor, softDeleteBooking } from '../controllers/bookingController.js';


const router = express.Router();

router.post("/create", createBooking);
router.post("/getAllBookingsFromADoctor", getAllBookingsFromADoctor)
router.post("/getAllBookingsForAUser", getAllBookingsForAUser)
router.put("/deleteBooking", softDeleteBooking);

export {router as bookingRoute};