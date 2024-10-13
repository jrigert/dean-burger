"use client";

import { AlertContext } from "@/providers/AlertProvider";
import { useContext } from "react";

export const useAlert = () => {
  const alertContext = useContext(AlertContext);

  if (!alertContext) {
    throw new Error("useAlert required a parent AlertProvider");
  }

  return alertContext;
};
