import { z } from "zod";

// Validación del modelo de Google Business Profile (GBP)
const GBPZodSchema = z.object({
  need_to_create: z.boolean().default(true),
  business_description: z
    .string()
    .min(10, "La descripción debe tener al menos 10 caracteres"),
  business_category: z.string(),
  opening_date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "La fecha debe estar en formato YYYY-MM-DD"),
  physical_location: z.object({
    address_line_one: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    country: z.string(),
  }),
  phone_number: z
    .string()
    .regex(/^\d{10}$/, "El número de teléfono debe tener 10 dígitos"),
  contact_email: z.string().email("Correo electrónico inválido"),
  business_hours: z.record(z.string(), z.string()), // Claves: días de la semana, valores: horarios
  website_url: z.string().url("URL inválida"),
  services: z.array(z.string()),
  service_areas: z.array(z.string()),
  payment_methods: z.array(z.string()),
  business_photos: z.array(
    z.object({
      photo_url: z.string().url("URL inválida"),
      photo_description: z.string(),
    })
  ),
});

// Validación del modelo de datos principal
const ClientDataZodSchema = z.object({
  id: z.number(),
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email("Correo electrónico inválido"),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
  position: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string(),
  business_name: z.string(),
  slogan: z.string(),
  work_hours: z.record(z.string(), z.string()), // Claves: días de la semana, valores: horarios
  start_year: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "La fecha debe estar en formato YYYY-MM-DD"),
  contact: z.object({
    phone: z
      .string()
      .regex(/^\d{10}$/, "El número de teléfono debe tener 10 dígitos"),
    email: z.string().email("Correo electrónico inválido"),
  }),
  address: z.object({
    address_line_one: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
    country: z.string(),
  }),
  website: z.object({
    website_url: z.string().url("URL inválida"),
    facebook: z.string().url("URL inválida"),
    linkedin: z.string().url("URL inválida"),
    youtube: z.string().url("URL inválida"),
    instagram: z.string().url("URL inválida"),
  }),
  payment_methods: z.array(z.string()),
  service: z.object({
    service_name: z.string(),
    specialties: z.array(z.string()),
  }),
  service_area: z.array(z.string()),
  google_business_profile: GBPZodSchema.optional(),
});

// Validar datos usando el esquema Zod
const exampleData = {
  id: 1,
  first_name: "Jenna",
  last_name: "Gianneschi",
  email: "JennaGianneschiCeler@outlook.com",
  password: "123Citations$",
  position: "Realtor",
  createdAt: "2024-09-20T18:47:09.396Z",
  updatedAt: "2024-09-20T18:49:28.112Z",
  publishedAt: "2024-09-20T18:49:28.108Z",
  business_name: "Jenna Gianneschi, Realtor",
  slogan:
    "Combining deep local knowledge with expertise from Chicago’s luxury market, treating every client like family.",
  work_hours: {
    Tuesday: "Open 24 hours",
    Wednesday: "Open 24 hours",
    Thursday: "Open 24 hours",
    Friday: "Open 24 hours",
    Saturday: "Open 24 hours",
    Sunday: "Open 24 hours",
    Monday: "Open 24 hours",
  },
  start_year: "2005-10-20",
  contact: {
    phone: "3128828180",
    email: "JennaGianneschiCeler@outlook.com",
  },
  address: {
    address_line_one: "3195 S Main St #265",
    city: "Salt Lake City",
    state: "Utah",
    zip: "84115",
    country: "United States",
  },
  website: {
    website_url: "https://www.justjennarealestate.com",
    facebook: "https://www.facebook.com/JennaSellsRealEstate",
    linkedin: "https://www.linkedin.com/in/justjennarealestate/",
    youtube: "https://www.youtube.com/@justjennarealestate",
    instagram: "http://www.instagram.com/justjennarealestate",
  },
  payment_methods: [
    "American Express",
    "Cash",
    "Discover",
    "Mastercard",
    "PayPal",
    "Visa",
  ],
  service: {
    service_name: "Buying Agent Services",
    specialties: [
      "Luxury Property Buying and Sales",
      "New Construction Sales and Leasing",
      "Property Development",
      "Relocation Assistance",
      "First-time Home Buyer Services",
    ],
  },
  service_area: [
    "Utah County",
    "Salt Lake County",
    "Weber County",
    "Davis County",
    "Summit County",
    "Wasatch County",
  ],
  google_business_profile: {
    need_to_create: true,
    business_description: "A brief description of the business for the GBP",
    business_category: "Real Estate Agency",
    opening_date: "2005-10-20",
    physical_location: {
      address_line_one: "3195 S Main St #265",
      city: "Salt Lake City",
      state: "Utah",
      zip: "84115",
      country: "United States",
    },
    phone_number: "3128828180",
    contact_email: "JennaGianneschiCeler@outlook.com",
    business_hours: {
      Monday: "Open 24 hours",
      Tuesday: "Open 24 hours",
      Wednesday: "Open 24 hours",
      Thursday: "Open 24 hours",
      Friday: "Open 24 hours",
      Saturday: "Open 24 hours",
      Sunday: "Open 24 hours",
    },
    website_url: "https://www.justjennarealestate.com",
    services: [
      "Buying Agent Services",
      "Luxury Property Buying and Sales",
      "New Construction Sales and Leasing",
      "Property Development",
      "Relocation Assistance",
      "First-time Home Buyer Services",
    ],
    service_areas: [
      "Utah County",
      "Salt Lake County",
      "Weber County",
      "Davis County",
      "Summit County",
      "Wasatch County",
    ],
    payment_methods: [
      "American Express",
      "Cash",
      "Discover",
      "Mastercard",
      "PayPal",
      "Visa",
    ],
    business_photos: [
      {
        photo_url: "URL_to_photo_1",
        photo_description: "Front view of the office",
      },
      {
        photo_url: "URL_to_photo_2",
        photo_description: "Interior of the office",
      },
    ],
  },
};

// Validar datos
try {
  ClientDataZodSchema.parse(exampleData);
  console.log("Validación exitosa");
} catch (error) {
  console.error("Error en la validación", error.errors);
}
