import express from 'express';
import { getAllDoctorsFromTown, getDoctorWithBooking } from '../controllers/doctorController.js';


const router = express.Router();

router.post("/allDoctorsFromTown", getAllDoctorsFromTown);
router.post("/doctorWithBooking", getDoctorWithBooking);

export {router as doctorRoute};