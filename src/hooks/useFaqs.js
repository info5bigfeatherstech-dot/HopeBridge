import { useQuery } from "@tanstack/react-query";
import { getFaqs } from "../api/faqApi";
export const useFaqs = () => useQuery({ queryKey: ["faqs"], queryFn: getFaqs, staleTime: 5 * 60 * 1000 });
