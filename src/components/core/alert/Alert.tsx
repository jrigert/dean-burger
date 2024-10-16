"use client";

import { useAlert } from "@/hooks/useAlert";
import { useFadeAnimation } from "@/hooks/useFadeAnimation";
import { classNames } from "@/utils/style";
import { FunctionComponent } from "react";

export interface AlertProps {
  className?: string;
}

export const Alert: FunctionComponent<AlertProps> = (props) => {
  const { className } = props;
  const { alert, clearAlert } = useAlert();

  const { animationState } = useFadeAnimation({
    dependency: alert,
    onExit: clearAlert,
  });

  return (
    <>
      {alert ? (
        <div
          className={classNames(
            "fixed right-0 top-14 z-10 w-full -translate-y-16 rounded-b-xl px-6 py-3 font-teko text-xl font-semibold opacity-0 transition duration-1000 sm:w-auto",
            (animationState === "fade-in" || animationState === "show") &&
              "opacity-1 translate-y-0",
            alert.type === "danger"
              ? "bg-danger text-danger-foreground"
              : "bg-success text-success-foreground",
            className,
          )}
        >
          {alert.message}
        </div>
      ) : null}

      <div className="sr-only" aria-live="assertive">
        {alert?.message}
      </div>
    </>
  );
};
