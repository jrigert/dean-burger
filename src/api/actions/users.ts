"use server";

import { createUser } from "@/api/users";
import { RegisterErrorCodes, UnknownErrorCode } from "@/constants/error";
import { ApiError, extractErrorMessage } from "@/utils/error";
import { Prisma } from "@prisma/client";
import { hash } from "bcrypt";

export interface RegisterUserState {
  success?: boolean;
  error?: ApiError;
}

const isValidString = (value: FormDataEntryValue | null): value is string => {
  return Boolean(value && typeof value === "string");
};

// TODO - would be better to validate with Zod
const parseInputs = (formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const firstName = formData.get("first-name");

  if (
    isValidString(email) &&
    isValidString(password) &&
    isValidString(firstName)
  ) {
    return {
      email,
      password,
      firstName,
    };
  }

  return null;
};

export const registerUser = async (
  previousState: RegisterUserState,
  formData: FormData,
): Promise<RegisterUserState> => {
  try {
    const data = parseInputs(formData);

    if (!data) {
      return {
        success: false,
        error: {
          errorMessage: "Missing required field",
          errorCode: RegisterErrorCodes.MissingField,
        },
      };
    }

    const { email, password, firstName } = data;

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
