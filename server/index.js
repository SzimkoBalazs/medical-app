import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoute } from './routes/userRoute.js';
import { townRoute } from './routes/townRoute.js';
import { doctorRoute } from './routes/doctorRoute.js';
import { bookingRoute } from './routes/bookingRoute.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;



app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api/user', userRoute)
app.use('/api/town', townRoute)
app.use('/api/doctor', doctorRoute)
app.use('/api/booking', bookingRoute)


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})

