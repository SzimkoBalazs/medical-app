import asyncHandler from 'express-async-handler';
import { prisma } from '../config/prismaConfig.js';

export const getAllTowns = asyncHandler(async (req, res) => {
    const towns = await prisma.town.findMany({
      
    });
    res.send(towns);
  });