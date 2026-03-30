import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  phone: z.string().optional(),
  role: z.enum([
    "ADMIN",
    "REGIONAL_MANAGER",
    "AREA_SALES_MANAGER",
    "MEDICAL_REP",
    "DISTRIBUTOR",
    "PHARMA_CLIENT",
  ]),
  territoryId: z.string().optional(),
  managerId: z.string().optional(),
});

export const updateUserSchema = createUserSchema
  .partial()
  .omit({ password: true });

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
