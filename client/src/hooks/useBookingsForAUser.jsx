import React from "react";
import { useQuery } from "react-query";
import { getAllBookingsForAUser } from "../utils/api";


const useBookingsForAUser = (userId) => {
  const { data, isLoading, isError, refetch } = useQuery(
    ["allBookingsForAUser", userId],

   () => getAllBookingsForAUser(userId),
    { refetchOnWindowFocus: false }
  );

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};

export default useBookingsForAUser;