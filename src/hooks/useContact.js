import { useMutation } from "@tanstack/react-query";
import { sendContactMessage } from "../api/contactApi";

export const useContact = () => useMutation({ mutationFn: sendContactMessage });
