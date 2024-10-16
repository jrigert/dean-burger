import { z } from "zod";

const ProductSchema = z.object({
  calorie: z.number(),
  description: z.string(),
  id: z.string(),
  image: z.string(),
  name: z.string(),
  price: z.number(),
  slug: z.string(),
});

export const GetProductsResponseSchema = z.object({
  products: z.array(ProductSchema),
});

export type Product = z.infer<typeof ProductSchema>;
export type GetProductsResponse = z.infer<typeof GetProductsResponseSchema>;
