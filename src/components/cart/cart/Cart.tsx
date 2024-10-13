"use client";

import { CartItem } from "@/components/cart/cart-item/CartItem";
import { Container } from "@/components/core/container/Container";
import { Heading } from "@/components/core/heading/Heading";
import { Link } from "@/components/core/link/Link";
import { useCart } from "@/hooks/useCart";
import { OrderWithItems } from "@/types/order";
import { Product } from "@/types/product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FunctionComponent } from "react";
import { faFaceFrownOpen } from "@fortawesome/free-solid-svg-icons";

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
      <Heading tag="h1">Your Order</Heading>

      {/* TODO - better messaging here, add variant in storybook */}
      {hasItems ? (
        <ul className="mt-10">
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
        <div>
          <p className="mt-4 text-2xl font-semibold">
            Your cart is empty <FontAwesomeIcon icon={faFaceFrownOpen} />
          </p>

          <div className="mt-12 text-xl">
            <Link href={"/"}>Head back to the menu</Link> to order something!
          </div>
        </div>
      )}
    </Container>
  );
};
