import { z } from 'zod';

export const LoginSchema = z
  .object({
    email: z.string().email().describe('example@mail.com'),
    password: z.string().describe('********'),
  })
  .describe('Login Schema');

export type LoginData = z.infer<typeof LoginSchema>;

export const SetPasswordSchema = z.object({
  password: z.string().min(6).describe('********'),
  email: z.string().optional().describe('example@mail.com'),
});

export type SetPasswordData = z.infer<typeof SetPasswordSchema>;

export const ChangePasswordSchema = z.object({
  newPassword: z.string().min(6).describe('********'),
  currentPassword: z.string().min(6).describe('********'),
});

export type ChangePasswordData = z.infer<typeof ChangePasswordSchema>;

export const ForgotPasswordSchema = z.object({
  email: z.string().email(),
});

export type ForgotPasswordPayload = z.infer<typeof ForgotPasswordSchema>;

export const ResetPasswordSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
  code: z.string().min(1),
});

export type ResetPasswordPayload = z.infer<typeof ResetPasswordSchema>;
