import { Button } from "@/components/core/button/Button";
import type { ComponentProps, FunctionComponent } from "react";
import { useFormStatus } from "react-dom";

export type SubmitButtonProps = Omit<
  ComponentProps<typeof Button>,
  "isLoading" | "type"
>;

export const SubmitButton: FunctionComponent<SubmitButtonProps> = (props) => {
  const { pending } = useFormStatus();

  return <Button isLoading={pending} type="submit" {...props} />;
};
