import React from "react";
import { useQuery } from "react-query";
import { getAllBookingsForADoctor } from "../utils/api";


const useBookingsForADoctor = (doctorId) => {
  const { data, isLoading, isError, refetch } = useQuery(
    ["allBookingsForADoctor", doctorId],

   () => getAllBookingsForADoctor(doctorId),
    { refetchOnWindowFocus: false }
  );

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};

export default useBookingsForADoctor;