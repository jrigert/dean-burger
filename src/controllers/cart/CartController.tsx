"use client";

import { deleteOrderItem, updateOrderItem } from "@/api/actions/orders";
import { Cart } from "@/components/cart/cart/Cart";
import { OrderWithItems } from "@/types/order";
import { Product } from "@/types/product";
import { FunctionComponent, useState } from "react";

export interface CartControllerProps {
  order: OrderWithItems | null;
  products: Product[];
}

export const CartController: FunctionComponent<CartControllerProps> = (
  props,
) => {
  const { order, products } = props;
  const [busyItemIds, setBusyItemIds] = useState<number[]>([]);

  const addBusyItem = (id: number) => {
    if (!busyItemIds.includes(id)) {
      setBusyItemIds([...busyItemIds, id]);
    }
  };

  const removeBusyItem = (id: number) => {
    setBusyItemIds(busyItemIds.filter((item) => item !== id));
  };

  const handleDeleteOrderItem = async (orderItemId: number) => {
    addBusyItem(orderItemId);
    await deleteOrderItem({ id: orderItemId });
    removeBusyItem(orderItemId);
  };

  const handleUpdateOrderItemQuantity = async (
    orderItemId: number,
    quantity: number,
  ) => {
    addBusyItem(orderItemId);
    await updateOrderItem({ id: orderItemId, quantity });
    removeBusyItem(orderItemId);
  };

  return (
    <Cart
      products={products}
      order={order}
      busyItemIds={busyItemIds}
      onDeleteOrderItem={handleDeleteOrderItem}
      onUpdateOrderItemQuantity={handleUpdateOrderItemQuantity}
    />
  );
};
