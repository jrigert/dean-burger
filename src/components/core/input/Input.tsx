import { classNames } from "@/utils/style";
import type { ComponentProps, FunctionComponent } from "react";

export type InputProps = ComponentProps<"input">;

export const Input: FunctionComponent<InputProps> = (props) => {
  const { className, ...inputProps } = props;

  return (
    <input
      className={classNames(
        "rounded border-2 border-slate-500 px-3 py-2 outline-0 focus:border-primary",
        className,
      )}
      {...inputProps}
    />
  );
};
