import { OrderItem } from "@/types/cart";
import { Product } from "@/types/product";
import { findItemById, isDefined } from "@/utils/array";
import { useMemo } from "react";

export interface Cart {
  productOrderItems: ProductOrderItem[];
}

export interface ProductOrderItem extends Product {
  quantity: number;
}

export interface UseCartProps {
  orderItems: OrderItem[];
  products: Product[];
}

export const useCart = (props: UseCartProps): Cart => {
  const { orderItems, products } = props;

  return useMemo(() => {
    const productOrderItemsUnfiltered: (ProductOrderItem | undefined)[] =
      orderItems.map((orderItem) => {
        const product = findItemById(products, orderItem.productId);
        if (!product) {
          return;
        }

        return {
          ...product,
          quantity: orderItem.quantity,
        };
      });

    const productOrderItems = productOrderItemsUnfiltered.filter(isDefined);

    return {
      productOrderItems,
    };
  }, [products, orderItems]);
};
