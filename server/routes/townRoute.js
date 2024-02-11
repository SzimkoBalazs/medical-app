import express from 'express';
import { getAllTowns } from '../controllers/townController.js';


const router = express.Router();

router.post("/allTowns", getAllTowns);

export {router as townRoute};