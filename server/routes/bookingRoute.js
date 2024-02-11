import express from 'express';
import { createBooking, getAllBookingsFromADoctor } from '../controllers/bookingController.js';


const router = express.Router();

router.post("/create", createBooking);
router.post("/getAllBookingsFromADoctor", getAllBookingsFromADoctor)

export {router as bookingRoute};