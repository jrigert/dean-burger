"use client";

import { Button } from "@/components/core/button/Button";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useOnEscapeKey } from "@/hooks/useOnEscapeKey";
import { classNames } from "@/utils/style";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";

export interface PopoverProps {
  buttonClassName?: string;
  buttonIcon: IconDefinition;
  className?: string;
  isExpanded?: boolean;
  focusOnOpenId?: string;
  onIsExpandedChange?: (isExpanded: boolean) => void;
  panelClassName?: string;
  popoverId: string;
  accessibilityName: string;
}

const isElementWithFocusFunction = (
  element: Element | null | undefined,
): element is Element & { focus: () => void } =>
  Boolean(element && "focus" in element && typeof element.focus === "function");

export const Popover: FunctionComponent<PropsWithChildren<PopoverProps>> = (
  props,
) => {
  const {
    accessibilityName,
    buttonClassName,
    buttonIcon,
    children,
    className,
    focusOnOpenId,
    panelClassName,
    popoverId,
    isExpanded: isExpandedProp,
    onIsExpandedChange,
  } = props;
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const popoverRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (isExpanded && focusOnOpenId) {
      const element = popoverRef.current?.querySelector(`#${focusOnOpenId}`);

      if (isElementWithFocusFunction(element)) {
        element.focus();
      }
    }
  }, [focusOnOpenId, isExpanded]);

  useOnClickOutside(popoverRef, () => {
    setIsExpanded(false);
  });

  useOnEscapeKey(
    () => {
      setIsExpanded(false);
    },
    {
      disable: !isExpanded,
    },
  );

  return (
    <span className={classNames("leading-none", className)} ref={popoverRef}>
      <Button
        variant="icon"
        icon={buttonIcon}
        aria-label={`${isExpanded ? "Close" : "Open"} ${accessibilityName}`}
        onClick={toggleExpanded}
        aria-controls={popoverId}
        aria-expanded={isExpanded}
        className={buttonClassName}
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
