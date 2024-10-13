import { classNames } from "@/utils/style";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cva, VariantProps } from "class-variance-authority";
import { type ComponentProps, type FunctionComponent, useMemo } from "react";

const buttonVariants = cva(
  [
    "font-teko",
    "font-semibold",
    "text-2xl",
    "transition-transform",
    "hover:enabled:scale-105",
    "relative",
  ],
  {
    variants: {
      variant: {
        solid: [
          "rounded-xl",
          "px-8",
          "py-2",
          "text-2xl",
          "font-semibold",
          "tracking-wide",
          "transition-transform",
          "hover:enabled:scale-105",
        ],
        link: ["hover:underline"],
        icon: ["leading-[0.5rem]"],
        "icon-solid": ["leading-[0.5rem]", "rounded-full", "w-8", "h-8"],
      },
      color: {
        primary: [],
        danger: [],
      },
    },
    compoundVariants: [
      {
        variant: ["solid", "icon-solid"],
        color: "primary",
        className: [
          "bg-primary",
          "text-primary-foreground",
          "hover:enabled:bg-primary/90",
        ],
      },
      {
        variant: ["solid", "icon-solid"],
        color: "danger",
        className: [
          "bg-danger",
          "text-danger-foreground",
          "hover:enabled:bg-danger/90",
        ],
      },
      {
        variant: ["link", "icon"],
        color: "primary",
        className: ["text-primary"],
      },
      {
        variant: ["link", "icon"],
        color: "danger",
        className: ["text-danger"],
      },
    ],
    defaultVariants: {
      variant: "solid",
      color: "primary",
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

export type ButtonProps = Omit<ComponentProps<"button">, "color"> &
  ButtonVariantProps & {
    icon?: IconDefinition;
    isLoading?: boolean;
  };

export const Button: FunctionComponent<ButtonProps> = (props) => {
  const {
    children,
    className,
    disabled,
    isLoading,
    variant,
    color,
    icon,
    ...buttonProps
  } = props;

  const combinedClassNames = useMemo(() => {
    const headingClassNames = buttonVariants({ variant, color });
    return classNames(headingClassNames, className);
  }, [className, variant, color]);

  return (
    <button
      className={combinedClassNames}
      disabled={disabled || isLoading}
      {...buttonProps}
    >
      {icon ? <FontAwesomeIcon icon={icon} /> : null}
      {isLoading ? (
        <FontAwesomeIcon
          icon={faSpinner}
          className="absolute bottom-0 left-0 right-0 top-0 m-auto animate-spin"
        />
      ) : null}
      <span className={classNames({ invisible: isLoading })}>{children}</span>
    </button>
  );
};
