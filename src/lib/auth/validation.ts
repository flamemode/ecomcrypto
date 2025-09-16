import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(1, "Full name is required").max(255, "Full name too long"),
  email: z.string().email("Invalid email address").max(255, "Email too long"),
  password: z.string().min(8, "Password must be at least 8 characters").max(255, "Password too long"),
});

export const signInSchema = z.object({
  email: z.string().email("Invalid email address").max(255, "Email too long"),
  password: z.string().min(1, "Password is required").max(255, "Password too long"),
});

export const guestSessionSchema = z.object({
  sessionToken: z.string().uuid("Invalid session token"),
});

export type SignUpInput = z.infer<typeof signUpSchema>;
export type SignInInput = z.infer<typeof signInSchema>;
export type GuestSessionInput = z.infer<typeof guestSessionSchema>;
