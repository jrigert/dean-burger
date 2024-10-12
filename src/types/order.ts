import {
  Prisma,
  orders as Order,
  order_items as OrderItem,
} from "@prisma/client";

export type { Order, OrderItem };

// we don't actually use this validator as a value, but this is how it's set up:
// https://www.prisma.io/docs/orm/prisma-client/type-safety/operating-against-partial-structures-of-model-types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const orderWithOrderItemsValidator =
  Prisma.validator<Prisma.ordersDefaultArgs>()({
    include: { order_items: true },
  });

export type OrderWithItems = Prisma.ordersGetPayload<
  typeof orderWithOrderItemsValidator
>;
