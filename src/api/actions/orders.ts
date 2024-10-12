"use server";

import prisma from "@/api/db";
import { ORDER_ID_COOKIE_KEY } from "@/constants/cookies";
import { cookies } from "next/headers";

export interface AddItemToOrderPayload {
  productId: string;
  quantity: number;
}

export const addItemToOrder = async (payload: AddItemToOrderPayload) => {
  const { productId, quantity } = payload;
  const cookieStore = cookies();

  const orderIdCookie = cookieStore.get(ORDER_ID_COOKIE_KEY);
  let orderId = orderIdCookie?.value ? Number(orderIdCookie.value) : undefined;

  // create a new order if we don't have one
  if (!orderId) {
    const newOrder = await prisma.orders.create({ data: {} });
    orderId = newOrder.id;

    cookieStore.set(ORDER_ID_COOKIE_KEY, orderId.toString());
  }

  const existingOrderItem = await prisma.order_items.findUnique({
    where: {
      order_id_product_id: { order_id: orderId, product_id: productId },
    },
  });

  if (existingOrderItem) {
    const { id, quantity: originalQuantity } = existingOrderItem;
    const newQuantity = quantity + originalQuantity;

    await prisma.order_items.update({
      where: {
        id,
      },
      data: {
        quantity: newQuantity,
      },
    });
  } else {
    await prisma.order_items.create({
      data: {
        order_id: orderId,
        product_id: productId,
        quantity,
      },
    });
  }
};
