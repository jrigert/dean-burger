"use client";

import { deleteOrderItem } from "@/api/actions/orders";
import { Cart, CartProps } from "@/components/cart/cart/Cart";
import type { FunctionComponent } from "react";

export type CartControllerProps = Omit<CartProps, "onDeleteOrderItem">;

export const CartController: FunctionComponent<CartControllerProps> = (
  props,
) => {
  const handleDeleteOrderItem = async (orderItemId: number) => {
    // TODO - loading
    await deleteOrderItem({ id: orderItemId });
  };

  return <Cart {...props} onDeleteOrderItem={handleDeleteOrderItem} />;
};
