import { classNames } from "@/utils/style";
import NextLink from "next/link";
import { ComponentProps, FunctionComponent } from "react";

export type LinkProps = ComponentProps<typeof NextLink>;

export const Link: FunctionComponent<LinkProps> = (props) => {
  const { className, ...linkProps } = props;

  return (
    <NextLink
      className={classNames(
        "font-semibold text-primary hover:underline",
        className,
      )}
      {...linkProps}
    />
  );
};
