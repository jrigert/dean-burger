"use client";

import { Popover } from "@/components/core/popover/Popover";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "next/navigation";
import {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

export interface MobileSearchPanelProps {
  className?: string;
}

export const MobileSearchPanel: FunctionComponent<
  PropsWithChildren<MobileSearchPanelProps>
> = (props) => {
  const { children, className } = props;
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    setIsExpanded(false);
  }, [searchParams]);

  return (
    <Popover
      buttonIcon={faSearch}
      buttonClassName="text-xl p-2 leading-none"
      popoverId="search-panel"
      accessibilityName="search panel"
      className={className}
      isExpanded={isExpanded}
      onIsExpandedChange={setIsExpanded}
      panelClassName="w-full"
    >
      {children}
    </Popover>
  );
};
