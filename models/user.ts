import { z } from "zod";

export const UserSchema = z.object({
  id: z.uuidv4(),
  username: z
    .string("Username must be a string")
    .min(3, "Username must be at least 3 characters")
    .max(50, "Username must be less than 50 characters"),
  email: z
    .email("Email must be a valid email")
    .max(255, "Email must be less than 255 characters"),
  password_hash: z
    .string("Password must be a string")
    .min(8, "Password must be at least 8 characters")
    .max(255, "Password must be less than 255 characters"),
  created_at: z.date("Created at must be a date"),
  updated_at: z.date("Updated at must be a date"),
});

export type UserType = z.infer<typeof UserSchema>;

export const CreateUserSchema = UserSchema.omit({
  id: true,
  created_at: true,
  updated_at: true,
});

export type CreateUserType = z.infer<typeof CreateUserSchema>;

export const LoginUserSchema = UserSchema.pick({
  username: true,
  email: true,
  password_hash: true,
});
