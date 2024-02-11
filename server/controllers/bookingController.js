import asyncHandler from 'express-async-handler';
import { prisma } from '../config/prismaConfig.js';

export const createBooking = asyncHandler(async (req, res) => {
    const { doctorId, userId, date } = req.body; 

    try {
        
        const booking = await prisma.booking.create({
            data: {
                doctorId,
                userId,
                date: new Date(date), // Ensure date is correctly formatted
            },
        });

        
        res.status(200).json(booking);
    } catch (error) {
        // Handle potential errors
        res.status(500).json({ message: 'Failed to create booking', error: error.message });
    }
});

export const getAllBookingsFromADoctor = asyncHandler(async (req, res) => {

    const { doctorId } = req.body; 

    try {
        
        const bookings = await prisma.booking.findMany({
            where: {
                doctorId: doctorId
                },
        });

        
        res.status(200).json(bookings);
    } catch (error) {
        // Handle potential errors
        res.status(500).json({ message: 'Failed to create booking', error: error.message });
    }

})