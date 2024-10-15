import { Product } from "@/types/product";
import { findItemBySlug } from "@/utils/array";

interface GetProductsResponse {
  products: Product[];
}

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(
      "https://burgerhub00.github.io/data/products.json",
    );

    const data: GetProductsResponse = await response.json();
    return data.products;
  } catch (e) {
    console.error(e);

    // probably would want to return some sort of error message
    return [];
  }
};

export const getProductBySlug = async (
  slug: string,
): Promise<Product | undefined> => {
  const products = await getProducts();
  return findItemBySlug(products, slug);
};
