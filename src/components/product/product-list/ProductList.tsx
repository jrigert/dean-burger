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
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredItems.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};
