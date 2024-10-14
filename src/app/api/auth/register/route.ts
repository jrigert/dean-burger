import { createUser } from "@/api/users";
import { RegisterErrorCodes, UnknownErrorCode } from "@/constants/error";
import { ApiError, extractErrorMessage } from "@/utils/error";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export async function POST(
  request: Request,
): Promise<NextResponse<{ message: string } | ApiError>> {
  try {
    const { email, password, firstName } = await request.json();

    // TODO - would be better to validate with Zod
    if (!(email && password && firstName)) {
      return NextResponse.json(
        {
          errorMessage: "Missing required field",
          errorCode: RegisterErrorCodes.MissingField,
        },
        { status: 500 },
      );
    }

    const passwordHashed = await hash(password, 10);
    await createUser({ email, password: passwordHashed, firstName });

    return NextResponse.json({ message: "success" });
  } catch (e: unknown) {
    console.error("Error during registration: ", e);

    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return NextResponse.json(
          {
            errorMessage: "User already exists",
            errorCode: e.code,
          },
          { status: 500 },
        );
      }
    }

    const message = extractErrorMessage(e);
    return NextResponse.json(
      { errorMessage: message, errorCode: UnknownErrorCode },
      { status: 500 },
    );
  }
}
