import { classNames } from "@/utils/style";
import type { FunctionComponent, PropsWithChildren } from "react";

export interface BadgeProps {
  "aria-hidden"?: boolean;
  className?: string;
}

export const Badge: FunctionComponent<PropsWithChildren<BadgeProps>> = (
  props,
) => {
  const { "aria-hidden": ariaHidden, children, className } = props;

  return (
    <span
      className={classNames(
        "inline-flex h-5 w-5 items-center justify-center rounded-full bg-success font-teko font-bold text-success-foreground",
        className,
      )}
      aria-hidden={ariaHidden}
    >
      {children}
    </span>
  );
};
