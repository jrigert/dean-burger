import { Breakpoint } from "@/components/core/breakpoint/Breakpoint";
import { Header } from "@/components/layout/header/Header";
import type { FunctionComponent, PropsWithChildren } from "react";

export const PageTemplate: FunctionComponent<PropsWithChildren> = async (
  props,
) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Breakpoint />
      <main>{children}</main>
    </>
  );
};
