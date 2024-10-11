import { classNames } from "@/utils/style";
import React, { type FunctionComponent, type PropsWithChildren } from "react";

export interface ContainerProps {
  /** center horizontally - defaults to true */
  center?: boolean;
  className?: string;
  /** set to true to remove the default padding on mobile */
  fullBleedMobile?: boolean;
  /** stretch to fit the screen vertically */
  fullHeight?: boolean;
  /** element tag to render as - defaults to div */
  tag?: "div" | "section";
}

export const Container: FunctionComponent<PropsWithChildren<ContainerProps>> = (
  props,
) => {
  const {
    center = true,
    children,
    className,
    fullBleedMobile,
    fullHeight,
    tag = "div",
  } = props;

  return React.createElement(
    tag,
    {
      className: classNames(
        "container",
        { "mx-auto": center, "min-h-screen": fullHeight },
        fullBleedMobile ? "sm:px-6" : "px-6",
        className,
      ),
    },
    children,
  );
};
