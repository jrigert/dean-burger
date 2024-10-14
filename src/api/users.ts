import prisma from "@/api/db";

export interface CreateUserPayload {
  email: string;
  password: string;
  firstName: string;
}

export const createUser = async (payload: CreateUserPayload) => {
  const { email, password, firstName: first_name } = payload;

  await prisma.users.create({ data: { email, password, first_name } });
};
