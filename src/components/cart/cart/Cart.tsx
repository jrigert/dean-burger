"use client";

import { CartItem } from "@/components/cart/cart-item/CartItem";
import { Container } from "@/components/core/container/Container";
import { Heading } from "@/components/core/heading/Heading";
import { useCart } from "@/hooks/useCart";
import { OrderWithItems } from "@/types/order";
import { Product } from "@/types/product";
import type { FunctionComponent } from "react";

export interface CartProps {
  onDeleteOrderItem: (orderItemId: number) => void;
  order: OrderWithItems | null;
  products: Product[];
}

export const Cart: FunctionComponent<CartProps> = (props) => {
  const { order, onDeleteOrderItem, products } = props;

  const { productOrderItems } = useCart({
    products,
    orderItems: order?.order_items ?? [],
  });

  const hasItems = productOrderItems.length;

  return (
    <Container tag="section" className="max-w-screen-md pb-10 pt-24">
      <Heading tag="h1" className="mb-10">
        Your Order
      </Heading>

      {/* TODO - better messaging here, add variant in storybook */}
      {hasItems ? (
        <ul>
          {productOrderItems.map((product) => (
            <li key={product.id}>
              <CartItem
                productOrderItem={product}
                onDelete={onDeleteOrderItem}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No items...</p>
      )}
    </Container>
  );
};
