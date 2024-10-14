"use client";

import { AuthForm } from "@/components/core/auth-form/AuthForm";
import { useAlert } from "@/hooks/useAlert";
import { useRouter } from "next/navigation";
import { FunctionComponent } from "react";
import { signIn } from "next-auth/react";

export const LoginForm: FunctionComponent = () => {
  const router = useRouter();
  const { setAlert } = useAlert();

  const handleSubmit = async (values: { email: string; password: string }) => {
    const { email, password } = values;

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response?.ok) {
        router.push("/");
        router.refresh();
        return;
      }

      throw new Error("Network Error");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error: unknown) {
      setAlert({ type: "danger", message: "Login failed, please try again" });
    }
  };

  return (
    <AuthForm
      onSubmit={handleSubmit}
      submitButtonText="Sign In"
      title="Sign In"
    />
  );
};
