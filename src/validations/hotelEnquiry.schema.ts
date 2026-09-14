import { z } from "zod";

export const hotelEnquirySchema = z.object({
  fullName: z.string().min(1, "Full Name is required").min(2, "At least 2 characters"),
  email: z.string().min(1, "Email is required").email("Valid email required"),
  numberOfPeople: z.coerce.number().int("Must be an integer").min(1, "At least 1 person required").max(100, "Max 100 people"),
  bookingDate: z
    .string()
    .min(1, "Booking Date is required")
    .refine((val) => !isNaN(Date.parse(val)), { message: "Invalid date" }),
  bookingNote: z
    .string()
    .min(5, "Booking Note required (min 5 chars)")
    .max(1000, "Booking Note too long (max 1000)"),
});

export type HotelEnquiryFormValues = z.infer<typeof hotelEnquirySchema>;
