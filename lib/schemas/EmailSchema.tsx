
import { z } from "zod";
import errorMessages from "../constants/ErrorMessage";

export const emailSchema = z
  .string()
  .min(1, { message: errorMessages.email.required }) 
  .email({ message: errorMessages.email.invalid })   
  .transform((val) => val.trim().toLowerCase());  