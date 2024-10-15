import { z } from "zod";

export const profileFormSchema = z.object({
  first_name: z.string().min(1, "El nombre es obligatorio"),
  last_name: z.string().min(1, "El apellido es obligatorio"),
  email: z.string().min(1, "El correo es obligatorio"),
  phone: z.string().min(1, "El teléfono es obligatorio"),
  pic_profile: z.string().min(1, "La imagen es obligatoria"),
});

export type ProfileFormSchema = z.infer<typeof profileFormSchema>;
