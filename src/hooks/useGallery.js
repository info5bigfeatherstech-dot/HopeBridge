import { useQuery } from "@tanstack/react-query";
import { getGallery } from "../api/galleryApi";
export const useGallery = () => useQuery({ queryKey: ["gallery"], queryFn: getGallery, staleTime: 5 * 60 * 1000 });
