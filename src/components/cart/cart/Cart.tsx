import { CartItem } from "@/components/cart/cart-item/CartItem";
import { useCart } from "@/hooks/useCart";
import { OrderItem } from "@/types/cart";
import { Product } from "@/types/product";
import type { FunctionComponent } from "react";

export interface CartProps {
  orderItems: OrderItem[];
  products: Product[];
}

export const Cart: FunctionComponent<CartProps> = (props) => {
  const { orderItems, products } = props;

  const { productOrderItems } = useCart({ products, orderItems });

  return (
    <section>
      <ul>
        {productOrderItems.map((product) => (
          <li key={product.id}>
            <CartItem product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
};
