import { z } from 'zod';

export const PaginationSchema = z.object({
  page: z.coerce.number().int().min(0).optional().default(0),
  size: z.coerce.number().int().min(1).optional().default(10),
});

export type PaginationPayload = z.infer<typeof PaginationSchema>;

export type PaginationStats = {
  totalPages: number;
  totalItems: number;
};
