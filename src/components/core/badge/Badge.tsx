import { classNames } from "@/utils/style";
import type { FunctionComponent, PropsWithChildren } from "react";

export interface BadgeProps {
  className?: string;
}

export const Badge: FunctionComponent<PropsWithChildren<BadgeProps>> = (
  props,
) => {
  const { children, className } = props;

  return (
    <span
      className={classNames(
        "bg-success text-success-foreground inline-flex h-5 w-5 items-center justify-center rounded-full font-teko font-bold",
        className,
      )}
    >
      {children}
    </span>
  );
};
