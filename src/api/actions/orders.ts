"use server";

import { getServerSession } from "@/api/auth";
import prisma from "@/api/db";
import { getOrderIdCookie } from "@/api/orders";
import { CookieKeys } from "@/constants/cookies";
import { Routes } from "@/constants/routes";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export interface AddItemToOrderPayload {
  orderId: number | undefined;
  productId: string;
  quantity: number;
}

export const addItemToOrder = async (payload: AddItemToOrderPayload) => {
  const { orderId: existingOrderId, productId, quantity } = payload;
  const cookieStore = cookies();
  const session = await getServerSession();
  const userId = session?.user?.id;

  let orderId = existingOrderId;

  // create a new order if we don't have one
  if (!orderId) {
    const data = userId ? { user_id: userId } : {};
    const newOrder = await prisma.orders.create({ data });
    orderId = newOrder.id;

    // if a guest, store the order in cookies
    if (!userId) {
      cookieStore.set(CookieKeys.orderId, orderId.toString());
    }
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

export const associateOrderWithUser = async () => {
  try {
    const session = await getServerSession();
    const cookieStore = cookies();
    const orderIdFromCookies = getOrderIdCookie(cookieStore);

    // we have a logged in user and an order id in cookies - link the order to the user
    if (session?.user && orderIdFromCookies) {
      const userId = session.user.id;

      cookieStore.delete(CookieKeys.orderId);

      // TODO - this will fail silently if we already have an order for this user id
      // at some point, it might make sense to check if they also have an order ID cookie
      // and give them an option and delete the other
      await prisma.orders.update({
        where: { id: orderIdFromCookies },
        data: { user_id: userId },
      });
    }
  } catch (e) {
    // log but fail silently
    console.error(e);
  }
};
