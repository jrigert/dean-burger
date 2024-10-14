import { getServerSession } from "@/api/auth";
import prisma from "@/api/db";
import { CookieKeys } from "@/constants/cookies";
import { OrderWithItems } from "@/types/order";
import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { cookies } from "next/headers";
import { cache } from "react";

export const getOrderIdCookie = (
  existingCookieStore?: ReadonlyRequestCookies,
): number | null => {
  const cookieStore = existingCookieStore ?? cookies();

  const orderIdCookie = cookieStore.get(CookieKeys.orderId);
  const orderId = orderIdCookie?.value
    ? Number(orderIdCookie.value)
    : undefined;

  // convert isNaN and undefined to null
  return orderId ? orderId : null;
};

export const getOrderByUniqueId = async (
  query: { id: number } | { user_id: number },
): Promise<OrderWithItems | null> =>
  prisma.orders.findUnique({
    where: query,
    include: { order_items: { orderBy: { id: "asc" } } },
  });

const getUserOrder_uncached = async (): Promise<OrderWithItems | null> => {
  const cookieStore = cookies();
  const orderIdFromCookies = getOrderIdCookie(cookieStore);
  const session = await getServerSession();

  if (session?.user) {
    const userId = session.user.id;
    const userOrder = await getOrderByUniqueId({ user_id: userId });

    // user has an order - return it
    if (userOrder) {
      return userOrder;
    }
  }

  if (orderIdFromCookies) {
    return getOrderByUniqueId({ id: orderIdFromCookies });
  }

  return null;
};

export const getUserOrder = cache(getUserOrder_uncached);
