"use client";

import { addItemToOrder } from "@/api/actions/orders";
import { ProductDetails } from "@/components/product/product-details/ProductDetails";
import { Product } from "@/types/product";
import type { FunctionComponent } from "react";

export interface ProductDetailsControllerProps {
  product: Product;
}

export const ProductDetailsController: FunctionComponent<
  ProductDetailsControllerProps
> = (props) => {
  const { product } = props;

  return (
    <ProductDetails
      onAddToCart={(product, quantity) =>
        addItemToOrder({ productId: product.id, quantity })
      }
      product={product}
    />
  );
};
