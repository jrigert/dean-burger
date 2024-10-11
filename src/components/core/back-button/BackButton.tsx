"use client";

import { Button } from "@/components/core/button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft as icon } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import type { FunctionComponent } from "react";

export interface BackButtonProps {
  text?: string;
}

export const BackButton: FunctionComponent<BackButtonProps> = (props) => {
  const { text = "Back" } = props;
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <Button
      variant="link"
      className="inline-flex items-center"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={icon} className="-mt-1" />
      {text}
    </Button>
  );
};
