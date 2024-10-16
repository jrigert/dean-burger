import { classNames } from "@/utils/style";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FunctionComponent } from "react";

export interface SpinnerProps {
  className?: string;
}

export const Spinner: FunctionComponent<SpinnerProps> = (props) => {
  const { className } = props;

  return (
    <FontAwesomeIcon
      icon={faSpinner}
      className={classNames("animate-spin text-2xl", className)}
      data-testid="spinner"
    />
  );
};
