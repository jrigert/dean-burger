"use server";

import prisma from "@/api/db";
import { getOrderIdCookie } from "@/api/orders";
import { ORDER_ID_COOKIE_KEY } from "@/constants/cookies";
import { Routes } from "@/constants/routes";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export interface AddItemToOrderPayload {
  productId: string;
  quantity: number;
}

export const addItemToOrder = async (payload: AddItemToOrderPayload) => {
  const { productId, quantity } = payload;
  const cookieStore = cookies();

  // get orderId from cookie if it exists
  let orderId = getOrderIdCookie(cookieStore);

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

  redirect("/");
};

export interface UpdateOrderItemPayload {
  id: number;
  quantity: number;
}

export const updateOrderItem = async (payload: UpdateOrderItemPayload) => {
  const { id, ...updates } = payload;
  await prisma.order_items.update({ where: { id }, data: { ...updates } });

  revalidatePath(`/${Routes.Cart}`);
};

export interface DeleteOrderItemPayload {
  id: number;
}

export const deleteOrderItem = async (payload: DeleteOrderItemPayload) => {
  const { id } = payload;
  await prisma.order_items.delete({ where: { id } });

  revalidatePath(`/${Routes.Cart}`);
};
