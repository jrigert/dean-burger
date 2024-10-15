"use client";

import { CartItem } from "@/components/cart/cart-item/CartItem";
import { Container } from "@/components/core/container/Container";
import { Heading } from "@/components/core/heading/Heading";
import { NoResultsContainer } from "@/components/core/no-results-container/NoResultsContainer";
import { useCart } from "@/hooks/useCart";
import { OrderWithItems } from "@/types/order";
import { Product } from "@/types/product";
import type { FunctionComponent } from "react";

export interface CartProps {
  onDeleteOrderItem: (orderItemId: number) => void;
  onUpdateOrderItemQuantity: (orderItemId: number, quantity: number) => void;
  order: OrderWithItems | null;
  products: Product[];
  busyItemIds: number[];
}

export const Cart: FunctionComponent<CartProps> = (props) => {
  const {
    busyItemIds,
    order,
    onDeleteOrderItem,
    onUpdateOrderItemQuantity,
    products,
  } = props;

  const { productOrderItems } = useCart({
    products,
    orderItems: order?.order_items ?? [],
  });

  const hasItems = productOrderItems.length;

  if (!hasItems) {
    return (
      <NoResultsContainer title="Your Order">
        <p>Your cart is empty...</p>
      </NoResultsContainer>
    );
  }

  return (
    <Container tag="section" className="max-w-screen-md pb-10 pt-24">
      <Heading tag="h1">Your Order</Heading>

      <ul className="mt-10">
        {productOrderItems.map((product) => (
          <li key={product.id}>
            <CartItem
              isBusy={busyItemIds.includes(product.orderItemId)}
              productOrderItem={product}
              onDelete={onDeleteOrderItem}
              onUpdateQuantity={onUpdateOrderItemQuantity}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};
