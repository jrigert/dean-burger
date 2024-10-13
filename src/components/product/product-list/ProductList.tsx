import { Heading } from "@/components/core/heading/Heading";
import { ProductItem } from "@/components/product/product-item/ProductItem";
import { Product } from "@/types/product";
import { filterProductsByQuery } from "@/utils/products";
import { FunctionComponent, useMemo } from "react";

export interface ProductListProps {
  filterQuery?: string;
  products: Product[];
}

export const ProductList: FunctionComponent<ProductListProps> = (props) => {
  const { filterQuery, products } = props;

  const filteredItems = useMemo(
    () => filterProductsByQuery(products, filterQuery),
    [filterQuery, products],
  );

  return (
    <div className="mx-auto flex justify-center">
      {filteredItems.length ? (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ul>
      ) : (
        <div className="pt-12">
          <Heading tag="h2">No menu items found!</Heading>
          <p className="mt-6">Try a new search or clear your current search.</p>
        </div>
      )}
    </div>
  );
};
