"use client";

import { useAlert } from "@/hooks/useAlert";
import { classNames } from "@/utils/style";
import { FunctionComponent, useEffect } from "react";

type Timeout = ReturnType<typeof setTimeout>;

const TIMEOUT_DURATION = 4000;

export interface AlertProps {
  className?: string;
}

export const Alert: FunctionComponent<AlertProps> = (props) => {
  const { className } = props;
  const { alert, clearAlert } = useAlert();

  useEffect(() => {
    let timeout: Timeout;

    if (alert) {
      timeout = setTimeout(() => {
        clearAlert();
      }, TIMEOUT_DURATION);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [alert, clearAlert]);

  if (!alert) {
    return null;
  }

  const { message, type } = alert;

  return (
    <div
      className={classNames(
        "fixed right-0 top-14 z-10 w-full rounded-b-xl px-6 py-3 font-teko text-xl font-semibold sm:w-auto",
        type === "danger"
          ? "bg-danger text-danger-foreground"
          : "bg-success text-success-foreground",
        className,
      )}
    >
      {message}
    </div>
  );
};
