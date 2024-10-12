import { classNames } from "@/utils/style";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
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
          "uppercase",
          "tracking-wide",
          "transition-transform",
          "hover:scale-105",
        ],
        link: ["hover:underline"],
        icon: ["leading-[0.5rem]"],
        "icon-solid": ["leading-[0.5rem]", "rounded-full", "w-8", "h-8"],
      },
      color: {
        primary: [],
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
          "disabled:bg-slate-200",
        ],
      },
      {
        variant: ["link", "icon"],
        color: "primary",
        className: ["text-primary"],
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
  };

export const Button: FunctionComponent<ButtonProps> = (props) => {
  const { children, className, variant, color, icon, ...buttonProps } = props;

  const combinedClassNames = useMemo(() => {
    const headingClassNames = buttonVariants({ variant, color });
    return classNames(headingClassNames, className);
  }, [className, variant, color]);

  return (
    <button className={combinedClassNames} {...buttonProps}>
      {icon ? <FontAwesomeIcon icon={icon} /> : null}
      {children}
    </button>
  );
};
