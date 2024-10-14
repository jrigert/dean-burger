"use client";

import { AuthForm } from "@/components/core/auth-form/AuthForm";
import { Input } from "@/components/core/input/Input";
import {
  GenericErrorMessage,
  PrismaErrorCodes,
  RegisterErrorCodes,
} from "@/constants/error";
import { Routes } from "@/constants/routes";
import { useAlert } from "@/hooks/useAlert";
import { isApiError } from "@/utils/error";
import { useRouter } from "next/navigation";
import { FunctionComponent, useState } from "react";

export const RegisterForm: FunctionComponent = () => {
  const [firstName, setFirstName] = useState<string>("");
  const router = useRouter();
  const { setAlert } = useAlert();

  const handleSubmit = async (values: { email: string; password: string }) => {
    try {
      const { email, password } = values;

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, firstName }),
      });

      if (response?.ok) {
        setAlert({
          type: "success",
          message: "Your account has been created! You can now log in.",
        });

        router.push(`/${Routes.Login}`);
        router.refresh();
        return;
      }

      throw await response.json();
    } catch (e) {
      let errorMessage = GenericErrorMessage;

      if (isApiError(e)) {
        if (e.errorCode === PrismaErrorCodes.UniqueConstraintViolation) {
          errorMessage = "A user already exists with that username";
        }

        if (e.errorCode === RegisterErrorCodes.MissingField) {
          errorMessage = "All fields are required";
        }
      }

      setAlert({
        message: errorMessage,
        type: "danger",
      });
    }
  };

  return (
    <AuthForm
      onSubmit={handleSubmit}
      submitButtonText="Create"
      title="Create Account"
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
