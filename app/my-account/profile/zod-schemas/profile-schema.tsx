import { z } from "zod";

export const profileFormSchema = z.object({
  id: z.string().uuid(),
  first_name: z.string().min(1, "El nombre es obligatorio"),
  last_name: z.string().min(1, "El apellido es obligatorio"),
  email: z.string().min(1, "El correo es obligatorio"),
  phone: z.string().min(1, "El teléfono es obligatorio"),
  pic_profile: z.string().min(1, "La imagen es obligatoria"),
  password: z.string().min(1, "La contraseña es obligatoria"),
});

export type ProfileFormSchema = z.infer<typeof profileFormSchema>;
