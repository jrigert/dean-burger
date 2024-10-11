import { Header } from "@/components/layout/header/Header";
import type { FunctionComponent, PropsWithChildren } from "react";

export const Page: FunctionComponent<PropsWithChildren> = async (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main className="pt-14">{children}</main>
    </>
  );
};
