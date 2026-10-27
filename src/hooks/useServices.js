import { useQuery } from "@tanstack/react-query";
import { getServices } from "../api/servicesApi";
export const useServices = () => useQuery({ queryKey: ["services"], queryFn: getServices, staleTime: 5 * 60 * 1000 });
