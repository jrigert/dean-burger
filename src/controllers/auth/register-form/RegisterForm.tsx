"use client";

import { registerUser } from "@/api/actions/users";
import { AuthForm } from "@/components/core/auth-form/AuthForm";
import { Input } from "@/components/core/input/Input";
import { Link } from "@/components/core/link/Link";
import {
  GenericErrorMessage,
  PrismaErrorCodes,
  RegisterErrorCodes,
} from "@/constants/error";
import { Routes } from "@/constants/routes";
import { useAlert } from "@/hooks/useAlert";
import { useRouter } from "next/navigation";
import { FunctionComponent, useEffect, useState } from "react";
import { useFormState } from "react-dom";

export const RegisterForm: FunctionComponent = () => {
  const { setAlert } = useAlert();
  const [firstName, setFirstName] = useState<string>("");
  const [registerUserState, registerUserAction] = useFormState(
    registerUser,
    {},
  );
  const router = useRouter();

  useEffect(() => {
    if (registerUserState.success) {
      setAlert({
        type: "success",
        message: "Your account has been created! You can now log in.",
      });

      router.push(`/${Routes.Login}`);
    } else if (registerUserState.error) {
      let errorMessage = GenericErrorMessage;

      const { errorCode } = registerUserState.error;

      if (errorCode === PrismaErrorCodes.UniqueConstraintViolation) {
        errorMessage = "A user already exists with that username";
      }

      if (errorCode === RegisterErrorCodes.MissingField) {
        errorMessage = "All fields are required";
      }

      setAlert({
        message: errorMessage,
        type: "danger",
      });
    }
  }, [registerUserState, setAlert]);

  return (
    <AuthForm
      useServerAction
      action={registerUserAction}
      submitButtonText="Create"
      title="Create Account"
      footerChildren={
        <div className="mt-2">
          <p>
            Already have an account?{" "}
            <Link href={`/${Routes.Login}`}>Sign in now!</Link>
          </p>
        </div>
      }
    >
      <Input
        required
        value={firstName}
        id="first-name"
        label="First Name"
        name="first-name"
        onChange={(e) => setFirstName(e.target.value)}
      />
    </AuthForm>
  );
};
