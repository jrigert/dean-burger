import { classNames } from "@/utils/style";
import type { ComponentProps, FunctionComponent } from "react";

export type ButtonProps = ComponentProps<"button">;

export const Button: FunctionComponent<ButtonProps> = (props) => {
  const { className, ...buttonProps } = props;

  return (
    <button
      className={classNames(
        "bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90",
        className,
      )}
      {...buttonProps}
    />
  );
};
