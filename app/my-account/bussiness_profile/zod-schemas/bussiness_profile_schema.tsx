import { z } from "zod";

const timeFormatRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

const dayScheduleSchema = z
  .object({
    day: z.enum([
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ]),
    opening: z.string().regex(timeFormatRegex, {
      message: "The time format must be HH:MM",
    }),
    closing: z.string().regex(timeFormatRegex, {
      message: "The time format must be HH:MM",
    }),
  })
  .refine((data) => data.opening < data.closing, {
    message: "Opening time must be before closing time",
    path: ["closing"],
  });

export const businessProfileFormSchema = z.object({
  id: z.string().uuid(),
  business_name: z.string().min(1, "Business name is required"),
  description: z.string().min(1, "Description is required"),
  short_description: z.string().min(1, "Short description is required"),
  slogan: z.string().min(1, "Slogan is required"),
  category: z.string().min(1, "Category is required"),
  street: z.string().min(1, "Street is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  postalCode: z.string().min(1, "Postal code is required"),
  country: z.string().min(1, "Country is required"),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().min(1, "Email is required"),
  website: z.string().min(1, "Website is required"),
  schedule: z.array(dayScheduleSchema).min(1, {
    message: "There must be at least one day with opening and closing times",
  }),
});

export type BusinessProfileFormSchema = z.infer<
  typeof businessProfileFormSchema
>;
