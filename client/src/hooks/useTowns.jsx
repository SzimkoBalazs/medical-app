import React from "react";
import { useQuery } from "react-query";
import { getTowns } from "../utils/api";

const useTowns = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    "allTowns",
    getTowns,
    { refetchOnWindowFocus: false }
  );

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};

export default useTowns;