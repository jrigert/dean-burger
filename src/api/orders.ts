import prisma from "@/api/db";
import { ORDER_ID_COOKIE_KEY } from "@/constants/cookies";
import { OrderWithItems } from "@/types/order";
import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";

export const getOrderIdCookie = (
  existingCookieStore?: ReadonlyRequestCookies,
): number | null => {
  const cookieStore = existingCookieStore ?? cookies();

  const orderIdCookie = cookieStore.get(ORDER_ID_COOKIE_KEY);
  const orderId = orderIdCookie?.value
    ? Number(orderIdCookie.value)
    : undefined;

  // convert isNaN and undefined to null
  return orderId ? orderId : null;
};

export const getOrderById = async (
  id: number,
): Promise<OrderWithItems | null> =>
  prisma.orders.findUnique({ where: { id }, include: { order_items: true } });

export const getUserOrder = async (): Promise<OrderWithItems | null> => {
  const orderId = getOrderIdCookie();
  if (!orderId) {
    return null;
  }

  return getOrderById(orderId);
};
