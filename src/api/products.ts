import {
  GetProductsResponse,
  GetProductsResponseSchema,
  Product,
} from "@/types/product";
import { findItemBySlug } from "@/utils/array";

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(
    "https://burgerhub00.github.io/data/products.json",
  );

  const data: GetProductsResponse = await response.json();
  // validate the response
  GetProductsResponseSchema.parse(data);

  return data.products;
};

export const getProductBySlug = async (
  slug: string,
): Promise<Product | undefined> => {
  const products = await getProducts();
  return findItemBySlug(products, slug);
};
