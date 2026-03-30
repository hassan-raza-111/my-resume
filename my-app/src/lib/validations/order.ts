import { z } from "zod";

export const orderItemSchema = z.object({
  productId: z.string().min(1, "Product is required"),
  quantity: z.number().int().positive("Quantity must be at least 1"),
  unitPrice: z.number().positive("Price must be positive"),
  discount: z.number().min(0).default(0),
  batchNumber: z.string().optional(),
});

export const createOrderSchema = z.object({
  type: z.enum(["PRIMARY", "SECONDARY", "FIELD"]),
  outletId: z.string().optional(),
  distributorId: z.string().optional(),
  notes: z.string().optional(),
  items: z.array(orderItemSchema).min(1, "At least one item is required"),
});

export type CreateOrderInput = z.infer<typeof createOrderSchema>;
