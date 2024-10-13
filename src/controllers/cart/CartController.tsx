import { Cart, CartProps } from "@/components/cart/cart/Cart";
import type { FunctionComponent } from "react";

export type CartControllerProps = CartProps;

export const CartController: FunctionComponent<CartControllerProps> = (
  props,
) => {
  return <Cart {...props} />;
};
