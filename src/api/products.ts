import { Product } from "@/types/product";

interface GetProductsResponse {
  products: Product[];
}

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(
    "https://burgerhub00.github.io/data/products.json",
  );

  // TODO - error handling (check for response.ok)
  const data: GetProductsResponse = await response.json();
  return data.products;
};

export const getProductBySlug = async (
  slug: string,
): Promise<Product | undefined> => {
  const products = await getProducts();
  return products.find((product) => product.slug === slug);
};
