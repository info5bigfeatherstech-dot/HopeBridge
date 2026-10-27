import { useQuery } from "@tanstack/react-query";
import { getHeroContent } from "../api/heroApi";
export const useHero = () => useQuery({ queryKey: ["hero"], queryFn: getHeroContent, staleTime: 5 * 60 * 1000 });
