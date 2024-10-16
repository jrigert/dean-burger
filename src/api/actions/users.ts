"use server";

import { createUser } from "@/api/users";
import { UnknownErrorCode } from "@/constants/error";
import { ApiError, extractErrorMessage } from "@/utils/error";
import { Prisma } from "@prisma/client";
import { hash } from "bcrypt";
import { z } from "zod";

const RegisterUserInputSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(1, { message: "Password is required" }),
  firstName: z
    .string({
      required_error: "First Name is required",
    })
    .min(1, { message: "First Name is required" }),
});

type RegisterUserInputErrors = z.inferFlattenedErrors<
  typeof RegisterUserInputSchema
>;

export interface RegisterUserState {
  success?: boolean;
  error?: ApiError<RegisterUserInputErrors>;
}

export const registerUser = async (
  previousState: RegisterUserState,
  formData: FormData,
): Promise<RegisterUserState> => {
  try {
    const validatedFields = RegisterUserInputSchema.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
      firstName: formData.get("first-name"),
    });

    if (!validatedFields.success) {
      return {
        success: false,
        error: {
          validationErrors: validatedFields.error.flatten(),
        },
      };
    }

    const { email, password, firstName } = validatedFields.data;

    const passwordHashed = await hash(password, 10);
    await createUser({ email, firstName, password: passwordHashed });

    return { success: true };
  } catch (e) {
    console.error("Error during registration: ", e);

    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return {
          success: false,
          error: {
            errorMessage: "User already exists",
            errorCode: e.code,
          },
        };
      }
    }

    const message = extractErrorMessage(e);
    return {
      success: false,
      error: { errorMessage: message, errorCode: UnknownErrorCode },
    };
  }
};
