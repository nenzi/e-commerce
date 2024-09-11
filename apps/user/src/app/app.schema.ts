import { z } from 'zod';

export const createUserSchema = z.object({
  first_name: z.string(),
  email: z.string().email(),
  last_name: z.string(),
  username: z.string(),
  password: z.string(),
});

export const updateUserSchema = z.object({
  first_name: z.string().optional(),
  email: z.string().email().optional(),
  last_name: z.string().optional(),
  username: z.string().optional(),
  password: z.string().optional(),
});

export type CreateUserData = z.infer<typeof createUserSchema>;
export type UpdateUserData = z.infer<typeof updateUserSchema>;
