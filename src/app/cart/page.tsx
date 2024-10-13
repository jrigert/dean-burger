import { getUserOrder } from "@/api/orders";
import { getProducts } from "@/api/products";
import { CartController } from "@/controllers/cart/CartController";
import { NextPage } from "next";

const CartPage: NextPage = async () => {
  // TODO - make sure we're caching these properly and not duplicating requests
  const order = await getUserOrder();
  const products = await getProducts();

  return <CartController order={order} products={products} />;
};

export default CartPage;
