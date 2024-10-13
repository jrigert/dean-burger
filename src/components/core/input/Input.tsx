import { classNames } from "@/utils/style";
import type { ComponentProps, FunctionComponent } from "react";

export interface InputProps extends Omit<ComponentProps<"input">, "id"> {
  containerClassName?: string;
  // require id and label for accessibility
  id: string;
  label: string;
  /** defaults to true - set to false to make a label only visible to screenreaders */
  labelVisible?: boolean;
}

export const Input: FunctionComponent<InputProps> = (props) => {
  const {
    className,
    containerClassName,
    id,
    label,
    labelVisible = true,
    ...inputProps
  } = props;

  return (
    <div className={classNames("inline-flex flex-col", containerClassName)}>
      <label
        htmlFor={id}
        className={classNames("text-md", { "sr-only": !labelVisible })}
      >
        {label}
      </label>
      <input
        className={classNames(
          "rounded border-2 border-slate-500 px-3 py-2 outline-0 focus:border-primary",
          className,
        )}
        id={id}
        {...inputProps}
      />
    </div>
  );
};
