"use client";

import { Button } from "@/components/core/button/Button";
import { classNames } from "@/utils/style";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

export interface PopoverProps {
  buttonIcon: IconDefinition;
  className?: string;
  isExpanded?: boolean;
  onIsExpandedChange?: (isExpanded: boolean) => void;
  panelClassName?: string;
  popoverId: string;
  accessibilityName: string;
}

export const Popover: FunctionComponent<PropsWithChildren<PopoverProps>> = (
  props,
) => {
  const {
    buttonIcon,
    children,
    className,
    accessibilityName,
    panelClassName,
    popoverId,
    isExpanded: isExpandedProp,
    onIsExpandedChange,
  } = props;
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleExpanded = () => {
    const newValue = !isExpanded;
    setIsExpanded(newValue);
    onIsExpandedChange?.(newValue);
  };

  useEffect(() => {
    if (isExpandedProp !== undefined) {
      setIsExpanded(isExpandedProp);
    }
  }, [isExpandedProp]);

  return (
    <span className={classNames("leading-none", className)}>
      <Button
        variant="icon"
        icon={buttonIcon}
        aria-label={`${isExpanded ? "Close" : "Open"} ${accessibilityName}`}
        onClick={toggleExpanded}
        aria-controls={popoverId}
        aria-expanded={isExpanded}
      />
      {isExpanded ? (
        <div
          className={classNames(
            "bg-container fixed right-0 top-14 z-10 min-w-[250px] border-t border-t-slate-300 p-6 shadow-xl dark:border-t-gray-700",
            panelClassName,
          )}
          id={popoverId}
        >
          {children}
        </div>
      ) : null}
    </span>
  );
};
