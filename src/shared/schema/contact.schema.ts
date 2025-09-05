import { z } from "zod";
import { validationMessage } from "../constants";

export const ContactSchema = z.object({
  name: z.string().nonempty(validationMessage("Nama").required()),
  city: z.string().optional(),
  message: z.string().nonempty(validationMessage("Pesan").required()),
});
