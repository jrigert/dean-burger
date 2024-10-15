import { getUserOrder } from "@/api/orders";
import { getProducts } from "@/api/products";
import { CartController } from "@/controllers/cart/CartController";
import { type Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Your Order | Dean Burger",
};

const CartPage: NextPage = async () => {
  const order = await getUserOrder();
  const products = await getProducts();

  return <CartController order={order} products={products} />;
};

export default CartPage;
