"use client";

import { associateOrderWithUser } from "@/api/actions/orders";
import { AuthForm } from "@/components/core/auth-form/AuthForm";
import { Link } from "@/components/core/link/Link";
import { Routes } from "@/constants/routes";
import { useAlert } from "@/hooks/useAlert";
import { useRouter } from "next/navigation";
import { FormEvent, FunctionComponent, useCallback, useState } from "react";
import { signIn } from "next-auth/react";

export const SignInForm: FunctionComponent = () => {
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
          setAlert({ type: "success", message: "Sign in successful!" });
          await associateOrderWithUser();

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
      footerChildren={
        <div className="mt-2">
          <p>
            Don&#39;t have an account yet?{" "}
            <Link href={`/${Routes.Register}`}>Sign up now!</Link>
          </p>
        </div>
      }
    />
  );
};
