import prisma from "@/api/db";

export const getOrder = async (id: number) =>
  prisma.orders.findFirst({ where: { id } });
