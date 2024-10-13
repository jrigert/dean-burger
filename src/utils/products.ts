import { Product } from "@/types/product";

export const filterProductsByQuery = (
  products: Product[],
  query: string | undefined,
) => {
  if (!query) {
    return products;
  }

  const queryCaseInsensitive = query.toLowerCase();

  return products.filter((product) => {
    return (
      product.name.toLowerCase().includes(queryCaseInsensitive) ||
      product.description.toLowerCase().includes(queryCaseInsensitive)
    );
  });
};
