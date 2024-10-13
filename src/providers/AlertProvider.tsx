"use client";

import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";

export interface Alert {
  message: string;
  type: "success" | "danger";
}

interface AlertContextValue {
  alert: Alert | null;
  clearAlert: () => void;
  setAlert: (alert: Alert) => void;
}

export const AlertContext = createContext<AlertContextValue | null>(null);

export const AlertProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [alert, setAlert] = useState<Alert | null>(null);

  const clearAlert = useCallback(() => {
    setAlert(null);
  }, []);

  const contextValue = useMemo(
    () => ({ alert, clearAlert, setAlert }),
    [alert, clearAlert],
  );

  return (
    <AlertContext.Provider value={contextValue}>
      {children}
    </AlertContext.Provider>
  );
};
