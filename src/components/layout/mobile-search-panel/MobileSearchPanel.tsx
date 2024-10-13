"use client";

import { Button } from "@/components/core/button/Button";
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

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    setIsExpanded(false);
  }, [searchParams]);

  return (
    <span className={className}>
      <Button
        variant="icon"
        icon={faSearch}
        aria-label={`${isExpanded ? "Close" : "Open"} search panel`}
        onClick={toggleExpanded}
        aria-controls="search-panel"
        aria-expanded={isExpanded}
      />
      {isExpanded ? (
        <div
          className="fixed right-0 top-14 z-10 w-full border-t border-t-slate-300 bg-background p-6 shadow-xl"
          id="search-panel"
        >
          {children}
        </div>
      ) : null}
    </span>
  );
};
