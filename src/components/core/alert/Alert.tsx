"use client";

import { useAlert } from "@/hooks/useAlert";
import { FunctionComponent, useEffect } from "react";

type Timeout = ReturnType<typeof setTimeout>;

const TIMEOUT_DURATION = 4000;

export const Alert: FunctionComponent = () => {
  const { message, setMessage } = useAlert();

  useEffect(() => {
    let timeout: Timeout;

    if (message) {
      setTimeout(() => {
        setMessage("");
      }, TIMEOUT_DURATION);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [message, setMessage]);

  if (!message) {
    return null;
  }

  return (
    <div className="bg-success fixed right-0 top-14 z-10 w-full rounded-b-xl px-6 py-3 font-semibold sm:w-auto">
      {message}
    </div>
  );
};
