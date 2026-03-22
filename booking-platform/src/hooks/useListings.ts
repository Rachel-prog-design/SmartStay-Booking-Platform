import { useQuery } from "@tanstack/react-query";
import api from "../services/api";

const fetchListings = async (placeId: string) => {
  const res = await api.get("/searchPropertyByPlaceId", {
    params: { placeId },
  });
  return res.data;
};

export const useListings = (placeId: string) => {
  return useQuery({
    queryKey: ["listings", placeId],
    queryFn: () => fetchListings(placeId),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    keepPreviousData: true,
  });
};