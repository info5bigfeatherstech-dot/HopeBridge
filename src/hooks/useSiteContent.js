import { useQuery } from "@tanstack/react-query";
import { getSiteContent } from "../api/siteApi";
export const useSiteContent = () => useQuery({ queryKey: ["site-content"], queryFn: getSiteContent, staleTime: 5 * 60 * 1000 });
