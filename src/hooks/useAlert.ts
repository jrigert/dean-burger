"use client";

import { AlertContext } from "@/providers/AlertProvider";
import { useContext } from "react";

export const useAlert = () => {
  return useContext(AlertContext);
};
