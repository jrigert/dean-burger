"use client";

import { Button } from "@/components/core/button/Button";
import type { ComponentProps, FunctionComponent } from "react";
import { signOut } from "next-auth/react";

export type SubmitButtonProps = Omit<
  ComponentProps<typeof Button>,
  "type" | "onClick"
>;

export const LogoutButton: FunctionComponent<SubmitButtonProps> = (props) => {
  return <Button type="button" onClick={() => signOut()} {...props} />;
};
