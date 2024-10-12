"use client";

import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useMemo,
  useState,
} from "react";

interface AlertContextValue {
  message: string;
  setMessage: (message: string) => void;
}

export const AlertContext = createContext<AlertContextValue>({
  message: "",
  setMessage: () => {},
});

export const AlertProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [message, setMessage] = useState<string>("");
  const contextValue = useMemo(() => ({ message, setMessage }), [message]);

  return (
    <AlertContext.Provider value={contextValue}>
      {children}
    </AlertContext.Provider>
  );
};
