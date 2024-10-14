"use client";

import { AuthForm } from "@/components/core/auth-form/AuthForm";
import { useAlert } from "@/hooks/useAlert";
import { useRouter } from "next/navigation";
import { FormEvent, FunctionComponent, useCallback, useState } from "react";
import { signIn } from "next-auth/react";

export const LoginForm: FunctionComponent = () => {
  const router = useRouter();
  const { setAlert } = useAlert();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = useCallback(
    async (event: FormEvent, values: { email: string; password: string }) => {
      try {
        event.preventDefault();
        setIsLoading(true);

        const { email, password } = values;

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
      } finally {
        setIsLoading(false);
      }
    },
    [router, setAlert],
  );

  return (
    <AuthForm
      isLoading={isLoading}
      useServerAction={false}
      onSubmit={handleSubmit}
      submitButtonText="Sign In"
      title="Sign In"
    />
  );
};
