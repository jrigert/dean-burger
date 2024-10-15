"use client";

import { Button } from "@/components/core/button/Button";
import { useAlert } from "@/hooks/useAlert";
import { useRouter } from "next/navigation";
import type { ComponentProps, FunctionComponent } from "react";
import { signOut } from "next-auth/react";

export type SubmitButtonProps = Omit<
  ComponentProps<typeof Button>,
  "type" | "onClick"
>;

export const SignOutButton: FunctionComponent<SubmitButtonProps> = (props) => {
  const { setAlert } = useAlert();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    setAlert({ type: "success", message: "You have been signed out" });

    router.push("/");
    router.refresh();
    return;
  };

  return (
    <Button type="button" onClick={handleSignOut} id="sign-out" {...props} />
  );
};
