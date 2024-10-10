import { ProductItem } from "@/components/product/product-item/ProductItem";
import { Product } from "@/types/product";
import type { FunctionComponent } from "react";

export interface ProductListProps {
  products: Product[];
}

export const ProductList: FunctionComponent<ProductListProps> = (props) => {
  const { products } = props;

  return (
    <div className="mx-auto flex justify-center">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};
