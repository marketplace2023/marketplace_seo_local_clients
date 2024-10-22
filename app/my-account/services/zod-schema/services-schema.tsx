import { z } from "zod";

export const serviceFormSchema = z.object({
  id: z.string().uuid(),
  clientId: z.string().uuid(),
  services_offered: z.string().min(1, "Services offered is required"),
  services_area: z.string().min(1, "Service area is required"),
  payment_methods: z.string().min(1, "Payment methods is required"),
});

export type ServiceFormSchema = z.infer<typeof serviceFormSchema>;
