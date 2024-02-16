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
                doctorId: doctorId,
                isActive: true
                },
        });

        
        res.status(200).json(bookings);
    } catch (error) {
        // Handle potential errors
        res.status(500).json({ message: 'Failed to create booking', error: error.message });
    }

})

export const getAllBookingsForAUser = asyncHandler(async (req, res) => {

    const { userId } = req.body; 

    try {
        
        const bookings = await prisma.booking.findMany({
            where: {
                userId: userId,
                isActive: true
                },
                include: {
                    doctor: {
                        include: {
                            town: true 
                        }
                    },
                }
        });

        
        res.status(200).json(bookings);
    } catch (error) {
        // Handle potential errors
        res.status(500).json({ message: 'Failed to create booking', error: error.message });
    }

})

export const softDeleteBooking = asyncHandler(async (req, res) => {
    const { id } = req.body;
    if (!id) {
        return res.status(400).json({ message: "No booking ID provided" });
    }

    try {
        const deletedBooking = await prisma.booking.update({
            where: { id: id },
            data: { isActive: false },
        });
        res.send({ message: "Booking deleted successfully", deletedBooking });
    } catch (err) {
        // Log the error for debugging
        console.error("Failed to delete booking:", err);

        // Check if it's a record not found error
        if (err.message.includes("Record to update not found")) {
            return res.status(404).json({ message: "Booking not found" });
        }

        // For other errors, return a 500 status code
        res.status(500).json({ message: "An error occurred while deleting the booking" });
    }
});
