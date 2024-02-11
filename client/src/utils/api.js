import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export const api = axios.create({
    baseURL: "http://localhost:8000/api",
  });

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

  
  export const getUser = async (email, token) => {
    const response = await api.post('/user/getUser', { email }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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