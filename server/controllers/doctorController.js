import asyncHandler from 'express-async-handler';
import { prisma } from '../config/prismaConfig.js';

// Function to get all doctors from a specific town
export const getAllDoctorsFromTown = asyncHandler(async (req, res) => {
    const { townId } = req.body;
    
  try {
      const doctors = await prisma.doctor.findMany({
        where: {
          townId: townId,
        },
        include: {
          town: true,
        },
      });
  
      
  
      if (doctors.length === 0) {
        return res.status(404).json({ message: 'No doctors found in the specified town.' });
      }
  
      res.status(200).json(doctors);
    } catch (error) {
      console.error(`Error retrieving doctors: ${error.message}`); 
      res.status(500).json({ message: 'Error retrieving doctors from the database', error: error.message });
    }
});

export const getDoctorWithBooking = asyncHandler(async (req, res) => {
    const { doctorId } = req.body;

    try {
        const doctorWithBookings = await prisma.doctor.findUnique({
            where: { id: doctorId },
            include: { bookings: true },
          });

          res.status(200).json(doctorWithBookings);
    } catch (error) {
        console.error(`Error retrieving a doctor: ${error.message}`); 
        res.status(500).json({ message: 'Error retrieving a doctor from the database', error: error.message });
    }
})