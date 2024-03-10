import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export const api = axios.create({
    baseURL: "https://medical-app-server.vercel.app/api",
  });

  //http://localhost:8000/api

  export const createUser = async (email, token) => {
    console.log(email);
    console.log(token);
    try {
      await api.post(
        `/user/register`,
        { email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      toast.error("Something went wrong, Please try again");
      throw error;
    }
  };

  export const createBooking = async ( data ) => {
    let doctorId = data.doctorId
    let userId = data.userId
    let date = data.date
    try {
      await api.post(
        `/booking/create`,
        { doctorId, userId, date }
        
      );
    } catch (error) {
      toast.error("Something went wrong, Please try again");
      throw error;
    }
  };

  
  export const getUser = async (email) => {
    console.log(email)
    const response = await api.post('/user/getUser', { email });
    console.log(response.data)
    return response.data;
  };

  export const getTowns = async () => {
    const response = await api.post('/town/allTowns');
    return response.data;
  };

  export const getDoctors = async (townId) => {
    const response = await api.post('/doctor/allDoctorsFromTown', { townId });
    return response.data;
  };

  export const getAllBookingsForADoctor = async (doctorId) => {
    const response = await api.post('/booking/getAllBookingsFromADoctor', { doctorId });
    return response.data;
  };

  export const getAllBookingsForAUser = async (userId) => {
    const response = await api.post('/booking/getAllBookingsForAUser', { userId });
    return response.data;
  };

  export const softDeleteCar = async (id) => {
    try {
      await api.put('/booking/deleteBooking', { id });
    } catch (error) {
      toast.error("Something went wrong");
      throw error;
    }
  };