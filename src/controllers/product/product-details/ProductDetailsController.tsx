"use client";

import { addItemToOrder } from "@/api/actions/orders";
import { ProductDetails } from "@/components/product/product-details/ProductDetails";
import { useAlert } from "@/hooks/useAlert";
import { Product } from "@/types/product";
import type { FunctionComponent } from "react";

export interface ProductDetailsControllerProps {
  product: Product;
}

export const ProductDetailsController: FunctionComponent<
  ProductDetailsControllerProps
> = (props) => {
  const { product } = props;
  const { setMessage } = useAlert();

  const handleAddToCart = async (product: Product, quantity: number) => {
    await addItemToOrder({
      productId: product.id,
      quantity,
    });

    setMessage(`Added ${product.name} to cart`);
  };

  return <ProductDetails onAddToCart={handleAddToCart} product={product} />;
};
