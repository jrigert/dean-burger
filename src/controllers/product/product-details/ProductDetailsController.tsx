"use client";

import { addItemToOrder } from "@/api/actions/orders";
import { ProductDetails } from "@/components/product/product-details/ProductDetails";
import { useAlert } from "@/hooks/useAlert";
import { Product } from "@/types/product";
import { FunctionComponent, useState } from "react";

export interface ProductDetailsControllerProps {
  product: Product;
}

export const ProductDetailsController: FunctionComponent<
  ProductDetailsControllerProps
> = (props) => {
  const { product } = props;
  const { setAlert } = useAlert();
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async (product: Product, quantity: number) => {
    setIsLoading(true);

    await addItemToOrder({
      productId: product.id,
      quantity,
    });

    setIsLoading(false);
    setAlert({ message: `Added ${product.name} to cart`, type: "success" });
  };

  return (
    <ProductDetails
      isLoading={isLoading}
      onAddToCart={handleAddToCart}
      product={product}
    />
  );
};
