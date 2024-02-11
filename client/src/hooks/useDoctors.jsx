import React from "react";
import { useQuery } from "react-query";
import { getDoctors } from "../utils/api";

const useDoctors = (townId) => {
    const { data, isLoading, isError, refetch } = useQuery(
        ["allDoctorsFromTown", townId], // Use townId as part of the query key
        () => getDoctors(townId), // Pass townId to the getDoctors function
        { 
          enabled: !!townId, // Only run the query if townId is truthy
          refetchOnWindowFocus: false 
        }
      );

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};

export default useDoctors;