import { classNames } from "@/utils/style";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, FunctionComponent, useMemo } from "react";

const buttonVariants = cva(
  [
    "font-teko",
    "font-semibold",
    "text-2xl",
    "transition-transform",
    "hover:scale-105",
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
      },
      color: {
        primary: [],
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        color: "primary",
        className: [
          "bg-primary",
          "text-primary-foreground",
          "hover:bg-primary/90",
        ],
      },
      {
        variant: "link",
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
  ButtonVariantProps;

export const Button: FunctionComponent<ButtonProps> = (props) => {
  const { className, variant, color, ...buttonProps } = props;

  const combinedClassNames = useMemo(() => {
    const headingClassNames = buttonVariants({ variant, color });
    return classNames(headingClassNames, className);
  }, [className, variant, color]);

  return <button className={combinedClassNames} {...buttonProps} />;
};
